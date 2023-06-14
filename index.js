//packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { generateSVG } = require("./lib/generateSVG");
const { generateShape } = require("./lib/generateShape");

inquirer
  .prompt([
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
    },
  ])
  .then((data) => {
    const svgPath = "./examples/logo.svg";
    const finalLogo = generateShape(data);

    //Generate the svg logo here.
    fs.writeFile(svgPath, generateSVG(finalLogo), (err) =>
      err ? console.error(err) : console.log("Generated logo.svg")
    );
  })
  .catch((err) => console.error(err));
  