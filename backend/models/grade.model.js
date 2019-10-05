const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gradeSchema = new Schema({
    grade: {
        type: Number,
        min: 0,
        max: 100
    },

}, 
{timestamps: true, }); 

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;
