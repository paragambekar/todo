// Require the library
const mongoose = require('mongoose');

// connect to the database 
mongoose.connect('mongodb://localhost/todo_app-db');

// accquire the connection if it is successful 
const db = mongoose.connection;

// Throw error when not able to establish connection with data 
db.on('error',console.error.bind(console,'Error connecting to database'));

// To check is successfully connected to database 
db.once('open',function(){
    console.log('Successfully connected to database');
});