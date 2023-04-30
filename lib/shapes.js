class Shape {
    constructor(answers) {
        // this.backgroundColor = `${answers.backgroundColor}`;
        this.text = `${answers.text}`;
        this.textColor = `${answers.textColor}`;
        this.height = "200px";
        this.width = "300px";
    }
    setColor() {
        `${answers.backgroundColor}`
    }
}
const myShape = new Shape()
console.log(myShape)

class Circle extends Shape {
    constructor(text, textColor, backgroundColor, height, width) {
        super(text, textColor, backgroundColor, height, width);
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill=" ${this.backgroundColor}"/>`;
    }
}

class Square extends Shape {
    constructor(text, textColor, backgroundColor, height, width) {
        super(text, textColor, backgroundColor, height, width);
    }
    render() {
        return `<rect x="70" y="20" width="80" height="80" fill="${this.backgroundColor}"/>`;
    }
}

class Triangle extends Shape {
    constructor(text, textColor, backgroundColor, height, width) {
        super(text, textColor, backgroundColor, height, width);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.backgroundColor}"/>`;
    }
    

}

module.exports = {Square, Triangle, Circle};

// {/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

// <circle cx="150" cy="100" r="80" fill="green" />

// <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg> */}