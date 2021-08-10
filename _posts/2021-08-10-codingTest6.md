---
title: "프로그래머스 Weekly Challenge 1주차"
categories:
  - Programmers
tags:
  - Programmers
  - Javascript
  - Study
---

🔗[프로그래머스 Weekly Challenge 2주차 - 상호평가 평균 구하기](https://programmers.co.kr/learn/courses/30/lessons/83201)

## 문제 풀이
1. 0번째,1번째... 학생들이 평가한 점수 이중배열을 돌며 n번째 학생이 받은 점수의 배열을 만든다.
2. 배열의 최고점, 최소점 값을 구한다.
3. 베열안에서 최고점, 최소점과 일치하는 값의 갯수를 구한다.
4. 자신의 점수가 최고점, 최소점과 일치하거나 유일한 값인지 비교하여 조건에 일치하며 값을 제거
5. 남은 배열의 값들을 합산하여 평균 계산.
6. 평균을 기준에 따라 학점 부여
7. 리턴 된 배열 값을 문자열로 변환

```javascript
function solution(scores) {    
  let answer = scores.map((elm, idx) => {
    let arr = [];
    for (let i = 0; i < elm.length; i++) {
      arr.push(scores[i][idx]);
    }
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const cntMax = arr.filter(item => item === max).length;
    const cntMin = arr.filter(item => item === min).length;
      
    if (elm[idx] === max && cntMax === 1) arr.splice(idx, 1);
    if (elm[idx] === min && cntMin === 1) arr.splice(idx, 1);
      
    let average = arr.reduce((pre, cur) => pre + cur) / arr.length;
    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 70) return 'C';
    if (average >= 50) return 'D';
    if (average < 50) return 'F';
  });
  return answer.join("");
}
```