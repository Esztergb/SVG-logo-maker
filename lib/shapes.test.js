// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

// Importing Triangle, Square, Circle classes from ./shapes.js
const { Circle, Square, Triangle } = require("./shapes");

//testing for a circle with a red background to render
describe("CircleTest", () => {
  test("test for circle with yellow background color and pink text color", () => {
    const shape = new Circle();
    shape.setColor("yellow");
    shape.setText("EGB");
    shape.setTextColor("pink")
    expect(shape.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="yellow" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="pink">EGB</text></svg>`
    );
  });
});

//testing for a square with a yellow background to render
describe("SquareTest", () => {
  test("test for square with a blue background color and red text color", () => {
    const shape = new Square();
    shape.setColor("blue");
    shape.setText("EGB");
    shape.setTextColor("red");
    expect(shape.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect width="200" height="200" fill="blue"/> <text x="100" y="125" font-size="70" text-anchor="middle" fill="red">EGB</text> </svg>`
    );
  });
});

//testing for a triangle with a blue background to render - example test give in the challange readme
describe("TriangleTest", () => {
  test('test for triangle with a black background color and white text color', () => {
    const shape = new Triangle();
    shape.setColor("black");
    shape.setText("EGB");
    shape.setTextColor("white");
    expect(shape.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="150, 18 244, 182 56, 182" fill="black" /><text x="150" y="145" font-size="50" text-anchor="middle" fill="white">EGB</text></svg>`
    );
  });
});