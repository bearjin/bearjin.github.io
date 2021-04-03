---
title: "프로그래머스 코딩 테스트 #3 위장"
categories:
  - Coding Test
tags:
  - Programmers
  - Javascript
  - Study
---

프로그래머스 사이트의 코딩테스트 연습 - [해시 - 위장](https://programmers.co.kr/learn/courses/30/lessons/42578?language=javascript)

```javascript
function solution(clothes) {
    var answer = 1;
    var obj = {};
    clothes.forEach(function (element) {
        if (obj[element[1]] >= 1) {
            obj[element[1]] += 1
        } else {
            obj[element[1]] = 1
        }
    });

    for (var i in obj) {
        answer *= (obj[i] + 1)
    }

    return answer - 1;
}

solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]);
```