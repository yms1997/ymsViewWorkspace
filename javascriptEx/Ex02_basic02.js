// 산술연산자
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3); // 자바는 정수 / 정수 => 정수가 나오는데 : JS 정수 / 정수 => 실수
console.log(10 % 3);
console.log(Math.pow(10, 3)); // 거듭제곱 10 * 10 * 10 (클래스 사용)
console.log(10 ** 3); // 거듭제곱

console.log(2 - 'test'); // NaN
console.log(10 / 0); // Infinity : 자바에서는 에러 뜬다
console.log(0 / 10); // 0

// String의 종류 ""(쌍따옴표 : 더블쿼테이션), ''(홑따옴표 : 싱글쿼테이션), ``(백틱 : 키보드 1옆에 ~표 있는거 그냥 누르면 됨)
let intro = '박연미 \n 입니다 \\';
console.log(intro);
intro = "'박연미' 입니다";
console.log(intro);
intro = '"박연미" 입니다';
console.log(intro);

// `` String 템플릿을 만들수 있다
const name = "박연미";
const job = "강사";
intro = `저는 ${name} 입니다 직업은 ${job}입니다`;
console.log(intro);

// boolean 타입은 동일하다
let isDead = true;
console.log(isDead);
console.log(!isDead);
console.log(!!isDead);

// falsy value 
console.log(!!0); // 숫자 0 
console.log(!!""); // 문자 빈문자열 
console.log(!!null); // 비어있는 주소값
console.log(!!undefined);
console.log(!!NaN);

// let cat = undefined; 이거는 자주 쓰지 말것
// cat; 위에 있는 것을 축약하면 동일한 것

let cat = null; // 비어있다는 표시는 null로만 표시하기!!

// truly value 
console.log(!!10); // 0 제외한 모든 숫자 
console.log(!!-10.123); // 음수도 동일
console.log(!!"test"); // 비어있지 않는 모든 문자 
console.log(!![]); // 배열(new Array();)(new ArrayList();)
console.log(!!{}); // 오브젝트 (new Object());
console.log(!!Infinity);

// symbol 타입 : 유일무이한 값 (잘 쓰이진 않음, 알아만 두기)
const num1 = '1';
const num2 = '2';
console.log(num1 == num2);
const symbol1 = Symbol('1'); // 서로의 주소값이 다르다
const symbol2 = Symbol('1'); // 서로의 주소값이 다르다
console.log(symbol1);
console.log(symbol2);
console.log(symbol1 == symbol2); // false

// 오브젝트 타입 -> java Map : key- value 이뤄져 있다
// const dog ={ // key값에서는 원시값만 들어갈 수 있는데 왠만하면 String만 사용하자
//   name : '바둑이',
//   age : 4,
//   isOwner : true
// }
// const dog ={ 
//   'name' : '바둑이',
//   10 : 4,
//   true : true
// }
// const dog ={ 
//   10 : '십',
//   undefined : '정의되지않은값',
//   null : '비어있는값'
//   // [] : 참조값은 key로 못쓴다 
// }

dog = { name: '바둑이', age: 4, isOwner: true } // 그냥쓰면 String으로 자동으로 key값 인식한다
console.log(dog); // { name: '바둑이', age: 4, isOwner: true }

// 오브젝트 값(속성값) 접근 방법 2가지
console.log(dog.name);
console.log(dog["name"]); // dog[name] 하면 에러 뜬다 꼭 스트링으로 key값 넣어주기!

function getKeyValue(object, key){
  console.log(object[key]);
}
function getKeyValue2(object, key){
  console.log(object.key); // 순수하게 key 하는 속성값을 객체 안에서 찾는것 : 동적으로 못 바꾼다

  if(key == 'age'){
    console.log(object.age);
  }
}
getKeyValue(dog, 'age');
getKeyValue(dog, 'isOwner');
getKeyValue(dog, 'name');

getKeyValue2(dog, 'age');

// 객체 값 추가
dog['owerName'] = '제임스';
console.log(dog);

dog.owerAge = 10;
console.log(dog);

delete dog.owerAge;
console.log(dog);
delete dog['owerName'];
console.log(dog);