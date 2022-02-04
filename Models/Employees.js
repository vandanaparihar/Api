var mongoose = require('mongoose');

var employeesSchema = mongoose.Schema({
    name:String,
    designation:String
})

module.exports = mongoose.model("employees",employeesSchema)
