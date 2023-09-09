const express = require('express');  // first set up the express server
const path = require('path');       //require to make view folder
const port = 8000;

const db = require('./config/mongoose');
const ToDo = require('./models/toDoSchema');
const app = express();

app.set('view engine', 'ejs');         //set up views template
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());         //Body parser it reads data and kept in key value pair

app.use(express.static('assets'));       //For static files  work as Middleware

const toDoList = [
    {
        description : "For Study",
        catagory : "Work",
        time : "03-12-2022"
    }
]
app.get('/',function(req,res){
    ToDo.find({},function(err,toDoList){
        if(err){
            console.log("Error in fetching contacts from db");
            return;
        }
        return res.render('home',{
            title : "My To Do App",
            toDo : toDoList
           });
    })
  
});


app.post('/create-to-do',function(req,res){
    // // console.log(req.body);
    // toDoList.push(req.body);             //append the data after submitting the form on the home page via push method (req.body)
    // return res.redirect('/');

    ToDo.create({                       //Populate the db
        description : req.body.description,
        catagory : req.body.catagory,
        time : req.body.date 
    },function(err,newToDO){
        if(err){
            console.log("Error",err);
            return;
        }
        console.log('*******',newToDO);
        return res.redirect('/');
    });
});

app.get('/delete-toDo',function(req,res){
    
    let id = req.query.id;

    ToDo.findByIdAndDelete(id,function(err){
        if(err){
            console.log("Error in deletion from database");
            return;
        }
        return res.redirect('/');
    })
})



app.listen(port,function(err){        //Checking if an error or not
    if(err){
        console.log("Error in running the server",err);
        return;
    }

    console.log("Server is perfectly running!");
})









