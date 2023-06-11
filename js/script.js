// pet object

// type = "dog"
// colour = "white"
// number of legs = 4
// domesticated = yes

var pet = {
    type: "dog",
    colour: "white",
    numberOfLegs: 4,
    domesticated: true
};

var type = pet.type;

console.log(type);


var mixedValues = ["dog", "white", 4, true];

console.log(pet);


// declare the function
function addNumbers(num1, num2, num3, num4,) {
    //console.log(num1 + num2 + num3 + num4);
    return num1 + num2 + num3 + num4;
}

// call the function
var result = addNumbers("dog" + "white" +4 + true);

console.log(result);
