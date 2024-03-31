#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;
console.log(chalk.red.bold("\n\t Creating Todo_List Application \n"));
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: "input",
            message: "enter your work",
            type: "input"
        }
    ]);
    todoList.push(addtask.input);
    console.log("Your work has been updated");
    let addmore = await inquirer.prompt([
        {
            name: "moretask",
            message: "Do You want To More Add Task?",
            type: "confirm",
            default: "false"
        }
    ]);
    condition = addmore.moretask;
}
console.log("Your updated TodoList!", todoList);
