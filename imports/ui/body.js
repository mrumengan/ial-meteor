import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './body.html';
 
Template.body.helpers({
  tasks: [
    { text: 'Daftar Gawai' },
    { text: 'Daftar Gawai Berdasarkan Lokasi' },
  ],
});

Template.task.events({
  'click': function(){
      console.log("You clicked something");
  }
});