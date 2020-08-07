//this is the way how we use express library
const express = require('express');
const app = express();
const server = require('http').Server(app);

//this is library
const { v4: uuidv4} = require('uuid');
app.set('view engine','ejs');

//read public folder which is secure
app.use(express.static('public'));

//`/${} is called string literal
app.get('/',(req,res) => {
    res.redirect(`/${uuidv4()}`);
});
//get roomId in Web
app.get('/:room',(req, res)=>{
    res.render('room' , {roomId:req.params.room})
});


server.listen(3030);