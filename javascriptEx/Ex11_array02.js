// 코드를 DRY 하게 짜라
// D : don`t R : repeat Y : yourself ==> 반복되는 코드는 함수로 만들어서 재사용해라

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// for (let i = 6; i <= 15; i++) {
//     console.log(i);
// }
// for (let i = 15; i >= 4; i--) {
//     console.log(i);
// }
function getValue(start, end) {
    if(isNaN(start) || isNaN(end)) return '숫자값을 넣어주세요';
    if(end < start){
        let temp = start;
        start = end;
        end = temp;
    }
    let result = '';
    for (let i = start; i <= end; i++) {
        result += i + ' ';
    }
    return result;
}

console.log(getValue(1, 5));
console.log(getValue(6, 15));
console.log(getValue(15, 4));
console.log(getValue(2, 'test'));