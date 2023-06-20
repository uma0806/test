var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var userSchema = new Schema({
 
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    hobbies: {
        type: String,
        required: true
    }
    gender: {
        type: String,
        required: true
    }
   
});
 
module.exports = mongoose.model('employees', userSchema);
