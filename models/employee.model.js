const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    ques: {
        type: String,
        required: 'This field is required.'
    },
    ans: {
        type: String
    }
});

// Custom validation for email
mongoose.model('Employee', employeeSchema);