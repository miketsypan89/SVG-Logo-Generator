const inquirer = require('inquirer');
const { Square, Triangle, Circle } = require("./lib/shapes.js");


const questions = [
  {
    type: 'list',
    name: 'shape',
    message: 'Pick a shape for your logo:',
    choices: ["Square", "Circle", "Triangle"]
  },
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to 3 characters for your logo',
  },
  {
    type: 'input',
    name: 'backgroundColor',
    message: 'What background color would you like?',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'What text color would you like?',
  },


]

function init() {
  inquirer.prompt(questions)
    .then(answers => {
      if (answers.shape === "Square") {
        let shapeSquare = new Square(answers);
        return shapeSquare.render()
      }
      console.log(answers)
      if (answers.shape === "Circle") {
        let shapeCircle = new Circle(answers);
        return shapeCircle.render()
      }
      if (answers.shape === "Triangle") {
        let shapeTriangle = new Triangle(answers);
        return shapeTriangle.render()
      }
    })
}

init();