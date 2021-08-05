---
title: "프로그래머스 코딩 테스트 #4 로또의 최고 순위와 최저 순위"
categories:
  - Programmers
tags:
  - Programmers
  - Javascript
  - Study
---

🔗[코딩테스트 #4 - 로또의 최고 순위와 최저 순위](https://programmers.co.kr/learn/courses/30/lessons/77484)

오랜만에 코딩테스트 문제를 풀어보았다. 로또의 최고 순위와 최저 순위를 맞혀보는 문제였는데 맞힌 갯수를 순위로 변경해주는 부분에서 생각을 잘 못해 시간이 조금 걸렸다.

## 테스트 결과를 통과하지 못했던 코드

```javascript
function solution(lottos, win_nums) {
    var answer = [];
    var zeroNumber = 0;
    var sameNumber = 0;
    var rank = 7;
    
    lottos.map(elm => {
        var sameIndex = win_nums.indexOf(elm);
        if (elm === 0) {
            zeroNumber++;
            return;
        }
        if (sameIndex >= 0) {
            sameNumber++;
        }
    });
    answer = [7 - (sameNumber + zeroNumber), rank - sameNumber]
    
    return answer;
}
```

처음에는 rank를 7로 적용해 최고순위를 7 - (맞힌 갯수 + 0의 갯수), 최저 순위를 7 - 맞힌 갯수로 적용했었다 결과는 테스트 케이스에서 1,3번째는 통과 했지만 2번째 케이스에서 [1,7]로 결과가 나와 통과 하지 못해 어떻게 맞힌 갯수가 0 ~ 1개였을때 둘다 6등으로 변환 시켜줄 수 있을지를 고민했고 배열을 이용해 원하는 결과를 얻을 수 있었다.

## 테스트 결과 통과 코드
```javascript
function solution(lottos, win_nums) {
    var answer = [];
    var zeroNumber = 0;
    var sameNumber = 0;
    var rank = [6,6,5,4,3,2,1];
    
    lottos.map(elm => {
        var sameIndex = win_nums.indexOf(elm);
        if (elm === 0) {
            zeroNumber++;
            return;
        }
        if (sameIndex >= 0) {
            sameNumber++;
        }
    });
    answer = [rank[sameNumber + zeroNumber], rank[sameNumber]]
    
    return answer;
}
```