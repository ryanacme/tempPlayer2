import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if (Sounds.find().count() == 0){
		for (var i=1; i < 3; i++){
			Sounds.insert({
				// snd_src:"snd_"+i+".jpg",
				snd_alt:"Sound "+i
			});
		}
		console.log("main-server.js says: "+Sounds.find().count());	
	}
});

Meteor.publish("sounds", function(){
    return Sounds.find();
});
