const express = require('express');
const bodyparser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');


const app = express();

var mongoDb = "mongodb+srv://amankumartiwari1502:Harsh9575381459@cluster0.2ur35sv.mongodb.net/Faculty"
mongoose.set('strictQuery', false);
mongoose.connect(mongoDb);


// Schema define 
var Schema = mongoose.Schema;

// SCHEMAS

// Facultyuser schema
var faculties = new Schema({
    name: String,
    Uid: String,
    password:String,
    school:String,
    district:String,
    phone: String,

});

// MODELS

// Faculty Model 
var facultyModel = mongoose.model('faculty', faculties);

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


// REQUESTS

app.get("/", function (req, res) {

    // const test = new facultyModel({
    //     name:"Harshit",
    //     Uid:"AT1502",
    //     password:"Harshit",
    //     phone:"7898345476"
    // })
    // test.save().then(console.log("saved"));

    res.render("index");
})





// ----------------------------Listen-----------------------||

app.listen(process.env.PORT || 8000, function () {
    console.log("server started at port 8000");
});