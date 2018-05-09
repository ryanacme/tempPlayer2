import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
// import $ from 'jquery';
// import 'mediaelement/full';
import './main.html';



Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);

});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

// Template.player.onRendered(function() {

//   $('video, audio').mediaelementplayer({
// 	// pluginPath: '/packages/johndyer_mediaelement/build/',
//   });
//   // console.log("hiiiii");
// });

Template.player.helpers({
  sounds: function(){
    return Sounds.find({});
  },
});

// Template.player.onRendered(function() {
//   const player = new Plyr('#player');

// });

// Template.player.onRendered(function() {
//       $(document).ready(function() {
//         var script = document.createElement("script");
//         script.type="text/javascript";
//         script.src = "https://cdn.plyr.io/3.3.6/plyr.js";
//         $("#script_div").append(script);
//       });
// });

Template.player.onRendered(function() {
   $.getScript("https://cdn.plyr.io/3.3.6/plyr.js");
   const player = new Plyr('#player');
});