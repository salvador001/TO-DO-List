// Back-End
import { TasksCollection } from '../imports/api/TasksCollection';


Meteor.methods({
    getData: function() {
        const data = TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch();
        console.log(data)
        return data;
    },

    postData: function(data) {
        try {
            TasksCollection.insert({ title: data, isChecked: false, createdAt: new Date() });
            return data;
        } catch (error) {
            return error;

        }
    },

    deleteData: function(_id) {
        try {
            TasksCollection.remove(_id);
            return _id;
        } catch (error) {
            return error;

        }

    },

    isCheckedItem: function(_id, checked) {
        try {
            TasksCollection.update({ _id: _id }, { $set: { isChecked: checked } })
        } catch (error) {
            return "ok";

        }

    },

    editItem: function(_id, _task) {
        try {
            // TasksCollection.insert({ title: data, isChecked: false, createdAt: new Date() });
            TasksCollection.update({ _id: _id }, { $set: { title: _task } })
        } catch (error) {
            return error;

        }

    }




})