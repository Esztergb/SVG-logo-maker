//packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

//linking to page where the readme is developed
const generateSVG = require("./lib/generateSVG");

//array of questions for user input using inquirer
const questions = () => {
  
  return inquirer.prompt([
    {
      type: "input",
      message: "Please enter color code or HEX# for your logo text!",
      name: "text-color",
    },
    {
      type: "list",
      message: "Pick a shape for your logo!",
      name: "shape",
      choices: ['circle', 'triangle', 'square']
    },
    {
      type: "input",
      message: "Please enter color code or HEX# for your logo background!",
      name: "logo-color",
    },
    {
      type: "input",
      message:
        "Please enter a 3 character text for your logo",
      name: "usage",
    },
]);
};
  

//Create a function to write README file
const writeFile = (data) => {
  fs.writeFile("logo.svg", data, (err) => {
    // if there is an error
    if (err) {
      console.log(err);
      return;
      // when the README has been created
    } else {
      console.log("Generated logo.svg!");
    }
  });
}; 

// TODO: Create a function to initialize app
function init() {
questions()
  // getting user answers
  .then((answers) => {
    return generateSVG(answers);
  })
  // using data to display on page
  .then((data) => {
    return writeFile(data);
  })
  // catching errors
  .catch((err) => {
    console.log(err);
  });
};

// Function call to initialize app
init();
