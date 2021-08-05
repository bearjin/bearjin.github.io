---
title: "세로 중앙 정렬하기"
categories:
  - CSS
tags:
  - css
  - study
---

컨텐츠를 세로로 중앙 정렬 하는 방법 입니다.

## padding  이용하기 🔗[예시링크](https://jsfiddle.net/bearjin/phv4Lz0d/)
1. 부모요소에 height값 없이 padding 값 만으로 높이를 지정하여 세로 정렬 합니다.
```css
#wrap{width:100px; padding:50px; background-color:green;}
.content{background-color:#eee;}
```

## 포지션(Position)  이용하기 🔗[예시링크](https://jsfiddle.net/bearjin/whsq3L4b/)
1. 부모요소에 positon:relative; 적용 
2. 중앙정렬 하려는 컨텐츠 요소에 position: absolute; top: 50%; 적용
3. 컨텐츠의 height 값이 고정일 경우 : margin-top:-(height/2); 적용 
4. 컨텐츠의 height 값이 고정이 아닐 경우 : transform: translateY(-50%); 적용   
```css
#wrap{position:relative; left:0; top:0; width:200px; height:100px; background-color:green;}
.content{position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); background-color:#eee;}
```


## display: table / table-cell 이용하기 🔗[예시링크](https://jsfiddle.net/bearjin/s973Lakf/)
1. 부모요소에 display: table;
2. 중앙정렬 하려는 컨텐츠 요소에 display: table-cell; vertical-align: middle;
```css
#wrap{display:table; width:200px; height:200px; background-color:green; text-align:center;}
.content{display:table-cell; vertical-align:middle; color:#fff;}
```


## 가상요소 ::before, ::after 이용하기 🔗[예시링크](https://jsfiddle.net/bearjin/xp4y10ep/)
1. 부모의 박스에 ::before 혹은 ::after 를 추가 한 후 content: ""; display: inline-block; height: 100%; vertical-align: middle; 
2. 중앙정렬 시키고싶은 컨텐츠박스에도  display: inline-block; vertical-align: middle; 
단 이방법은 inline-block 박스끼리의 정렬로 ::before 사용시 왼쪽에  ::after 사용시 우측에 간격이 발생합니다.
```css
#wrap{width:200px; height:200px; background-color:green; text-align:center;}
#wrap::before{content:''; display:inline-block; height:100%; vertical-align:middle;}
.content{display:inline-block; vertical-align:middle; background-color:red; color:#fff;}
```

## line-height 이용하기 🔗[예시링크](https://jsfiddle.net/bearjin/voec0ot9/2/)
1. height 값이 고정 이고 텍스트가 1행일 경우 line-height를 이용하여 세로 중앙 정렬을 할 수 있습니다.
```css
#wrap{width:200px; text-align:center;}
.content{line-height:200px; background-color:green; color:#fff;}
```
