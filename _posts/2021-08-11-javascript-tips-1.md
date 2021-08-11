---
title: "Javascript Tips, Ternary operator"
categories:
  - Javascript
tags:
  - javascript
  - operator
  - tips
  - 최신 문법
  - study
---

드림코딩 엘리님의 자바스크립트 프로처럼 쓰는 팁 영상을 보고나서 기존에 쓰고 있던 방식과 새로 알게된 유익한 내용들이 많아 하나씩 정리를 해보려 합니다. 이번 시간에는 삼항 연산자 (ternary operator)에 대해 정리해보겠습니다.

<span style="color:#8c8c8c;">(* 포스트 내용에 틀리거나 수정이 필요한 부분이 있을 시 알려주시면 감사하겠습니다!)</span>

## 삼항 연산자 (ternary operator)
**삼항 연산자**는 세 개의 피연산자를 취할수 있는 연산자로 맨앞에 조건문을 작성하고 물음표(?) 뒤에 조건이 진실 일때 실행되는 코드 콜론(:) 뒤에 거짓일때 실행 되는 코드가 들어갑니다. 주로 if문을 단축해서 사용할때 사용됩니다.

```javascript
const getResult = (score) => {
  let result;
  if (score > 5) {
    result = '👍';
  } else if (score <= 5) {
    result = '👎';
  }
  return result;
}
```

위 코드는 스코어가 5점 초과 일때 👍, 5점 이하 일때 👎 를 리턴하는 조건을 가진 함수 입니다. 이를 삼항 연산자를 사용해 코드를 단축 시킬 수 있습니다.

```javascript
const getResult = (score) => {
  return score > 5 ? '👍' : '👎';
}
```

리턴할 값을 담을 변수도 생략 가능하고 조건식도 한줄로 단축할 수 있습니다!     
기존에 삼항 연산자를 사용하면서 조건식이 복잡하거나 길 경우에는 오히려 보기 불편하다고 느껴 if문을 사용하는 경향이 있었는데 이번에 다시 한번 정리하면서 보니 확실히 조건식이 간단할 경우에는 삼항 연산자를 사용하는것이 훨씬 간결하고 직관적이기 때문에 효율적인것 같다고 느꼈다.