
// Require express 
const express = require('express');

// Setting up Router 
const router = express.Router();

// Setting path for action controller i.e. create or delete note from app 
const actionController = require('../controllers/action-controller');

// Middleware to decode data coming from browser 
router.use(express.urlencoded());

// to handle the requests coming to /action/create-list and execute create function from action-controller.js file
router.post('/create-list', actionController.create);

// to handle the requests coming to /action/delete-list and execute delete function from action-controller.js file 
router.post('/delete-list',actionController.delete);

module.exports = router;
