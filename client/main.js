import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
// import $ from 'jquery';
// import 'mediaelement/full';
import './main.html';
import Plyr from 'plyr';




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

  tasksLoaded: function () {
    return Session.get('tasksLoaded');
  },
});

// Meteor.subscribe("sounds");

Meteor.subscribe('sounds', function onReady() {
  Session.set('tasksLoaded', true);
});

// Template.player.onRendered(function() {
//   const player = new Plyr('#player');

// });

Template.player.onRendered(function() {
      $(document).ready(function() {
        var script = document.createElement("script");
        script.type="text/javascript";
        script.src = "https://cdn.plyr.io/3.3.7/plyr.js";
        $("#script_div").append(script);
      });
      // const player = new Plyr('#player');
});

Template.player.onRendered(function() {
   $.getScript("https://cdn.plyr.io/3.3.7/plyr.js");
   const player = new Plyr('#player');
});

// Template.player.onRendered(function() {
//    $.getScript("https://cdn.plyr.io/3.3.6/plyr.js");
// });



document.addEventListener('DOMContentLoaded', () => { 
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  const player = new Plyr('.player');
  // const player = new Plyr(document.getElementById('player'));

  // Bind event listener
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }

  // Play
  on('.js-play', 'click', () => { 
    player.play();
  });

  // Pause
  on('.js-pause', 'click', () => { 
    player.pause();
  });

  // Stop
  on('.js-stop', 'click', () => { 
    player.stop();
  });

  // Rewind
  on('.js-rewind', 'click', () => { 
    player.rewind();
  });

  // Forward
  on('.js-forward', 'click', () => { 
    player.forward();
  });
});