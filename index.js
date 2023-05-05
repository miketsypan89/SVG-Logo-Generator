const inquirer = require('inquirer');
const { Square, Triangle, Circle } = require("./lib/shapes.js");
const fs = require('fs')



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
  // {
  //   type: 'output',
  //   name: 'result',
  //   message: 'Generated logo.svg',
  // },


]

function init() {
  inquirer.prompt(questions)
    .then(answers => {
      if (answers.shape === "Square") {
        let shapeSquare = new Square(answers.text, answers.textColor, answers.backgroundColor);
        let logoSvg = shapeSquare.generateSVG(shapeSquare.render())


        fs.writeFile('logo.svg', logoSvg, (err) => {
          if (err) throw err;

          console.log('Generated logo.svg');
        });

      }

      if (answers.shape === "Circle") {
        let shapeCircle = new Circle(answers.text, answers.textColor, answers.backgroundColor);

        let logoSvg = shapeCircle.generateSVG(shapeCircle.render())


        fs.writeFile('logo.svg', logoSvg, (err) => {
          if (err) throw err;

          console.log('Generated logo.svg');
        });
      }

      if (answers.shape === "Triangle") {
        let shapeTriangle = new Triangle(answers.text, answers.textColor, answers.backgroundColor);
        let logoSvg = shapeTriangle.generateSVG(shapeTriangle.render())


        fs.writeFile('logo.svg', logoSvg, (err) => {
          if (err) throw err;

          console.log('Generated logo.svg');
        });
      }
    })
}


init();

// fs.writeFile('testSVG.svg', svg, (err) => {
//   if (err) throw err;

//   console.log('Generated logo.svg');
// });