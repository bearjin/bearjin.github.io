---
title: "Javascript Tips, Nullish coalescing operator (??)"
categories:
  - Javascript
tags:
  - javascript
  - operator
  - tips
  - 최신 문법
  - study
---

드림코딩 엘리님의 자바스크립트 프로처럼 쓰는 팁 영상을 보고나서 기존에 쓰고 있던 방식과 새로 알게된 유익한 내용들이 많아 하나씩 정리를 해보려 합니다. 이번 시간에는 null 병합 연산자(Nullish coalescing operator)에 대해 정리해보겠습니다.

<span style="color:#8c8c8c;">(* 포스트 내용에 틀리거나 수정이 필요한 부분이 있을 시 알려주시면 감사하겠습니다!)</span>

## null 병합 연산자(Nullish coalescing operator)
**null 병합 연산자**(??)는 논리 연산자로 왼쪽 피연산자가 **null 이나 undefined** 일때는 오른쪽 피연산자를 리턴하고 null 이나 undefined가 아닐 경우에는 왼쪽 피연산자를 그대로 리턴합니다.

```javascript
const printMessage = (text) => {
  let message = text;
  if (text === null || text === undefined) {
    message = 'Nothing to display 😅';
  }
  console.log(message);
}
```

printMessage 함수는 인자로 받아온 값이 null 이나 undefined일 경우 Nothing to display 😅 라는 문구를 보여주고 다른 값일 경우 해당 값을 보여주는 함수입니다. null 병합 연산자를 사용해 변경해보겠습니다.

```javascript
const printMessage = (text) => {
  const message = text ?? 'Nothing to display 😅';
  console.log(message);
}

printMessage('Hello'); // Hello
printMessage(undefined); // Nothing to display 😅
printMessage(null); // Nothing to display 😅
```

위 코드를 실행 할 경우 1번째는 Hello 2,3번째는 Nothing to display 😅가 실행되는것을 보실 수 있을겁니다. 위 코드의 경우 default parameter를 사용해도 같은 결과가 나오지 않나라고 생각 할 수 있습니다.

```javascript
const printMessage = (text = 'Nothing to display 😅') => {
  console.log(message);
}

printMessage('Hello'); // Hello
printMessage(undefined); // Nothing to display 😅
printMessage(null); // null
```

default parameter의 경우에는 값이 **undefined**일때만 default 값이 적용되기 때문에 null 일 경우에는 그대로 null 값이 나오게 되는 차이가 있습니다. 또 OR 연산자와도 헷갈리는 경우가 많은데 둘의 차이도 알아 보겠습니다.

```javascript
const printMessage = (text) => {
  const message = text || 'Nothing to display 😅';
  console.log(message);
}

printMessage('Hello'); // Hello
printMessage(0); // Nothing to display 😅
printMessage(''); // Nothing to display 😅
printMessage(undefined); // Nothing to display 😅
printMessage(null); // Nothing to display 😅
```

**OR 연산자**는 왼쪽 피연사자가 false 일 경우에 오른쪽 피연산자가 실행이 됩니다. 여기서 **0, '', NaN, null, undefined**가 모두  false에 해당하기 때문에 **null 이나 undefined**일 경우에만 피연산자를 반환하는 null 병합 연산자와 차이가 있습니다.

```javascript
function A() { console.log('A was called'); return undefined;}
function B() { console.log('B was called'); return false;}
function C() { console.log('C was called'); return "foo";}

console.log( A() ?? C() );
console.log( B() ?? C() );

// A was called
// C was called
// foo
// B was called
// false
```

null 병합 연산자는 함수를 실행해 실행된 값이 null 이나 undefined일 경우 다른 함수를 실행하도록 사용할 수도 있습니다. 위 코드에서 함수 A를 실행해 undefined가 리턴되어 함수 C가 실행되어지게 됩니다. 함수 B의 경우에는 false를 리턴하기 때문에 함수 C가 실행되지 않습니다.

``` javascript
null || undefined ?? "foo"; // raises a SyntaxError
true || undefined ?? "foo"; // raises a SyntaxError
```

AND, OR 연산자를 null 병합 연산자와 함께 쓰고 싶을 경우에는 아래 코드와 같이 괄호를 사용해 코드를 작성해야 됩니다.

```javascript
(null || undefined) ?? "foo"; // returns "foo"
```