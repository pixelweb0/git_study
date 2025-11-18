// 매소드 (Method)

let greeting = {
  sayHello : function() {
    console.log('Hello');
  },
  sayHi : function() {
    console.log('Hi');
  },
  sayBye : function() {
    console.log('Bye');
  },
  sayGoodbye : function(name) {
    console.log(`Goodbye ${name}`);
  }
};

// 점 표기법 (object.method())
greeting.sayHello();
greeting.sayHi();
greeting.sayBye();
greeting.sayGoodbye('John');

// 대괄호 표기법 (object['method']())
greeting['sayGoodbye']('John');

console.log('----- 매서드 활용 -----');
let rectAngle = {
  width: 30,
  height: 50,
  getArea: function() {
    return rectAngle.width * rectAngle.height;
  }
}

let triAngle = {
  width: 15,
  height: 40,
  getArea: function() {
    return triAngle.width * triAngle.height / 2;
  }
}

console.log(rectAngle.getArea());
console.log(triAngle.getArea());