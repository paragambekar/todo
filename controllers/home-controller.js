const List = require("../models/list");

module.exports.home = function(request,response){

    // console.log("----------*****",request,request.body);
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
 

