//packages needed for this application
const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;
const { Circle, Triangle, Square } = require("./lib/shapes");


const userInput = [
    {
      type: "list",
      message: "Pick a shape for your logo!",
      name: "shape",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      message: "Please enter color code or HEX# for your logo background!",
      name: "shapeColor",
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
    }
  ]

  const init = async () => {
    try {
      const data = await inquirer.prompt(userInput);
      let shape;
      if (data.shape == "circle") {
        shape = new Circle(); 
      } else if (data.shape == "triangle") {
        shape = new Triangle();
      } else {
        shape = new Square();
      }
      shape.setColor(data.shapeColor);
      shape.setText(data.text);
      shape.setTextColor(data.textColor);

      console.log("Generated logo.svg");
      writeFile(`./examples/${data.shape}.svg`, shape.render()); 
    } catch (err) {
      console.error(err);
    }
  };

  init();
