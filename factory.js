
// Basic Object - Without Constructors or Factories

const Rectangle = {
    Length : 5,
    Breadth: 5,
    Location : {
        X : 10,
        Y : 10
    },
    Draw : function() {
        console.log("Drawing a Rectangle");
        document.writeln("Rectangle is Rendered");
    }
}

// Rectangle.Draw();

// Factory Function - To incorporate Object Features
function createRectangle(Length, Breadth){
    return {
        Length,     // Need not assign Value to Key ( Key : Value )
        Breadth,    // if we directly return Value as Key from Parameters
        Location : {
            X : 10,
            Y : 10
        },
        Draw : function() {
            console.log("Rectangle is Drawn");
            document.writeln("Rendering a Rectangle");
        }   
    }
}

// Creating an Object 
const newRectangle = createRectangle(5, 5);
newRectangle.Draw();    // Draw() Method doesn't belong to 'newRectangle' but we can use it

// Above stmt is like className Object = new className(); in C++ (Creating an object of a Class)