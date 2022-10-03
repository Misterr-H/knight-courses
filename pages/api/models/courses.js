

import Connection from "./connection"


const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const enrolledUserSchema = new Schema({

  user: {

    type: Schema.Types.ObjectId,
    ref: "User",

  },

});

const lecturesSchema = new Schema({


  lecture_link: {type: String},
  lecture_title: {type: String, min: 6, max: 255}

});

const markAsComplete = new Schema({

	user: {type: String,},
	lecture: {type: Schema.Types.ObjectId}

})

const courseSchema = new Schema({

	title: {type: String, unique: true, min: 6, max: 1000},
	author: String,
	description: String,
	price: Number,
	// category: String,
	// releaseDate: Date,
	language: String,
	duration: String,
	certificate: Boolean,

	lectures: [lecturesSchema],
	enrolls: [enrolledUserSchema],

}, { timestamps: true });


const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);

const Status = mongoose.models.markAsComplete || mongoose.model('markAsComplete', markAsComplete);

module.exports = {Course, Status};