// import database config 
const db = require('../config/mongoose');
const { listenerCount } = require('../models/list');

const List = require('../models/list');

module.exports.create = function(request,response){

    console.log(request.body);

    List.create({
        description : request.body.description,
        category : request.body.category,
        date : request.body.date,
    },function(error,newTodo){
        if(error){
            console.log('Error create list');
            return;
        }
        console.log("******",newTodo);
        return response.redirect('back');
    });

}




module.exports.delete = function(request,response){

    let id = request.body.abc;
    console.log(id);


    List.findByIdAndDelete(id,function(error){
        if(error){
            console.log('Error in deleting tasks');
            return;
        }

        return response.redirect('back');
    });

}