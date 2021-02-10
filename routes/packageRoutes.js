const express = require('express');
const router = express.Router();
const multer = require('multer');
const Package = require('../models/Package');

// add a food coaching package to db

router.post("/savePackage", function (req, res) {   

   const package = new Package({

        name : req.body.name,
        category : req.body.category,
        trainer : req.body.trainer,
        description : req.body.description,
        image: req.body.image,
        fee  : req.body.fee,
        time : req.body.time,

    });

    package.save().then(function (dbProduct) {

        res.json(dbProduct);
    })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });


});


// retrieve all packages

router.get('/allPackages', async (req, res, next) => {
    try {

        const packages = await Package.find();

        res.send(JSON.stringify({pack : packages}));


    } catch (e) {

        next(e);
    }
});


// retrieve unique package

router.get('/package/:id', async (req, res, next) => {
    try {

        const package = await Package.findOne({_id: req.params.id});

        console.log(package);

        res.send(JSON.stringify({message: "package details", package : package}));

      } catch (e) {
        
        next(e)
    }
});





module.exports = router;






