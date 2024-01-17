// 자바스크립트에서 랜덤으로 값을 가져오기
// console.log(Math.random()); // 무작위 1 이하의 실수값
// console.log(Math.random() * 10); // 0 ~ 9
// console.log(Math.random() * 100); // 0 ~ 99
// // 1 ~ 10
// console.log(Math.random() * 10 + 1); // 0 ~ 9 + 1 => 1 ~ 10

/*
    1. 1 ~ 100 사이의 숫자를 랜덤으로 저장하고 그 수가 짝수인지 홀수 인지 출력하는 checkNum 함수를 만든 후 호출
    2. 배열에 랜덤으로 (-100 ~ 100) 사이의 4개를 저장 후 전부 홀수 인지 검사하는 isAllOddNum 함수를 만드시오
    (전부 홀수입니다, 아닙니다)
 */

// 문제1
function checkNum() {
    console.log("문제 1번");
    let SaveNum = parseInt(Math.random() * 100) + 1;
    if(isNaN(SaveNum)){
        console.log("숫자값만 넣어주세요");
    }
    if(SaveNum % 2 === 0){
        console.log(`${SaveNum}은 짝수`);
    }
    else{
        console.log(`${SaveNum}은 홀수`);
    }
}
checkNum();

// 문제2
function isAllOddNum(){
    console.log("문제 2번");
    let arr = [];
    for (let i = 0; i < 4; i++) {
        arr[i] = parseInt(Math.random() * (100 - (-100) + 1)) - 100;
    }
    console.log(arr);
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0){
            cnt += 1;
        }
    }
    if(cnt === 4){
        console.log("전부 홀수 입니다");
    }
    else {
        console.log("전부 홀수가 아닙니다");
    }
}
isAllOddNum();