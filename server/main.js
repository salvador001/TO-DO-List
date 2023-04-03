// import { Meteor } from 'meteor/meteor';
// import { LinksCollection } from '/imports/api/links';

import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../imports/api/TasksCollection';
import './index'
// const insertTask = taskText => TasksCollection.insert({ title: taskText });

// Meteor.startup(() => {
//     if (TasksCollection.find().count() === 0) {
//         [
//             'First Task',
//             'Second Task',
//             'Third Task',
//             'Fourth Task',
//             'Fifth Task',
//             'Sixth Task',
//             'Seventh Task',
//         ].forEach(insertTask);
//     }
// });