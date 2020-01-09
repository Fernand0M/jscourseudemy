///////////////////////////////////////
// Lecture: Hoisting

calculateAge(30);

function calculateAge(year){
    console.log (2020 - year);
}

var retirenment = function(year) {
    console.log(65 - (2020 - year));
}

retirenment(1990);


var age = 23;
console.log(age);












///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









