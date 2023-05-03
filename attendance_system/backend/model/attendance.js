var mongoose = require('mongoose');
var Schema = mongoose.Schema;

attendacneSchema = new Schema( {
    studentname: String,
	subject: String,
	gender: String,
	sub1hoursconducted: Integer,
    sub1hoursAttended: Integer,
    sub2hoursconducted: Integer,
    sub2hoursAttended: Integer,
    sub3hoursconducted: Integer,
    sub3hoursAttended: Integer,
    sub4hoursAttended: Integer,
    sub4hoursconducted: Integer,
}),
attendance = mongoose.model('attendance', attendanceSchema);

module.exports = user;