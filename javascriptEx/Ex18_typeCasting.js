3;
// 값으로 평가하는 것, 값으로 평가되지않는 것 : 연산처리
let score = 100;
// 45 + 40;
let grade = 45 + 40;

//암묵적 타입변환
'1' + 2 // '12'
1 + '2' // '12'
1 + true // 2 (true는 1로 치환)
1 + false // 1 (false는 0으로 치환)
1 + null // 1 (null 은 0으로 치환)
1 + undefined // NaN (undefined는 아직 정의되지 않아서 NaN으로 나옴)

(1).toString(); // '1'
String(100); // '100'
String(NaN); // 'NaN'
true.toString() // 'true'
Number(true) // 1
Number('10.34') // 10.34
parseInt('100') // 100
+'100' // 100
'-1000'*1 // -1000
Boolean(1) // true
Boolean(NaN) // false
Boolean(Infinity) // true
Boolean({}) // true
10 == '10' // true
10 === '10' // false
NaN == NaN // false
NaN === NaN // false
isNaN(NaN) // true
false == false // true