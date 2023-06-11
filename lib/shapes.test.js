//The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes.

// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

// Importing Triangle, Square, Circle classes from ./shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");

//testing for a triangle with a blue background to render - example test give in the challange readme
describe("TriangleTest", () => {
  test('test for triangle with a blue background color', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual(
    '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

//testing for a circle with a red background to render
describe("CircleTest", () => {
  test("test for circle with a red background color", () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#ca00ca" />'
    );
  });
});

//testing for a square with a yellow background to render
describe("SquareTest", () => {
  test("test for square with a yellow background color", () => {
    const shape = new Triangle();
    shape.setColor('yellow');
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="purple" />'
    );
  });
});