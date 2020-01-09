
/* *****  
variables and data types
*/
/*
var firstName = 'Jhon';
console.lgog(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

// incorrect variables
job = 'Teacher';
console.log(job);
*/

/*
Variable mutation and type coertion

var firstName = 'John';
var age = 28;

// Type coertion
console.log(firstName + ' ' + age )

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log( firstName + ' is a ' + age +' year old '
+ job + '. Is he married?  ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert( firstName + ' is a ' + age +' year old '
+ job + '. Is he married?  ' + isMarried);

var lastName = prompt ('What is hi last name??');
console.log(firstName + ' ' + lastName);

*/

/**** 
 Basic operators

var now , yearJohn, yearMark;
now = 2019;
ageJohn = 28;
ageMark = 33;


yearJohn = now - 28;
yearMark = now - 33;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);


// Logical Operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator

console.log(typeof yearMark);
console.log(typeof 'Mark is older than');
var x;
console.log(typeof x);



var johnmass, johnheigh, markmass , markheigh, bmijonh, bmimark;
johnmass = 20 ;
markmass = 30 ;
johnheigh = 50;
markheigh = 60 ;

bmijonh = johnmass / (johnheigh * johnheigh);
bmimark = markmass / (markheigh * markheigh);

console.log(bmijonh, bmimark);
var compare = (bmimark > bmijonh);
console.log('Is Marks bmi higher than John ' + compare);



// If else statements

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(firstName + ' is married!');
}else {
    console.log(firstName + ' is not married')
}

var isMarried = true;
if (isMarried){
    console.log(firstName + ' is married!');
}else {
    console.log(firstName + ' is not married')
}


var johnmass, johnheigh, markmass , markheigh, bmijonh, bmimark;
johnmass = 20 ;
markmass = 30 ;
johnheigh = 50;
markheigh = 60 ;

bmijonh = johnmass / (johnheigh * johnheigh);
bmimark = markmass / (markheigh * markheigh);

if(bmimark > bmijonh){
    console.log('bmi mark is higger')
} else {
    console.log('bmi mark is lower')
}



// Boolean Logic
// & AND ! NOT // OR
var firstName = 'John'
var age = 20;

if (age < 13) {
console.log(firstName + ' is a boy.')
} else if(age >=13 & age< 20 ) {// Between 13 and 20
 console.log (firstName + ' is a teenager')
} else if(age >=20 & age< 30 ) {// Between 13 and 20
    console.log (firstName + ' is a young man')
} else {
    console.log(firstName + ' is a man.')
} 



// Ternary Operator and Swithc Statements

var firstName = 'John'
var age = 16 ;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer')
: console.log(firstName + ' drink juice');  

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Switch statement
var job = 'instructor';
 switch (job){
     case 'teacher':
     case 'instructor':
         console.log(firstName + ' teaches kids how to code');
         break;
     case 'driver':
         console.log(firstName + ' drives a uber car');
         break;
     case 'designer':
         console.log(firstName + ' is gay');
         break;
     default:
        console.log(firstName + ' does nothing');
 }


 // Truthy and Falsy Values
 // Falsy values: undefined, null ,0 ,'' ,NaN
 // truthy values : NOT falsy values

 var height;

 height = 23;

 if (height  || height === 0){
     console.log('Variable is defined');
 } else {
     console.log('Variable has not been defined');
 }

 // Equality operators
 if (height == '23'){
     console.log('The == operator does type coercion!')
 }

 
 
  // Coding challenge
  var jhonscore = 89 + 120 + 103;
  var mikescore = 116 + 94 + 123;

  var jhonaverage = jhonscore / 3;
  var mikeaverage = mikescore / 3;

  if (jhonaverage > mikeaverage){
      console.log("Jhons win")
  } else if (jhonaverage === mikeaverage) {
    console.log('Its a draw');  
  } else{
    console.log('Mike wins');
  }

  
// Functions

function calculateAge(birthYear){
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1950);

console.log(ageJohn,ageMike,ageJane);

function yearUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirment = 66 - age;

    if (retirment > 0){
        console.log(firstName + ' retire in ' + retirment + ' years')
    } else {
        console.log(' You already retired')
    }
    
}

yearUntilRetirement(1990, 'John');
yearUntilRetirement(1948, 'Mike');
yearUntilRetirement(1969, 'Jane');



 // Function Statement and Expressions

 //Function Declaration doesn't return anything


 // Function expression return something
var whatDoYouDo = function(job , firstName) {
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
             return firstName + ' drives an uber';
        case 'designer':
            return firstName + ' is gay';
        default:
            return 'does something else'
    }
}

console.log(whatDoYouDo('teacher', 'John'))
console.log(whatDoYouDo('designer', 'John'))
console.log(whatDoYouDo('retired', 'John'))



 // Arrays

 var names = ['John', 'Mark', 'Jane' ];
 var years = [ 1990, 1969, 1948];
 
 console.log [names[2]];
 console.log [names.length];
 

 // mutate array data
 names[1]= 'Ben';
 names[names.length] = 'Mary';
 console.log(names);


// Different data types
var john = ['John','Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

// if designer is -1 (?) then (:) else
var isDesinger = john.indexOf('designer') === -1 ? 'John is NOT a desinger'
: 'John is a designer';
console.log(isDesinger);

 

function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);



// Objects and Properties

// Object Literal
var john = {
    firsName: 'John',
    lastName: 'Smith',
    birthyear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false
}
console.log(john);
console.log(john.firsName);
console.log(john['lastName']);
var x = 'birthyear';
console.log(john[x]);

john.job = 'desinger';
john.isMarried = true;
console.log(john);

// New Object sintax
var jane = new Object;
jane.name = 'Jane';
jane.birthyear = 1989;
jane.job = 'dancer';

console.log(jane);

// Objects and Methods

var john = {
    firsName: 'John',
    lastName: 'Smith',
    birthyear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge : function(birthYear){
        this.age = 2020 - this.birthyear;
    }
}

john.calcAge();
console.log(john);  



var john = {
    firsName : 'John Smith',
    mass : 30,
    height:60,
    calcBmi: function(mass,height){
        this.bmi = this.mass / (this.height * this.height)
        }
};

var mark = {
    firsName : 'Mark Smith',
    mass: 30,
    height: 60,
    calcBmi: function(mass,height){
    this.bmi = this.mass / (this.height * this.height)
    }
};

john.calcBmi();
mark.calcBmi();

if (john.bmi > mark.bmi) {
    console.log(john.firsName + ' has a higher BMI of ' + john.bmi);
} else if (john.bmi > mark.bmi) {
    console.log(mark.firsName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}



// Loops and iteration

// for loop
for (var i = 0; i < 15; i++){
    console.log(i);
}

for (var x = 0; x < 15; x+= 2){
    console.log(x);
}


var john = ['John','Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++){
    console.log(john[i]);
}


// While loop
var i = 0
while( i < john.length){
    console.log(john[i]);
    i++;
}

// Continue and break statements

var john = ['John','Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++){
    if (typeof john[i]!== 'string') continue;
        console.log(john[i]);

}
for (var i = 0; i < john.length; i++){
    if (typeof john[i]!== 'string') break;
        console.log(john[i]);

}

var john = ['John','Smith', 1990, 'designer', false];

for (var i = john.length - 1; i >= 0 ; i--){
    if (typeof john[i]!== 'string') continue;
        console.log(john[i]);

}

*/


var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}