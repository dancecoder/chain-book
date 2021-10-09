var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = req('mongoose');
var Post = req('./post.js')


const PORT = 3000;
const DB_URL = 'mongodb+srv://admin:user@cluster0.dmqur.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()

app.post("/", async (req, res) => {
    try {
        const {author, title, content, picture} = req.body
        const post = await Post.create({author, title, content, picture})
        console.log(req.body);
        res.status(200).json('Server at working')
    } catch (e){
        res.status(500).json(e)
    }
    
});

app.get("/", function(req, res){
    console.log(req.query);
    res.end("Hello, wonderful world!");
});

async function startApp(){
    try{
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('SERVER START, PORT:' + PORT))
    } catch (e){
        console.log(e)
    }
}

startApp();

app.listen(PORT,() => console.log('Server starting port:' + PORT))