//packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const setShape = require("./lib/shapes")


const questions = () => {
    return inquirer.prompt([
    {
      type: "list",
      message: "Pick a shape for your logo!",
      name: "logoShape",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      message: "Please enter color code or HEX# for your logo background!",
      name: "logoColor",
    },
    {
      type: "input",
      message: "Please enter a 1-3 character text for your logo",
      name: "text",
    },
    {
      type: "input",
      message: "Please enter color code or HEX# for your logo text!",
      name: "textColor",
    },
  ]);
};

//function to create SVG file  
function createLogo(response) {
  const svg = setShape(respomse);
  fs.writeFile(fileName, svg, () => console.log('Logo.svg generated'));
};

//Function to initialize app, catch errors
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      createLogo(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

init();


