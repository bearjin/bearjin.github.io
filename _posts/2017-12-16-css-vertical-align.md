---
title: "세로 중앙 정렬하기"
categories:
  - CSS
tags:
  - css
  - study
---

컨텐츠를 세로로 중앙 정렬 하는 방법 입니다.

## padding  이용하기
1. 부모요소에 height값 없이 padding 값 만으로 높이를 지정하여 세로 정렬 합니다.
[예시](https://jsfiddle.net/bearjin/phv4Lz0d/)

## 포지션(Position)  이용하기
1. 부모요소에 positon:relative; 적용 
2. 중앙정렬 하려는 컨텐츠 요소에 position: absolute; top: 50%; 적용
3. 컨텐츠의 height 값이 고정일 경우 : margin-top:-(height/2); 적용 
4. 컨텐츠의 height 값이 고정이 아닐 경우 : transform: translateY(-50%); 적용
[예시](https://jsfiddle.net/bearjin/whsq3L4b/)

## display: table / table-cell 이용하기
1. 부모요소에 display: table;
2. 중앙정렬 하려는 컨텐츠 요소에 display: table-cell; vertical-align: middle;
[예시](https://jsfiddle.net/bearjin/s973Lakf/)

## 가상요소 ::before, ::after 이용하기
1. 부모의 박스에 ::before 혹은 ::after 를 추가 한 후 content: ""; display: inline-block; height: 100%; vertical-align: middle; 
2. 중앙정렬 시키고싶은 컨텐츠박스에도  display: inline-block; vertical-align: middle; 
단 이방법은 inline-block 박스끼리의 정렬로 ::before 사용시 왼쪽에  ::after 사용시 우측에 간격이 발생합니다.
[예시](https://jsfiddle.net/bearjin/xp4y10ep/)

## line-height 이용하기
1. height 값이 고정 이고 텍스트가 1행일 경우 line-height를 이용하여 세로 중앙 정렬을 할 수 있습니다.
[예시](https://jsfiddle.net/bearjin/voec0ot9/2/)