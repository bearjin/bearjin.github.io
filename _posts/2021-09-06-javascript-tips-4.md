---
title: "Javascript Tips, 전개 구문(Spread syntax)"
categories:
  - Javascript
tags:
  - javascript
  - 전개 구문(Spread syntax)
  - tips
  - 최신 문법
  - study
---

드림코딩 엘리님의 자바스크립트 프로처럼 쓰는 팁 영상을 보고나서 기존에 쓰고 있던 방식과 새로 알게된 유익한 내용들이 많아 하나씩 정리를 해보려 합니다. 이번 시간에는 전개 구문(Spread syntax)에 대해 정리해보겠습니다.

<span style="color:#8c8c8c;">(* 포스트 내용에 틀리거나 수정이 필요한 부분이 있을 시 알려주시면 감사하겠습니다!)</span>

## 전개 구문(Spread syntax)
**전개 구문** 은 배열이나 객체들의 값을 복사하고 변경하는 것을 기존 방법들 보다 훨씬 간결하게 작성해 사용할 수 있습니다. 먼저 배열에서의 전개에 대해 알아 보겠습니다.

## 배열에서의 전개
배열에서 값을 추가(push)하거나, 변경하거나(splice), 합치거나(concat)등의 메소드들을 사용해 값을 변경해줘야 했습니다. 이러한 메소드들을 사용하지 않고 전개 구문을 통해 동일하게 구현할 수 있습니다.

```javascript
// Spread Syntax - Array
let fruits = ['🥝', '🍌', '🍍'];

// fruits.push('🍓');
fruits = [...fruits, '🍓'];

// fruits.unshift('🍈');
fruits = ['🍈', ...fruits];

const fruits2 = ['🍉', '🍒', '🍎'];
// let combined = fruits.concat(fruits2);
let combined = [...fruits, ...fruits2];

const fruits3 = ['🍏', ...fruits, '🥭', '🍑'];
```

## 객체에서의 전개
객체에서도 값을 변경하거나(Object[key]), 병합하거나(assign)등의 방법들이 아닌 전개 구문을 통해 훨씬 간결하게 작성하여 동일하게 구현 할 수 있습니다.

```javascript
// Spread Syntax - Object
const item = { type: '👔', size: 'M' };
const detail = { price: 20, made: 'Korea', gender: 'M'};

// ❌ Bad Code 💩
item['price'] = detail.price;

// ❌ Bad Code 💩
const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = item.price;
newObject['made'] = item.made;
newObject['gender'] = item.gender;

// ❌ Bad Code 💩
const newObject2 = {
  type: item.type,
  size: item.size,
  price: item.price,
  made: item.made,
  gender: item.gender,
}
```

위 코드들 처럼 새로운 객체로 복사하기 위해 하나하나 코드를 작성해주는 것은 좋지 않은 방식의 코드 작성 입니다. 

```javascript
// 💯 Good Code ✨
const shirt1 = Object.assign(item, detail);

// 💯 Good Code ✨
const shirt2 = {...item, ...detail};
```

assign 메소드를 사용해 객체를 병합할 수 있고 전개 구문을 사용하면 더 간결하게 병합이 가능합니다.