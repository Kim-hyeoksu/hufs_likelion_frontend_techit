/**
 * 배열(Array)
 * - 복수의 데이터를 순서대로 담고 있는 자료구조
 * - 배열의 순서는 0부터 시작
 * - 배열은 객체!
 * - 키 => 인덱스, 값 => 요소
 */

var mbti = ['INFP', 'ENFJ', 'INTJ'];
console.log(mbti[0]);
console.log(mbti.length);

mbti[3] = 'ESFP';
console.log(mbti[3]);
console.log(mbti.length);

mbth[2] = 'ISTJ';
console.log(mbth[2]);

var mbti = ['INFP', 'ENFJ', 'INTJ'];
// push() 뒤에 추가 
mbti.push('ESFP', 'ISTJ');

// 스프레드 문법
var newMbti = [...mbti, 'ESFP', 'ISTJ'];
console.log(mbti);
console.log(newMbti);

// pop()
console.log(mbti.pop());
console.log(mbti);

//unshift() 앞에 추가 
console.log(mbti.unshift('ESFP', 'ISTJ'));
console.log(mbti);

// 스프레드 문법
var newMbti = ['ESFP', 'ISTJ', ...mbti];
console.log(mbti);
console.log(newMbti);

// shift() 앞에 요소 제거 
console.log(mbth.shift());

// slice()
var mbti = ['INFP', 'ENFJ', 'INTJ'];
console.log(mbth.slice(0, 2));    //'INFP', 'ENFJ'
console.log(mbth.slice());    // 전체
console.log(mbti.slice(-1));  //끝에서 부터 

// join() 문자열로 변환 
console.log(mbti.join()); //INFP,ENFJ,INTJ
console.log(mbti.join('-'));//INFP-ENFJ-INTJ

// sort()
console.log(mbti.sort());

// reverse()
console.log(mbti.sort().reverse());
