//The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes.

//parent class to extend to children classes (circle, square, triangle)

class Shape {
  constructor() {
    this.shapeColor = "";
    this.text = "";
    this.textColor = "";
  }
  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  setText(text) {
    this.text = text;
  }
  setTextColor(textColor) {
    this.textColor = textColor;
  }
}

class Circle extends Shape { 
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Square extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect width="200" height="200" fill="${this.shapeColor}"/> <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`
    }
}

class Triangle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="150" height="150" style="fill:${this.shapeColor}" /><text x="125" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

module.exports = { Triangle, Square, Circle }
