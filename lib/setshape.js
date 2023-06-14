const { Circle, Square, Triangle } = require("./shapes")

function setShape(response) {
    if (response.shape == "Circle") {
        let chosenShape = new Circle (response.shapeColor, response.text, response.textColor)
        return chosenShape.render()
    }
    if (response.shape === "Square") {
        let userShape = new Square (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.shape === "Triangle") {
        let userShape = new Triangle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
};

module.exports = setShape;
