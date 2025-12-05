// @ts-nocheck
const person = {
  name: '小明',
  age: 18,
  address: {
    city: 'ChongQing',
    area: 'RedRock'
  },
  title: ['student',{year:2025, title:'GoodStudent'}]
}
//分开：
/*
const {name}=person;
const {age:year}=person;
const {address:{city}}=person;
const {address:{area:mountain}}=person;
const {title:[title1,{title:title2}]}=person;
*/
//简便写法：
const{
  name,
  age:year,
  address:{city},
  address:{area:mountain},
  title:[title1,{title:title2}]
}=person;

console.log(name) // 小明
console.log(year) // 18
console.log(city) // ChongQing
console.log(mountain) // RedRock
console.log(title1) // student
console.log(title2) // GoodStudent