// This modules contains the actions for Creating, Saving and Deleting note or list from database 
// import database config 
const db = require('../config/mongoose');
const { listenerCount } = require('../models/list');


// Require the model of our app 
const List = require('../models/list');

// To create,save note to database and render the page with the notes/list added  
module.exports.create = function(request,response){

    var months = ["","JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEPT","OCT","NOV","DEC"];

    console.log(request.body);
    let dateNow;
    if(request.body.date.length == 0){
        dateNow = 'No deadline';
    }else{
        dateNow = request.body.date;
    }

    if(dateNow != 'No deadline'){
        let year = dateNow.slice(0,4);
        let month = (Number)(dateNow.slice(5,7));
        month = months[month];
        let day = dateNow.slice(8,10);

        dateNow = day + " " + month + " " + year;
    }
    
    // Creating a entry in our database according to out Models Schema 
    List.create({
        description : request.body.description,
        category : request.body.category,
        date : dateNow,
    },function(error,newTodo){
        if(error){
            console.log('Error create list');
            return;
        }
        console.log("******",newTodo);
        return response.redirect('back');
    });

}



// To delete a particular note from the data and to render the appropriate page after delete operation 
module.exports.delete = function(request,response){

    let id = request.body.id;

    // find the note with the unique id and delete from the storage and render the changed page 
    List.findByIdAndDelete(id,function(error){
        if(error){
            console.log('Error in deleting tasks');
            return;
        }

        return response.redirect('back');
    });

}