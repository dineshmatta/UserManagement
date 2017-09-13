var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: String,
	email: String,
	age: Number,
	address: Object
});

module.exports = mongoose.model('User', UserSchema);