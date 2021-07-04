
/* Every Function is a class */

/*  Constructor Function
function Makeone() {
    let Length = 5;
    this.Height = 5;

    this.Draw = function() {
        console.log('\nLength = ', Length);
        console.log('\nHeight = ', this.Height);
    }
}*/

// Class Declaration of a Function
class Makeone {
    constructor() {
        let Length = 5;
        this.Height = 5;

        this.Draw = function () {
            console.log('\nLength = ', Length);
            console.log('\nHeight = ', this.Height);
        };
    }
}

const Made = new Makeone();

Made.Draw();   // Same as Constructor Function