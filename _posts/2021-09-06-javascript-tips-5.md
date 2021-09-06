---
title: "Javascript Tips, Optional chaining"
categories:
  - Javascript
tags:
  - javascript
  - Optional chaining
  - tips
  - 최신 문법
  - study
---

드림코딩 엘리님의 자바스크립트 프로처럼 쓰는 팁 영상을 보고나서 기존에 쓰고 있던 방식과 새로 알게된 유익한 내용들이 많아 하나씩 정리를 해보려 합니다. 이번 시간에는 Optional chaining에 대해 정리해보겠습니다.

<span style="color:#8c8c8c;">(* 포스트 내용에 틀리거나 수정이 필요한 부분이 있을 시 알려주시면 감사하겠습니다!)</span>

## Optional chaining
**Optional chaining** 연산자는 참조하는 대상이 유효한지 검증하지 않고 연결된 객체의 값을 읽을 수 있고 값이 없을 경우 undefined를 리턴하여 에러가 발생하지 않고 값을 읽을 수 있습니다.

bob과 anna라는 객체가 존재하고 bob에는 job이라는 정보가 존재하지 않는 상태에서 bob의 job의 title에 접근하게 되면 타입 에러가 발생하게 됩니다.

```javascript
// Optional Chaining
const bob = {
  name: 'Julia',
  age: 20,
};

const anna = {
  name: 'Julia',
  age: 20,
  job: {
    title: 'Software Engineer',
  },
};

console.log(bob.job.title); 
// TypeError: Cannot read property 'title' of undefined
```

이러한 에러를 발생시키지 않기 위해 && 연산자를 통해 먼저 해당 객체에 프로퍼티가 존재하는지 확인을 해준 뒤 존재할 경우 값에 접근하는 방식을 사용하고 있습니다. 중첩 객체일 경우 && 연산자를 통해 계속 값을 연결해 확인을 해줘야 하고 코드가 길어지게 된다는 단점을 가지고 있습니다.

```javascript
// ❌ Bad Code 💩
const displayJobTitle = (person) => {
  if (person.job && person.job.title) {
    console.log(person.job.title);
  }
}
```

이러한 단점을 Optional chaining을 사용해 해결 할 수 있습니다. 접근할 대상이 존재하지 않을 경우 접근을 멈추고 undefined를 리턴해 줍니다. 이러한 점으로 에러가 발생하지 않고 값들에게 접근이 가능하고 코드도 훨씬 간결하게 작성할 수 있습니다.

```javascript
// 💯 Good Code ✨
const displayJobTitle = (person) => {
  if (person.job?.title) {
    console.log(person.job.title);
  }
}
```

Optional chaining을 사용할 때 주의 할 점으로 필수값에 대해서는 사용하지 않지 않는 것이 좋습니다. 필수값은 존재 하지 않을 경우 에러를 통해 오류를 바로 확인 할 수 있어야 하고 디버깅을 어렵게 만들 수 있기 때문에 사용하지 않는 것이 바람직합니다.

이전에 정리했던 Nullish coalescing operator (??) 와 함께 사용해 활용 할 수도 있습니다.

```javascript
// 💯 Good Code ✨
const displayJobTitle = (person) => {
  const title = person.job?.title ?? 'No Job Yet 💥';
  console.log(title);
}
```

그동안 데이터를 이용해 화면을 구현하는 경우 해당 데이터가 있는지를 체크하기 위해 && 연산자를 사용해 값을 확인했었는데 앞으로는 옵셔널 체이닝을 활용해 보는것도 좋을 것 같다.