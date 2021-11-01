const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());

const PORT = 1100;

let user = {
    username:"ImaginaryFatMan",
    password:"Password1",
    email:"YY8644CD@go.minnstate.edu",
    course:{
        course:{
            courseId:"2256",
            courseName:"Introduction to Pho",
            startDate:"10/31/2021",
            endDate:"01/01/2022"
        },
        course1:{
            courseId:"0001",
            courseName:"Introduction to Cars",
            startDate:"7/25/2020",
            endDate:"01/01/2022"
        },
        course2:{
            courseId:"0245",
            courseName:"Asura Studies",
            startDate:"01/01/2022",
            endDate:"01/01/2023"
        }
    }
}

app.get('/getUser',(req,res) =>{
    try{
        return res.status(200).json(user);
    }
    catch{
        return res.status(500);
    }
});

app.post('/addUser',(req,res) =>{
    try{
        console.log(req.body);
        returnMessage = "Added user " + req.body.username + " has been added."
        return res.status(200).send(returnMessage);
    }
    catch{
        return res.status(500);
    }
});

app.listen(PORT, ()=> {
    console.log("Server Started on port " + PORT.toString());
})