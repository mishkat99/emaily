const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
// or const { Schema } = mongoose; 
// mongoose class has a property named Schema, take it and store as name Schema

const userSchema = new Schema({
	googleID: String
});

mongoose.model('users', userSchema)