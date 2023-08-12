const message: string = 'hello typeScript';

let count = 0;
count += 1; // count = "1" // type 오류

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['hello', 'world']; // 문자열 배열

let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'yellow'; // color = 'green'; //red, orange, yellow에 포함되어 있지 않으면 type 오류

const sumArray = (numbers: number[]) => {
  return numbers.reduce((acc, cur) => acc + cur, 0);
};

const arrSum = sumArray([1, 2, 3, 4, 5]);

const returnNothing = (): void => {
  // 아무것도 반환하지 않는다면 타입 void
  console.log('No Return');
};

console.log(arrSum);
returnNothing();
