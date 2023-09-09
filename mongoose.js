const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/toDo_db');

const db = mongoose.connection;

db.on('error' , function(err){
    console.log("Error in connecting to the db");
    
})

db.once('open',function(){
    console.log("Database succesfully connected");
})