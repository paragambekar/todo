// Require Express 
const express = require('express');
// Select a port we want to run our server 
const port = 8000;


const db = require('./config/mongoose');

// Fire up or start our Express Server 
const app = express();

// Redirect all requests to index.js file in routes directory 
app.use('/', require('./routes/index'));

// Setup the view engine 
app.set('view engine','ejs');
app.set('views','./views');

// to use static files in assests directory 
app.use(express.static('./assets'));


app.listen(port, function(error){
    if(error){
        console.log('Error running the server');
    }

    console.log(`Server is up and running on port ${port}`);
});





