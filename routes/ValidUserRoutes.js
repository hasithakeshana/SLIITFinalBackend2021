const express = require('express');
const router = express.Router();

const Users = require('../models/Users');
const Packages = require('../models/Package');
var jwt = require('jsonwebtoken');


router.post('/signup',function(req,res,next){


    Users.findOne({ email: req.body.email}). then(user =>{
        if(user) {
            res.send(JSON.stringify({message: "User is exists",valid: false}));
        } else {

            Users.create(req.body).then(function(user){
                res.send(JSON.stringify({message: "User reg success",valid: true}));

            });
        }
    });
});


// user login


router.post('/login', async (req, res, next) => {
    try {

        const st = await Users.findOne({email: req.body.email}).then((user)=>{


        if(user === null)
        {
           
           res.send(JSON.stringify({message: "User does not exist",isValidLogin: false}));
        }

        else if (user.email === req.body.email && user.password === req.body.password){

            const payload = {
                id: user._id,
                email: user.email,
                role: "customer",
              };

              jwt.sign(
                payload,
                "secret",
                {
                  expiresIn: 86400 // 1 day
                },
                (err, token) => {
                  // res.json({
                  //   isValidLogin: true,
                  //   token: "Bearer " + token,
                  //   token1 : token
                  // });
                  res.send(JSON.stringify({message: "User find",isValidLogin: true,token : token ,user}));
                }
              );

        }

        else{

        }


        });

} catch (e) {
        
        next(e)
    }
});


// book a package


router.post("/bookPackage/:id", async (req, res) => {  


    try {

        //const package = {email : req.body.email};

        const userFind = await Users.findOne({_id: req.body.userId});

        console.log('student book'+userFind);

        if(userFind === null)
        {

        }
        else{

           const {email} = userFind;
           const user = {email : email}; 

           
        const item =  await Packages.findOneAndUpdate({_id: req.params.id}, {$push: {partcipants: user}}, {new: true});

        res.send(JSON.stringify({message:'successfully booked'}));

        }




    } catch (e) {
        console.log(e);
    }

});


module.exports = router;