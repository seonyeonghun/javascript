// 배열 연산자 : Array

// 변수 vs 배열 : 값을 1개만 저장 vs 여러개의 값을 저장

// 변수
let k = 10;   // 변수
const j = 100; // 상수

k = 50; // 재 할당
console.log(k);
/*
j = 50; // 상수 (=변하지 않는 수, 재할당시 오류 발생)
console.log(j);

// 배열 선언 : 리터럴, 생성자
// 배열[인덱스] : 0 부터 배열길이값n-1까지 배열 '인덱스(=주소, 번지)'를 갖는다
// 배열에 포함되는 데이터 타입 : all 모든 타입
let arr1 = [1, 10, '100', '광주', null];
console.log(arr1[0]);
console.log(arr1[1]);
arr1[2] = '백'; // 값을 재할당(=값 대입/치환)
console.log(arr1);


*/
const arr2 = new Array('1',null,100,50,'A');
arr2[1] = true;
//console.log(arr2);


// 배열의 메소드와 프로퍼티
// .pop(), .push('추가할원소값') : 배열의 마지막 원소를 제거, 마지막 위치에 원소를 추가
// .shift(), unshift('추가할원소값') : 배열의 처음 원소를 제거, 처음 위치에 원소를 추가
// .length : 배열의 길이(원소의 갯수) 반환
// .sort() , .reverse() : 정렬, 역정렬(in Place)
// 배열명.(메소드나 프로퍼티명이 자동으로 추천됨)
/*
const arr3 = ['가','나','다']
console.log("배열 arr2의 길이 : "+arr2.length); //배열의 길이값(=원소 갯수) 출력하는 프로퍼티(=속성)

console.log(arr2.concat(arr3)); // 배열끼리 연결, 새로운 배열을 반환 하는 메소드

console.log(arr2.join(' - '));   // 배열 원소를 '문자열'로 연결한 결과를 반환 하는 메소드

console.log(arr2.pop());  // 배열의 마지막 원소를 제거된 원소를 반환

console.log(arr2); // 마지막 원소 'A'가 제거된 배열을 반환할지 확인!!

console.log(arr2.push('C')); // 배열의 마지막에 원소를 추가

console.log(arr2.shift()); // 배열의 첫번째 원소를 제거하고 그 원소를 반환

console.log('shift된 arr2 : '+arr2);

console.log(arr2.unshift('홍')); // 배열의 첫번째 원소를 추가

console.log('unshift된 arr2 : '+arr2);

// 문자 x, 문자열 O
let myStr = '가나다라마바사아자차카타파하';
console.log(myStr[0]);
console.log(myStr.charAt(0)); // 0번 인덱스에 있는 문자열의 데이터를 출력
*/

