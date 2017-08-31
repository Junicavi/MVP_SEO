'use strict';
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
	name :{
		type: String,
		required: 'Kindly enter the name of the task'
	},
	status: {
		type: Date,
		default: Date.now
	},
	status: {
		type: [{
			type: String,
			enum: ['pendind','ongoing','ccompleted']
		}],
		default: ['pending']
	}
});

module.exports = mongoose.model('Tasks', TaskSchema);