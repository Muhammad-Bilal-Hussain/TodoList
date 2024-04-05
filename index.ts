#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todoList:string []=[];
let condition = true;

console.log(chalk.red.bold("\n\t My Todo_List Application \n"));

while(condition){
    let option = await inquirer.prompt(
        [
            {
                name:"options",
                message:"what you want to select option!",
                type:"list",
                choices:["Add","Update/Edit","Delete","Exit"]
            },
        ]
    );
    if(option.options==="Add"){
    let addtask = await inquirer.prompt(
        [
            {
                name:"enter",
                message:"enter your work",
                type:"input",
                validate: function(value){
                    if(value.trim()!== ""){
                        return true;
                    }
                    return "Please enter a non-empty value."
                }
            },
        ]
    );
        todoList.push(addtask.enter.trim());
        console.log("Your work has been updated");
        console.log(todoList);
    }
    else if(option.options ==="Update/Edit"){
        let update = await inquirer.prompt(
            [
                {
                    name:"edit",
                    message:"Now Update your Todo_List",
                    type:"list",
                    choices:todoList.map((item)=>item)
                },
            ]
        )
    let editedTodoList = await inquirer.prompt(
        [
            {
                name:"edited",
                message:"Your Todo_List Now Update",
                type:"input",
                validate: function (value) {
                    if(value.trim() !== ""){
                        return true;
                    }
                    return"please enter a Non-empty value."
                },
            }
        ]
    );
    let todoListupdate = todoList.filter((val) => val !== update.edit);
    todoList =[...todoListupdate, editedTodoList.edited.trim()];
    console.log(todoList);
}else if (option.options === "Delete"){
    let tododelete = await inquirer.prompt([
        {
            name:"deleteList",
            message:"Are U Sure Delete This",
            choices: todoList.map((item) => item),
        }
    ]);
    let todoListupdate = todoList.filter((val) => val !== tododelete.deleteList);
    todoList= [...todoListupdate];
    console.log(todoList)
}else if (option.options === "Exit"){
    break;
}

}