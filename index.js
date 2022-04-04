
const express = require('express');
const port = 8000;

const app = express();

// use express router 
app.use('/', require('./routes/index'));

app.listen(port, function(error){
    if(error){
        console.log('Error running the server');
    }

    console.log(`Server is up and running on port ${port}`);
});





