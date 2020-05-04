'use strict';

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
