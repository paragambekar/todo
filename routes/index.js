// this is entry point for all the routes

// express routers helps us seperate our routes and controllers

const express = require('express');
const homeController = require('../controllers/home-controller');

const router = express.Router();

router.get('/',homeController.home);

router.use('/action',require('./action'));


// export so it is availabe to index.js from our root folder 
module.exports = router;