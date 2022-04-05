// Require the library
const mongoose = require('mongoose');

// connect to the database 
mongoose.connect('mongodb://localhost/todo_app-db');

// accquire the connection if it is successful 
const db = mongoose.connection;


db.on('error',console.error.bind(console,'Error connecting to db'));

db.once('open',function(){
    console.log('Successfully connected to db');
});