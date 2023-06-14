const questions = [
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
];

module.exports = questions;