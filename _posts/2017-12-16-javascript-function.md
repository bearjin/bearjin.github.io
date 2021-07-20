---
title: "함수 선언에 따른 차이 이해하기"
categories:
  - Javascript
tags:
  - javascript
  - function
  - Study
---

자바스크립트에서 함수는 function 키워드를 통해서 생성할 수 있습니다. 함수를 생성하는 방법으로는 3가지 방법이 있습니다. 

- 함수선언식(Function Declaration)
- 함수표현식(Function Expression)
- new function

```javascript
// 함수 선언문
function a() {
    return 'a';
}

// 기명 함수표현식
var b = function bb() {
    return 'bb';
}

// 익명 함수 표현식
var c = function(){
    return 'c';
}
```

각각의 함수 선언 방식에 따라 함수의 차이점을 가지고 있습니다.

```javascript
// 함수 선언식에서의 호이스팅
a();
function a(){
    console.log('abc');
};
> abc

// 함수 표현식에서의 호이스팅
a();
var a = function(){
    console.log('abc');
};
> Uncaught TypeError: a is not a function

// 함수 표현식에서는 실행함수를 함수 표현식 아래에 작성해야 합니다.
var a = function(){
    console.log('abc');
};
a();
> abc
```
위 코드를 보면 함수선언에서는 a(); 라는 실행코드를 해석하기 이전에 함수 선언을 먼저 호이스팅하여 global 객체에 등록시키기 때문에 오류 없이 'abc'가 나타납니다. 하지만 함수표현식에서는 호이스팅에 의해 변수 a 가 먼저 선언되고 a(); 가 실행됩니다. 여기서 a에는 아직 함수가 담기지 않아 타입에러가 발생하게 됩니다.  a(); 함수 실행코드를 함수표현식 아래에 작성하게 되면 정상적으로 abc가 실행 되게 됩니다.

#### Reference
[http://insanehong.kr/post/javascript-function/](http://insanehong.kr/post/javascript-function/)
[https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%ED%95%A8%EC%88%98](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%ED%95%A8%EC%88%98)
[http://webclub.tistory.com/310](http://webclub.tistory.com/310)
[http://w7c.blogspot.kr/2016/01/javascript-function-declaration-and.html](http://w7c.blogspot.kr/2016/01/javascript-function-declaration-and.html)


