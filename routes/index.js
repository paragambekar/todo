// this is entry point for all the routes

// express routers helps us seperate our routes and controllers

// Require express 
const express = require('express');

// Setting path for home page controller 
const homeController = require('../controllers/home-controller');

// Setting up Router 
const router = express.Router();

// if(url/) use this to render our home page 
router.get('/',homeController.home);

// if(url/action) route all request to action.js file
router.use('/action',require('./action'));


// export so it is availabe to index.js from our root folder 
module.exports = router;