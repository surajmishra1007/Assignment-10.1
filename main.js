class Rectangle{                            // Class declaration
    constructor(length, breadth){           // Constructor declaration
        this.length = length;
        this.breadth = breadth;
    }

    calculateArea () {                          // Class function
        return this.length*this.breadth;        //return statement 
    }
}

let rect = new Rectangle(5, 10);                // Object intializing

console.log(rect.calculateArea());              // Output using function caliing