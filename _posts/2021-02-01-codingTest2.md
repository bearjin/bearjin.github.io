---
title: "프로그래머스 코딩 테스트 #2 완주하지 못한 선수"
categories:
  - React
tags:
  - Programmers
  - Coding Test
  - Javascript
  - Study
---

프로그래머스 사이트의 코딩테스트 연습
[정렬 - 완주하지 못한 선수](https://programmers.co.kr/learn/courses/30/lessons/42576)

※ 효율성 통과를 하지 못해 코드 수정이 필요

```
function solution(participant, completion) {
    var answer = '';
    completion.forEach(function(element){
        participant.splice(participant.indexOf(element), 1);
    });
    answer = participant[0];
    return answer;
}
solution(["leo", "kiki", "eden"], 	["eden", "kiki"]);
solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]);
solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
```