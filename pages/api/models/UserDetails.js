
import Connection from "./connection"

const mongoose = require("mongoose");


const Schema = mongoose.Schema;

// Schema for storing user info.

const userSchema = new Schema({

	username: {type: String, required: true, min: 3, max: 255, unique: true},
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true, min: 6, max: 255},

}, { timestamps: true });




const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;