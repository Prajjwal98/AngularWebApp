var mongoose = require('mongoose');

module.exports = mongoose.model('User',{
    fName : String,
    lname : String,
    email: String,
    pwd : String,
    mobile : Number
})