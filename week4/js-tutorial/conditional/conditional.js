/**
 * 제어문(control flow)
 * 1. 조건문
 * 2. 반복문
 */

var a = 5;

// 1. if...else
if (a > 2) {
  console.log('a > 2');
} else {
  console.log('a <= 2');
}

// 2. if...else if...else
// 조건을 만족하는 경우가 여러 가지이면 첫번째 조건문만 실행되고 종료됨
if (a > 2) {
  console.log('a > 2');
} else if ( a == 2 ) {
  console.log('a = 2');
} else if (a == 0) {
  console.log('a = 0');
} else {
  console.log('a < 2');
}

// 3. switch

var mbti = 'INFP';
var val;
switch (mbti) {
  case 'INFP':
    val = 'INFP';
  case 'ENFP':
    val = 'ENFP';
  case 'ISTJ':
    val = 'ISTJ';
  default: val = '유효한 값이 아닙니다다'
}