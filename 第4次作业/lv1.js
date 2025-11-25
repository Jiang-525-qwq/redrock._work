let student={
    name:'bo',
    age:19,
    gender:'female'
};

function copy(insertStu){
    let newStu={};
    for(let i in insertStu){
        newStu[i]=insertStu[i];
    }
    return newStu;
}

let stu1=copy(student);
let stu2=student;
let stu3=Object.assign({},student);

let arr=[];

arr.push(stu1,stu2,stu3);

console.log(arr);