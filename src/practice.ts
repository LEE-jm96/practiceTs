const message: string = 'hello typeScript';
console.log(message);

let count = 0;
count += 1;
// count = "1" // type 오류

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['hello', 'world']; // 문자열 배열

let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'yellow';
// color = 'green'; //red, orange, yellow에 포함되어 있지 않으면 type 오류
