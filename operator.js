/*
// 0. 대입연산자 : =

let k = 10; // k라는 변수를 메모리에 선언(=생성)하고 숫자타입 데이터 10을 저장한다.
            // 이때 10이라는 데이터(우항)가 k라는 변수(좌항)으로 대입(=할당, 저장)된다.

console.log("k의 값 : "+k);

// 1. 산술연산자 : +, -, *, /, %
// 1-1. 문자연결 연산자 : + (덧셈이 아닌 문자열끼리 이어서 쓰는 연산자)

let n1 = 10;

let n2 = 50;

console.log("덧셈 결과 : "+ (n1 + n2));
console.log("뺄셈 결과 : "+ (n1 - n2));
console.log("곱셈 결과 : "+ (n1 * n2));
console.log("나눗셈 결과 : "+ (n1 / n2));
console.log("나머지 결과 : "+ (n1 % n2));

// 2. 복합 대입 연산자 : +=, -=, *=, /*, %=
// A+=B   <--> A+B 결과를 다시 A에 대입..

n1 += 100;

console.log("n1 += 100 의 결과 :"+n1);

n1 -= 100

console.log(`n1 -= 100의 결과 : ${n1}`);

n1 *= 5

console.log(`n1 *= 5의 결과 : ${n1}`);

n1 /= 50

console.log(`n1 /= 5의 결과 : ${n1}`);

n1 %= 20

console.log(`n1 %= 20의 결과 : ${n1}`);

// 3. 증감 연산자 : ++, --  [+1, -1] / 전위 증감연산자 or 후위 증감연산자
// 대입연사자와 함께 사용시 , 위치에 따른 결과가 달라짐  :   A = B++ vs   A = ++B 와 다른 결과
let a = 10
let b = 20
console.log(`a : ${a}, b: ${b}`);
console.log(a++);
console.log('a++ : '+a);
console.log(++a);
console.log('++a : '+a);
console.log(a = b++);
console.log(`a : ${a}, b: ${b}`);
console.log(a = ++b);
console.log(`a : ${a}, b: ${b}`);


// 4. 비교 연산자 : ==, ===, !=, >, >=, <, <= [크다, 같다, 작다]
// 연산의 결과가 논리값을(true, false) 반환

console.log(1 == '1');  // 값만 비교 (같은지)
console.log(1 === '1'); // 값, 자료형 (같은지) 비교
console.log(1 > 10);
console.log(1 >= 1);
console.log(3 < 10);
console.log(3 <= 10);
console.log(10 !== 20);


// 5. 논리 연산자 : AND(&&), OR(||) , NOT(!)
// 연산의 결과가 논리값을(true, false) 반환
let bool1 = true;
let bool2 = false;
console.log(bool1 && bool2); // false [둘다 true여야 최종 true : AND 연산]
console.log(bool1 || bool2); // true [둘중 하나만 true면 최종 true : OR 연산]
console.log(!bool1); // true --> false [true면 false로, false면 true 최종 판정 : NOT 연산]

// 6. 삼항 조건 연산자 : 조건 ? true일때 실행 표현식 : false일때 실행 표현식;
// 간단한 조건식 : 프로그램 실행 순서를 분기

let n1 = 10;
let n2 = 50;
n1 > n2 ? console.log('n1이 n2보다 크다'): console.log('n1은 n2보다 크지 않다');
*/

// 7.우선순위 연산자 : ()
let j = 1 + '100';
console.log(j, typeof j, Number(j), typeof Number(j)); // 형변환

let h = 1 + 100 * 3 / 3;
console.log('h의 결과값 : '+h);