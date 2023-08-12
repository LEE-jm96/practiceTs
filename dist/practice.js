"use strict";
var message = 'hello typeScript';
var count = 0;
count += 1; // count = "1" // type 오류
var numbers = [1, 2, 3]; // 숫자 배열
var messages = ['hello', 'world']; // 문자열 배열
var color = 'red';
color = 'yellow'; // color = 'green'; //red, orange, yellow에 포함되어 있지 않으면 type 오류
var sumArray = function (numbers) {
    return numbers.reduce(function (acc, cur) { return acc + cur; }, 0);
};
var arrSum = sumArray([1, 2, 3, 4, 5]);
var returnNothing = function () {
    // 아무것도 반환하지 않는다면 타입 void
    console.log('No Return');
};
console.log(arrSum);
returnNothing();
