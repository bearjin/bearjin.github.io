---
title: "프로그래머스 Weekly Challenge 1주차"
categories:
  - Programmers
tags:
  - Programmers
  - Javascript
  - Study
---

🔗[프로그래머스 Weekly Challenge 1주차 - 부족한 금액 계산하기](https://programmers.co.kr/learn/courses/30/lessons/82612?language=javascript)

프로그래머스 위클리 챌린지 참여하기 1주차 문제

## 채점 결과 정확성: 95.7 합계: 95.7 / 100.0 를 받았던 코드

```javascript
function solution(price, money, count) {
  let answer = -1;
  let result = 0;
  for(let i = 1; i <= count; i++) {
      result += price * i
  }
  answer = result - money;
  return answer;
}
```

보유금액이 계산된 놀이기구 이용료보다 커서 돈이 부족하지 않을 경우 0을 리턴해야되는데 그부분을 처리하지 않아 다시 수정했고 통과가 가능했다. 다음부턴 문제를 좀 더 꼼꼼히 읽어야지...
```javascript
function solution(price, money, count) {
  let answer = 0;
  let result = 0;
  for(let i = 1; i <= count; i++) {
    result += price * i
  }
  if(result <= money) {
    return answer;
  } else {
    return answer = result - money;
  }
}
```

기존 변수 answer 와 삼항식을 이용해 간소화한 코드
```javascript
function solution(price, money, count) {
  let answer = 0;
  for(let i = 1; i <= count; i++) {
    answer += price * i
  }
  return answer <= money ? 0 : answer - money;
}
```

현재 좋아요를 가장 많이 받은 코드인데 가우스공식을 이용했다고하는데 단 2줄로 가능하다니... 대단하다...
🔗[가우스 공식 참고 링크](https://eguegu.tistory.com/4351)
```javascript
function solution(price, money, count) {
  const tmp = price * count * (count + 1) / 2 - money;
  return tmp > 0 ? tmp : 0;
}
```