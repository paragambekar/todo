// Controller to render the main page according to the contents of the Database 

const List = require("../models/list");

// To render render the home with the lists in the database 
module.exports.home = function(request,response){

    List.find({}, function(error,todoList){
        if(error){
            console.log('error findind todolist');
            return;
        }

        // console.log(todoList);

        return response.render('home',{
            todo_list : todoList, 
        });

    });
}
 

