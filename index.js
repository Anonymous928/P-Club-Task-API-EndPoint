const express = require('express');
const bodyParser = require('body-parser');

const app=express();
const port= 3000;

app.use(bodyParser.json());

app.post('/newpost', (req, res) => {
    const post = req.body;
    console.log(post);
    res.json(post);
});

app.listen(port, () =>{
    console.log('Listening at http://localhost:${post}');

});

const mysql2= require('mysql2');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('forum', 'root','', {
    dialect: 'mysql',
    host:'localhost',
    dialectModule: mysql2,
});

const Post = sequelize.define('post', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});

app.post('/newpost', async (req,res) => {
    try {
        const post = await Post.create(req.body);
        res.json(post);

    }
    catch(error){
        console.error
    }
})