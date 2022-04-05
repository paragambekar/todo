
const express = require('express');
const port = 8000;

const db = require('./config/mongoose');
const app = express();

// use express router 
app.use('/', require('./routes/index'));

// Setup the view engine 
app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('./assets'));


app.listen(port, function(error){
    if(error){
        console.log('Error running the server');
    }

    console.log(`Server is up and running on port ${port}`);
});





