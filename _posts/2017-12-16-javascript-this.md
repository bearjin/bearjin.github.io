---
title: "this에 대한 이해하기"
categories:
  - Javascript
tags:
  - javascript
  - this
  - Study
---

다른 언어들에서 this는 클래스로부터 생성되는 인스턴스(어떤 집합에 속하는 개별적인 요소) 중 현재 객체를 의미한다고 합니다. 하지만 자바스크립트에서 this는 함수의 현재 실행 문맥(Execution Context)을 나타내며, 자바스크립트에는 4가지의 함수 실행 타입이 있기 때문에 각각의 실행 타입에 따라 this가 변하게 됩니다.

- 함수 실행 : alert('Hello World!');
- 메소스 실행 : console.log('Hello World!');
- 생성자 실행 : new RegExp('\d');
- 간접 실행 : alert.call(undefined, 'Hello World!');

각각의 타입은 서로 다른 각각의 문맥을 가지기 때문에 this 키워드를 바르게 이해하기 위해서는 실행 타입이 문맥에 어떤 영향을 미치는지에 대해 확실히 이해해야 합니다. 

## 전역 컨텍스트 
전역 컨텍스트에서 this는 글로벌 오브젝트를 참조 합니다. 글로벌 오브젝트는 환경에 따라 전역 객체가 변합니다. 브라우저 상에서 전역객체는 widow을 가리킵니다.  
```javascript
// 웹 브라우저에서 전역 객체는 window 객체입니다.
console.log(this === window); // true

this.a = 28;
console.log(window.a); // 28
```

## 함수 컨텍스트
함수 내부에서, this는 함수를 호출한 방법에 의해 좌우됩니다.

### 단순 함수 호출시
```javascript
function f1(){
  return this;
}

if(f1() === window){
  console.log("true입니다.");
}else{
  console.log("false입니다.")
}
// true 입니다.

"use strict"
function f1(){
  return this;
}
if(f1() === window){
  console.log("true입니다.");
}else{
  console.log("false입니다.");
}
//false입니다.
```
이 경우, this의 값은 호출에 의해 설정되지 않습니다. this의 값은 항상 전역 객체에서 기본이 되는 객체여야 합니다.
하지만 strict 모드에서는 this가 전역객체를 참조하여 window 변수를 사용하면 전역 객체에 손상을 입히게 되어 
ECMA 에서는 엄격모드를 통해 this에 undefined 값을 주도록 하여 이러한 손상을 방지하게 설정 했다고 합니다.

비엄격모드에서의 결과   
![this](/assets/images/this_img01.png)

엄격모드에서의 결과   
![this](/assets/images/this_img02.png)

### 객체의 메소드 호출시
함수가 객체의 프로퍼티이면 메소드 호출 패턴으로 호출됩니다. 이때 메소드 내부의 this는 해당 메소드를 소유한 객체 즉 해당 메소드를 호출한 객체에 바인딩됩니다. 

```javascript
var obj1 = {
  name : 'Kim',
  sayName : function(){
    console.log(this.name);
    console.log(this);
  }
}

var obj2 = {
  name : 'Lee'
}

obj2.sayName = obj1.sayName;

obj1.sayName();  // Kim 여기서 this는 obj1
obj2.sayName();  // Lee 여기서 this는 obj2


메소드 명앞의 객체가 this가 됩니다.
obj1.sayName();
obj2.sayName();
```
![this](/assets/images/this_img03.png)

### 명시적인 this 바인딩
직관적으로 코드에 의도를 나타내는 방법으로 명시적 바인딩이 있습니다. 자바스크립트의 call(), apply(), bind() 함수가 그런 역활을 하는 내장 함수들 입니다. call() 과 apply() 함수는 실행할 함수 인자를 넘기는 방식만 다를뿐, 컨텍스트 객체를 명시한다는 점에서 동일한 함수입니다. 또한 call() 과 apply()는 함수 호출을 따로 하지 않아도 함수를 호출합니다. 

#### apply
apply()를 통한 this의 바인딩을 먼저 살펴 보겠습니다.

```javascript
함수.apply( this가 될 객체, [배열] ); // apply() 의 문법입니다.

var ex = function(a,b,c){
	console.log(a+","+b+","+c+"가 저장되었습니다.");
}
ex.apply(null,[1,2,3]); // this에 객체를 지정하지 않아도 되기 때문에 null 을 입력했습니다.

// 실행 결과 : 1,2,3 가 저장되었습니다.
```

아래 처럼 this에 원하는 객체를 지정하고 내용을 추가하여 호출하여 사용할 수 있습니다. 또한 함수호출 없이 바로 함수가 실행되어 woongjin says helloworld 라는 결과가 출력 되었습니다.

```javascript
var person = {
    hello : function(thing){
    console.log(this.name + " says hello" + thing);
  }
}

person.hello.apply({ name: "woongjin" }, ["world"]);
// 실행 결과 : woongjin says helloworld
```

#### call
call은 apply 와 같은 기능을 가지고 있습니다. 차이점을 call은 인자를 배열로 받지 않는다는 점입니다.
apply에서 처음 사용했던 코드처럼 ex.apply(null,[1,2,3]); 인자를 배열형식으로 사용한다면 apply 그렇지 않다면 
call을 사용해 ex.call(null,1,2,3); 처럼 입력하면 같은 결과를 출력 하게됩니다.

```javascript
함수.call( this가 될 객체, 인자1, 인자2, 인자3 ); // call() 의 문법입니다.

var ex = function(a,b,c){
	console.log(a+","+b+","+c+"가 저장되었습니다.");
}
ex.call(null,1,2,3); // this에 객체를 지정하지 않아도 되기 때문에 null 을 입력했습니다.

// 실행 결과 : 1,2,3 가 저장되었습니다.
```

#### bind
bind() 함수는 함수가 가리키는 this만 바꾸고 호출은 하지 않습니다. 함수를 즉시 호출하여 사용할때에는 call(), apply()를 사용하고
해당함수를 특정 컨텍스트에서 호출해 사용하고 싶다면 bind()를 사용하여 this를 지정해주고 변수에 담아 호출해야 합니다. 

```javascript
var person = {
    hello : function(thing){
    console.log(this.name + " says hello" + thing);
  }
}

var hellowFunc = person.hello.apply({ name: "woongjin" }, "world");

helloFunc();
// 실행 결과 : woongjin says helloworld
```

![this](/assets/images/this_img04.png)

#### Reference
[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this)
[http://poiemaweb.com/js-this](http://poiemaweb.com/js-this)
[https://hyunseob.github.io/2016/03/10/javascript-this/](https://hyunseob.github.io/2016/03/10/javascript-this/)
[http://blog.jeonghwan.net/2017/10/22/js-context-binding.html](http://blog.jeonghwan.net/2017/10/22/js-context-binding.html)
[http://webframeworks.kr/tutorials/translate/explanation-of-this-in-javascript-1/](http://webframeworks.kr/tutorials/translate/explanation-of-this-in-javascript-1/)