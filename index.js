'use strict';

// Monday ================================================================

let text = "Hello World!";
console.log(text[2]);
// let number = 8;
// console.log(number);
// number = 8.9999999;
// console.log(number);

console.log((5.1234).toPrecision(3));

function number(x, y) {
    const result = Number.parseInt(x, y);
    if(Number.isNaN(result)) {
        return 0;
    }
    return result * 10
}

console.log(number(5, 10));

const numOne = 1000;
const numTwo = Number(1000);
const numThree = new Number(1000);

console.log(numOne);
console.log(numTwo);
console.log(numThree);
console.log(numOne === numTwo);
console.log(numOne === numThree);
console.log(numOne == numThree);
console.log(numTwo === numThree);
console.log(numTwo == numThree);
console.log(typeof numThree);

console.log(`numOne ${numOne}, numTwo ${numTwo} and numThree ${numThree}`);

/*
Number.isNaN()
Number.isFinite()
Number.isInteger()
*/

console.log(Number.isNaN(numOne));  // false
console.log(Number.isNaN('numOne'));// false
console.log(Number.isNaN(true));    // false
console.log(Number.isNaN(0.8));     // false
console.log(Number.isNaN(NaN));     // true
console.log(Number.isNaN(0 / 0));   // true


console.log(Number.isFinite(numOne));   // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(!Infinity));// false
console.log(Number.isFinite(-Infinity));// false
console.log(Number.isFinite('hello'));  // false


console.log(Number.isInteger(numOne));  // true
console.log(Number.isInteger('text'));  // false
console.log(Number.isInteger(Infinity));// false
console.log(Number.isInteger(0 / 0));   // false
console.log(Number.isNaN(true));        // false
console.log(Number.isNaN(0.8));         // false
console.log(Number.isNaN(NaN));         // true


// toFixed()
// toLocaleString()

console.log(234.56.toFixed(1));
console.log(234.56.toLocaleString());

function money(x, y)
{
    x = Number(x);
    y = y || '$';

    if(Number.isNaN(x) || typeof y != 'string') {
        return null
    }
    return y + x.toFixed(2);
}

console.log(money(233.642, '$'));
console.log(money(15.646));
console.log(money(15));


console.log('Hello Class');
const arr = ['a', 'b', 'c'];
console.log(arr);

const txt = ('Hello World!'[6])
console.log(txt)
// console.log(txt[5] = 'd');
// console.log(txt);

// Anonymous functions

/*
function(param, ...)
body
*/

// someFunction(function(a, b) {
// body
// })

const anotherWay = function(x){console.log(x)};
anotherWay('Hello class');

// function literal
(function(x, y) {
    console.log(x+y);
});

//  callbacks

/*
function anyFunction(data, callback) {
    async-process(data).then(       // do async request
        function(result) {          // then on return
            callback(result);        // execute callback
        };
    );
    // rest of code
};
*/

/*

functionOne(data, function(resultOne)) {
    function(resultOne, function(resultTwo) {
        functionThree(resultTwo, function(resultThree) {
            // our code ........
        })
    })
}

*/


// 
console.log('Hello World'.length);

const text1 = '    first name   ';
const text2 = 'last name';
const fullName = text1.concat(' ' + text2);
console.log(fullName);

console.log(text1.toUpperCase());

console.log(text1.trim());

const newText = new String('SDV');
console.log(newText);

const newTextToString = (newText.toString());
console.log(newTextToString);



// Tuesday ================================================================

/*
Callback is also known as high-order-function

passing a function to another function "otherFunction"

callback pattern

let students = ['Dale', 'Frank', 'Kyran', 'Aaron'];

students.forEach(function (eachStudent, index) {
    console.log(index + 1 + "." + eachStudent) //

    // When we pass a function as an argument to another function
    // you are only passing a function definition ()

    otherFunction has the callback function in its param as function definition
    it can execute the callback ANYTIME
=========================================================================================

const dat = [];
    function myData(dataFromUser) {
        if(typeof dataFromUser === 'string') {
            console.log(dataFromUser);
        } else if (typeof dataFromUser === 'object') {
            for(let item in dataFromUser) {
                console.log(item + ':' + dataFromUser[item]);
            }
        }
    }
})

const result = function input(dataInput, callback) {
    dat.push(dataInput);
    callback(dataInput);
}

input({}, myData)
*/

/*
let pathToNextLocation
fs.redFile('./file/location1.md', 'utf-8', function(err, val) {
    if(err) throw new Error
    pathToNextLocation = val;
    fs.readFile(pathToNextLocation, 'utf-8', function(err, val) {
        // do stuff!
    })
})

1- Name your functions and declare them and pass the name only of then function
as callback

2- Seperate your code into modules. Ansd this is good coding in Express.js
*/

let myObject = {
    firstName: 'Frank',
    lastName: 'Schulz'
};

console.log(myObject);

console.log(myObject.firstName);
myObject.name = 'Muaz';

console.log(myObject);

/* -- Naming Conventions --
1- Only use letters, digits, underscores
2- Must start with a letter or underscore
3- names are case sensitive
4- Must not match a reserved keyword in JS
*/

let students = {
    name: 'Luke',
    class: 'SDV503',
    school: 'NMIT'
}

console.log(Object.keys(students));

// Object.freeze(students);
// students.name = 'Phill';
console.log(students);

console.log(Object.isFrozen(students));

let anotherStudent = {
    studentName: 'Luke',
    otherClass: 'CSA',
    school: 'MIT'
}

const newObj = Object.assign(students, anotherStudent);
console.log(newObj);

// Object.create()
// Object.is()
// Object.isExtensible()

// Object.is()
const same = Object.is(students, anotherStudent)
console.log(same);
