const mongoose = require('mongoose');
const toDoSchema = new mongoose.Schema({
    description : {
        type : String,
        required : true
    },
    catagory : {
        type : String,
        required : true
    },
    time : {
        type : String,
        required : true
    }
});

const ToDo = mongoose.model('ToDo',toDoSchema);
module.exports  = ToDo;