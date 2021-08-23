---
title: "Javascript Tips, 구조 분해 할당(Destructuring assignment)"
categories:
  - Javascript
tags:
  - javascript
  - 구조 분해 할당
  - tips
  - 최신 문법
  - study
---

드림코딩 엘리님의 자바스크립트 프로처럼 쓰는 팁 영상을 보고나서 기존에 쓰고 있던 방식과 새로 알게된 유익한 내용들이 많아 하나씩 정리를 해보려 합니다. 이번 시간에는 구조 분해 할당에 대해 정리해보겠습니다.

<span style="color:#8c8c8c;">(* 포스트 내용에 틀리거나 수정이 필요한 부분이 있을 시 알려주시면 감사하겠습니다!)</span>

## 구조 분해 할당(Destructuring assignment)
**구조 분해 할당** 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식입니다.    
먼저 배열 구조 분해 부터 알아보겠습니다. 

## 배열 구조 분해(Array destructuring)
**배열 구조 분해**의 예제들을 통해 배열이 어떻게 분해되는지 알아 보겠습니다.

### 기본 변수 할당
변수에 할당하고자 하는 값을 인덱스를 통해 접근하지 않고 변수에 할당 할 수 있습니다. 이 과정에서 분해 대상인 배열은 변경 되지 않고 기존값을 유지합니다.

```javascript
const bearjin = ['one', 'two', 'three'];

const [a, b, c] = bearjin;
// const a = bearjin[0];
// const b = bearjin[1];
// const c = bearjin[2];
console.log(a); // 'one';
console.log(b); // 'two';
console.log(c); // 'three';
```

### 선언에서 분리한 할당
변수의 선언이 분리되어도 구조 분해를 통해 값을 할당할 수 있습니다.

```javascript
let a, b;

[a, b] = [1, 2];
console.log(a); // 1;
console.log(b); // 2;
```

### 기본값
변수에 기본값을 할당하면, 분해한 값이 undefined일 때 그 값을 대신 사용합니다.

```javascript
let a, b;

[a = 1, b = 2] = [3];
console.log(a); // 3;
console.log(b); // 2;
```

### 변수 값 교환하기
하나의 구조 분해 표현식만으로 두 변수의 값을 교환할 수 있습니다.

```javascript
let a = 1;
let b = 2;

[a, b] = [b , a];
console.log(a); // 2;
console.log(b); // 1;
```

### 함수가 반환한 배열 분석
구조 분해를 사용하면 함수에서 반환된 배열에 대한 작업을 더 간결하게 수행할 수 있습니다.

```javascript
function bearjin() {
  return [1, 2];
}
let a, b;
[a, b] = bearjin();
console.log(a); // 1;
console.log(b); // 2;
```

### 일부 반환 값 무시하기
쉼표를 통해 필요하지 않은 반환 값을 무시할 수 있습니다.

```javascript
function bearjin() {
  return [1, 2, 3];
}
let [a, , b] = bearjin();
console.log(a); // 1;
console.log(b); // 3;
```
쉼표를 두개 사용해 반환 값을 모두 무시할 수 도 있습니다.

```javascript
[,,] = bearjin();
```

### 변수에 배열의 나머지를 할당하기
배열을 구조 분해할 경우, 나머지 구문을 이용해 분해하고 남은 부분을 하나의 변수에 할당할 수 있습니다. 나머지 요소는 새로운 배열로 반환됩니다.

``` javascript
let [a, ...b] = [1, 2, 3];
console.log(a); // 1;
console.log(b); // [2, 3];
```

## 객체 구조 분해(Object destructuring)
이번에는 **객체 구조 분해**의 예제들을 통해 객체가 어떻게 분해되는지 알아 보겠습니다.

### 기본 할당
변수에 할당하고자 하는 값을 user.name, user.id, user.job 등과 같이 접근해 각각 담아줄 필요 없이 객체 담긴 해당 값들을 분해에 변수에 할당해줍니다. 순서와 상관 없이 작성해도 동일하게 동작 합니다.

```javascript
const user = {
  name: 'wj',
  id: 'bearjin',
  job: 'publisher',
}
const {name, id, job} = user;
console.log(name); // 'wj';
console.log(id); // 'bearjin';
console.log(job); // 'publisher';
```

### 선언 없는 할당
구조 분해를 통해 변수의 선언과 분리하여 변수에 값을 할당할 수 있습니다.

```javascript
const name, id;

({name, id} = {name: 1, id: 2});
```

### 새로운 변수 이름으로 할당하기
객체로부터 속성을 해체하여 객체의 원래 속성명과는 다른 이름의 변수에 할당할 수 있습니다.

```javascript
const user = {
  name: 'wj',
  id: 'bearjin',
  job: 'publisher',
}

const {name: wj, id: bearjin} = user;
console.log(wj); // 'wj';
console.log(bearjin); // 'bearjin';
```

### 기본값
객체로부터 해체된 값이 undefined인 경우, 변수에 기본값을 할당할 수 있습니다.

```javascript
const { name = 'name', id = 'id'} = {name : 'wj'};

console.log(name); // 'wj';
console.log(id); // 'id';
```

### 기본값 갖는 새로운 이름의 변수에 할당하기
새로운 변수명 할당과 기본값 할당을 한번에 할 수 있습니다.

```javascript
const { name:newName = 'name', id:newId = 'id'} = {name : 'wj'};

console.log(newName); // 'wj';
console.log(newId); // 'id';
```

### 변수에 객체의 나머지를 할당하기
배열에서와 마찬가지로 객체 구조 분해도 나머지 요소들을 객체 형식으로  반환할 수 있습니다.

```javascript
const user = {
  name: 'wj',
  id: 'bearjin',
  job: 'publisher',
}
const {name, ...rest} = user;
console.log(rest.id); // 'bearjin';
console.log(rest.job); // 'publisher';
```

### 중첩된 객체 및 배열의 구조 분해
```javascript
const user = {
  name: 'wj',
  id: 'bearjin',
  job: 'publisher',
  skills: ['html', 'css', 'javascript'],
  location: [
    { country : 'korea'}
  ],
}

const {name, id, job, skills:[skill1, skill2, skill3], location: [{country: country}]} = user;
console.log(skill1); // 'html'
console.log(skill2); // 'css'
console.log(country); // 'korea'
```

리액트에 대해 공부하면서 구조 분해 할당을 조금 사용해 봤었는데 이번 기회에 자세히 알아보니 다양한 방식으로 활용해 사용이 가능하다는 것을 알게 되었다. 구조 분해 할당을 사용하니 확실히 코드들이 간결해지고 호출도 편리해진다는 것을 느끼게 되었다. 앞으로는 간단한 부분부터 적용해보면서 사용법들을 익히고 잘 활용해 코드의 가독성과 효율을 높일 수 있도록 해야겠다.