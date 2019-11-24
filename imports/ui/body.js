import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';
import { Gawai } from '../api/gawai.js';

import './task.js';
import './gawai.js';
import './body.html';
 
Template.body.helpers({
  gawais() {
    return Gawai.find({}, { sort: { createdAt: -1 }, limit: 5 });
  },
  tasks() {
    return Tasks.find({}, { sort: { createdAt: -1 } });
  },
});

Template.task.events({
  'click': function(){
      console.log("You clicked something");
  }
});

Template.body.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
 
    // Insert a task into the collection
    Tasks.insert({
      text,
      createdAt: new Date(), // current time
    });
 
    // Clear form
    target.text.value = '';
  },
});