// 접근제어자 - 캡슐화 => private getter setter

// class Student(){private int id; private String name;}

// 프라이빗은 직접접근이 불가능하다
class student{
    static cnt = 0;
    #id;
    #name;
    constructor(id, name) {
        this.#id = id;
        this.#name = name;
        student.cnt += 1;
    }
    static fromObject(object){
        if(!!object?.id && !!object?.name){
            return new student(object.id, object.name);
        }
    }
    static fromList(list){
        if(!Array.isArray(list)) return null;
        return new student(list[0], list[1]);
    }
    // 프라이빗 메서드는 student 안에서만 사용가능하다
    #getName(){
        return this.#name;
    }
    get name(){
        return this.#name;
    }
    set name(name){
        this.#name = name;
    }
}
const stu1 = new student(2019122104, 'Park');
const stu2 = new student(2019206028, 'Kim');
const stu3 = new student(2019153237, 'Lee');

console.log(stu1.name);
console.log(stu2.name);
// console.log(stu1.getName());
// 프라이빗 변수를 set 없이 직접 변경을 시키면 적용 안됨[주의!] 에러는 안띄운다!
stu2.name = '박연미' // set name(name);
console.log(stu2.name);

const stu4 = student.fromObject({name: '홍길동', id: 1234123});
console.log(stu4 instanceof student);
console.log(stu4);

const stu5 = student.fromList([12341234, '둘리']);
console.log(stu5);
