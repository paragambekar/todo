// Schema of our note. 

// Require mongoose 
const mongoose = require('mongoose');


// Schema of our individual note 
const listSchema = new mongoose.Schema({

    description : {
        type :String,
        required: true
    },
    category : {
        type : String,
    },
    date : {
        type : String,
        required : true
    }

});

// Model the Schema to List 
const List = mongoose.model('List',listSchema);

// export so it can we used outside this module 
module.exports = List;