
// Related to Objects : We have to make sure that the Object usage is Abstract 

function Makeone() {
    let Length = 5;
    this.Height = 5;

    this.Draw = function() {
        console.log('\nLength = ', Length);
        console.log('\nHeight = ', this.Height);
    }
}

const Obj = new Makeone();  // Here we can access 'Height' property but not Length

console.log(Obj.Length);    // Output is Undefined ( Scope of 'Length' resides in Makeone() function alone )
console.log(Obj.Height + "\n");

Obj.Draw();

/* This is called Abstraction */