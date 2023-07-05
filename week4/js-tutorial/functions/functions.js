/**
 * 함수(functions)
 * - 작업의 묶음
 * - 코드를 반복해서 작성하는 비효율 줄임
 */

function multiply(a, b) {
  return a * b;
}

console.log(multiply(10, 5));


var multiply = function(a, b) {
  return a * b;
}

/**
 * 변수 키워드 - var, let, const
 */

// 블록문 안에서도 전역 변수를 건드릴 수 있음 
var a = 10;

while(true) {
  var a = 1000;
  break;
}

console.log(a);

// 호이스팅
console.log(word);

word = 'happy';

var word;



// let 호이스팅 안됨, 블록문 안에 전역 변수 못 건드림

console.log(word);

word = 'happy';

let word;

// const 재할당 불가 
const b = 2;

// const로 선언된 변수에 할당된 객체
const student = {
  grade: 1,
  class: 3
};

student.grade = 2; //가능

student = { //불가능
  num: 20123,
  grade: 2
};

// 화살표 함수

let plus = (a, b) => a + b;

console.log(plus(2, 3));

let print = word => {
  console.log(word);
};

print('Hello!');