const inquirer = require('inquirer');
const {Square, Triangle, Circle} = require("./shapes.js");

const questions = [
    {
      type: 'list',
      name: 'name',
      message: 'Pick a shape for your logo:',
      choices: ["Square", "Circle", "Triangle"]
    },
    {
      type: 'input',
      name: 'name',
      message: 'Please enter up to 3 characters for your logo',
    },
    {
      type: 'input',
      name: 'name',
      message: 'What background color would you like?',
    },
    {
      type: 'input',
      name: 'name',
      message: 'What text color would you like?',
    },


]