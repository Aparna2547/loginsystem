var express = require('express');
const nocache = require('nocache');
var router = express.Router()

//local variavle

const localdb ={
    email:"aparna@gmail.com",
    password:"12345"
}

//for listing

const items = [
{
  image:'/assets/image1.jpg',
  title : "realme narzo N55",
  description : "realme narzo N55 (Prime Blue, 4GB+64GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI Camera",
  price : 10999
},
{
image : 'assets/image2.jpg',
title : "realme 10 4G",
description : "realme 10 4G (Clash White 8GB+128GB)",
price :17799.00
},
{
  image : 'assets/image3.jpg',
  title : "Apple iPhone 14",
  description: "Apple iPhone 14 ",
  price: 79000
},
{
  image : 'assets/image4.jpg',
  title : "OPPO K3 ",
  description: "OPPO K3 (Aurora Blue, 8GB RAM, AMOLED Display 128GB Storage, 3765mAH Battery) Refurbished",
  price: 9999
}
]

//login user
router.post('/login', nocache(), (req,res) =>{
    if(req.body.email == localdb.email && req.body.password == localdb.password){
        req.session.user = req.body.email;
        console.log(req.session.user);
        res.redirect('/dashboard')
    }else{
        res.render('base', {title:"Login System", error:true})
    }
})


//route for dashboard
router.get("/dashboard",(req,res) =>{
    if(req.session.user){
        res.render("dashboard", {items})
    }else{
        res.redirect("/")
    }
})

//route for logout
router.get("/logout",nocache(),(req,res) => {
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
            res.send("Error")
        }else{
            res.render('base',{title:"Express" ,logout: "logout Succesfully..."})
        }
    })
})


// router.get('/login',(req,res)=>{
//     console.log(req.session.user);
// })


module.exports = router