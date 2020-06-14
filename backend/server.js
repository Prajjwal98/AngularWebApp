var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var jwt = require('jwt-simple');

var app = express();
app.use(cors());

app.use(bodyParser.json());

var User = require('./models/user');

app.get('/',(req,res)=>{
    res.send('Hey I\'m working !!');
})

app.post('/register',(req,res)=>{
    var userData = req.body;
    var user = new User(userData);
    console.log('inside register on server..')
    console.log(userData);
    user.save((err,result)=>{
        if(err)
            console.log('Error in saving the user');
        else
            console.log('User saved successfully !!');    
            console.log(user);
    })

    //res.sendStatus(200);
    res.status(200).send(user);
    
})

app.post('/login', async (req,res)=>{
    var loginData = req.body;
    var userFound = await User.findOne({email : loginData.email });
    if(!userFound)
        res.status(401).send("Email or Password invalid");
    
    if(loginData.pwd != userFound.pwd)
        res.status(401).send("Email or Password invalid");


    var payload = {};        
    var token = jwt.encode(payload,'123');

    res.status(200).send({token : token});

    console.log('User found'); 
    console.log(userFound);
    console.log(token);
    //res.status(200).send(userFound);
})

mongoose.connect('mongodb://admin:HCyWrKhB4qmDebJT@SG-AngularDB-34759.servers.mongodirector.com:27017/admin',
{useNewUrlParser:true, useUnifiedTopology:true},(err)=>{
    if(!err)
        console.log('Hey!! Connected to MongoDB..');

})
app.listen(3000);