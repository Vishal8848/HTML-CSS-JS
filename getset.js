
// Getters & Setters in JS

function Display() {
    this.firstName = 'Vishal';
    let lastName = 'Pranav';

    this.getName = function() {
        console.log(this.firstName + ' ' + lastName);
    }

    // If you want to 'Get' or 'Set' a Value from/to a Property
    /* Object.defineProperty(currentInstance / Object, 'Name of Property', *Contents - Object, Array, Anything*);
         We have 
          get : Value // inbuilt 'get' key to get a property / value of property
          set : Value // inbuilt 'set' key to set a property / value to a property
    */
    Object.defineProperty(this, 'getLastName', {
        get : function() {
            return lastName;        // Now we can access lastname using 'getLastName' property
        },
        set : function(Name) {
            if(Name !== "")     // If name is not empty
                lastName = Name;    // We can assign a value to the property
        }
    });

    // We can define multiple properties using Obj.defineProperties(...);
}

const Obj = new Display();

// Here getName is a function and not a property
Obj.getName();

// Here getLastName is a property and not a function
console.log(Obj.getLastName);   // the 'get' method is triggered
Obj.getLastName = 'Pranav RB'   // the 'set' method is triggered
console.log(Obj.getLastName);

console.log(Obj);