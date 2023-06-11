//The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes.

// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

//testing for a triangle with a blue background to render - example test give in the challange readme
describe("TriangleTest", () => {
  test('test for triangle with a blue background color', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
    '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});