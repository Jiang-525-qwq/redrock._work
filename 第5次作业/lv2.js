  var name = 'window'//全局变量
  function Person(name) {
    this.name = name //实例属性
    //函数表达式
    this.foo1 = function () {
      console.log(this.name)
    }
    //箭头函数
    this.foo2 = () => console.log(this.name)
    //返回函数表达式
    this.foo3 = function () {
      return function () {
        console.log(this.name)
      }
    }
    //返回箭头函数
    this.foo4 = function () {
      return () => {
        console.log(this.name)
      }
    }
  }
  //使用构造函数创建对象
  var person1 = new Person('person1')
  var person2 = new Person('person2')
  
  person1.foo1()//foo1普通函数，此时this指向person1，输出person1
  person1.foo1.call(person2)//将this绑定到person2 ，输出person2
  
  person1.foo2()//foo2箭头函数，继承定义时的this，输出person1
  person1.foo2.call(person2) //试图将this绑定到person2，但箭头函数this不可变，依旧输出person1
  
  person1.foo3()()//foo3返回的函数无绑定，在全局调用，输出window
  person1.foo3.call(person2)() //试图将foo3绑定到person2，但后一个函数依旧在全局调用，输出window
  person1.foo3().call(person2) //先调用foo3返回函数，再用call将this绑定到person2，输出person2
  
  person1.foo4()()//箭头函数继承foo4的this，输出person1
  person1.foo4.call(person2)() //箭头函数继承绑定后的this，输出person2
  person1.foo4().call(person2) //箭头函数的this不可变，依旧输出person1