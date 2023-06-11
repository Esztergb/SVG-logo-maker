//packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

function generateSVG 


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
  

//Create a function to write README file
const writeFile = (data) => {
  fs.writeFile("logo.svg", data, (err) => {
    // if there is an error
    if (err) {
      console.log(err);
      return;
      // when the logo has been created
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
