import { Template } from 'meteor/templating';
 
import { Gawai } from '../api/gawai.js';
 
import './gawai.html';
 
// Template.task.events({
//   'click .toggle-checked'() {
//     // Set the checked property to the opposite of its current value
//     Tasks.update(this._id, {
//       $set: { checked: ! this.checked },
//     });
//   },
//   'click .delete'() {
//     Tasks.remove(this._id);
//   },
// });