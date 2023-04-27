class Shape {
    constructor() {
        this.color = ""
    }
    setColor(colorParam) {
        this.color = colorParam
    }
}
const myShape = new Shape()
console.log(myShape)
myShape.setColor("red")
console.log(myShape)

class Circle extends Shape {
    
}

class Square extends Shape {
    
}

class Triangle extends Shape {
    
}