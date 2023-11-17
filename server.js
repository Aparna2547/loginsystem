const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session')
const router = require('./router')
const nocache = require('nocache')
const crypto = require('crypto')


app.set('view engine','ejs')


app.use(express.json())
app.use(express.urlencoded({extended:true}))

//for loading static contents
app.use(express.static(path.join(__dirname,'public')))


//middleware to prevent caching
app.use(nocache())

//create secret key for session middleware
const secretkey = crypto.randomBytes(32).toString('hex')

app.use(session({
    secret:secretkey,
    resave:false,
    saveUninitialized:true
}));



app.use('/',router)

//home route
app.get('/', (req,res) =>{
    if(req.session.user){
        res.redirect('/dashboard')
    }else{
        res.render('base',{title:"Login"})
    }
})





const port = 1000;
app.listen(port,()=>{
    console.log("Server running..");
});