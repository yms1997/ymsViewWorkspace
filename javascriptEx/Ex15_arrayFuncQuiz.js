let cat ={
    kind: '고양이',
    age: 5
}
let dog ={
    kind: '개',
    age: 4
}
let rabbit ={
    kind: '토끼',
    age: 0.5
}
let hamster ={
    kind: '햄스터',
    age: 1
}
let pets = [cat, dog, rabbit, hamster, cat];
// pets.forEach(obj => console.log(obj));
// 1. 동물의 kind가 개 인것을 찾아라
let result  = pets.find(value => value.kind === '개');
console.log(result);
// 2. 동물의 kind가 고양이가 아닌것만 빼서 배열로 만들어라
result = pets.filter(value => value.kind !== '고양이');
console.log(result);
// 3. 총 동물의 평균 나이를 구해라
result = pets.reduce((p, n) => (p + n.age), 0);
console.log(result / pets.length);
// 4. 동물 나이순으로 내림차순 정렬
result = [...pets]; // 깊은 복사 => 구조분해를 해서 가져온다
result.sort((obj1, obj2) => obj1.age > obj2.age ? 1 : -1);
console.log(result);