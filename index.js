// Import the necessary libraries and module
const express = require('express');
const bodyParser = require('body-parser');

// Create a new instance of Express
const app=express();
const port= 3000; //Set port number


// Use bodyParser middleware to parse incoming request bodies as JSON
app.use(bodyParser.json());

//Define a new endpoint that listens for HTTP POST requests to /newpost
app.post('/newpost', (req, res) => {
    
    const post = req.body;               //Get post data from request body
    console.log(post);                  //Log post data to console
    res.json(post);        
});

// Start the server and listen on the defined port
app.listen(port, () =>{
    console.log('Listening at http://localhost:${post}');

});

const mysql2= require('mysql2');            //Import mysql2 library
const Sequelize = require('sequelize');     //Import Sequelize library

const sequelize = new Sequelize('forum', 'root','', {       //define database connection parameters
    dialect: 'mysql',
    host:'localhost',
    dialectModule: mysql2,
});

const Post = sequelize.define('post', {                     //define Post model
    title: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});

app.post('/newpost', async (req,res) => {                   //define async POST endpoint for new posts
    try {
        const post = await Post.create(req.body);
        res.json(post);

    }
    catch(error){                                           //Handle errors
        console.error                                       //Log error to console
    }
})
