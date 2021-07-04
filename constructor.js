
// A constuctor is again a function which acts as a class

// Constructor Function
function Rectangle(Length, Breadth) {
    console.log('this', this);
    this.Length = Length;
    this.Breadth = Breadth;
    this.Draw = function() {
        console.log('Rectangle is Rendered');
    }
}

// Here 'this' keyword points to the members of that function , but we need to use 'new' keyword to initialise them

const newRectangle = new Rectangle(5, 5);   // Here 'new' creates an empty object. Without this 'new' the 'window' object is considered

newRectangle.Draw();    // Won't work without the 'new' keyword during initialisation . Not the same for Factory Function.