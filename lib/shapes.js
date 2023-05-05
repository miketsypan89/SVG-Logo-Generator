class Shape {
    constructor(text, textColor, backgroundColor, height, width) {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
    setColor() {
        `${answers.backgroundColor}`
    }
    generateSVG(chosenShape) {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${chosenShape}
        <text x="150" y="140" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text> 
        </svg>
        `
    }
}

class Circle extends Shape {
    constructor(text, textColor, backgroundColor) {
        super(text, textColor, backgroundColor);
    }
    render() {
        return `<circle cx="150" cy="120" r="80" fill=" ${this.backgroundColor}"/>`;
    }
}

class Square extends Shape {
    constructor(text, textColor, backgroundColor) {
        super(text, textColor, backgroundColor);
    }
    render() {
        return `<rect x="80" y="50" width="140" height="140" fill="${this.backgroundColor}"/>`;
    }
}

class Triangle extends Shape {
    constructor(text, textColor, backgroundColor) {
        super(text, textColor, backgroundColor);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.backgroundColor}"/>`;
    }


}

module.exports = { Square, Triangle, Circle };
