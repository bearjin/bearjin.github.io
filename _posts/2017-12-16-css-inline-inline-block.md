---
title: "inline-block 요소 간격 제거"
categories:
  - CSS
tags:
  - css
  - study
---

인라인-블럭 요소들을 아래와 같이 작성 하였을 때 요소 사이에 간격이 발생 하게 됩니다.

## 기존 간격 🔗[예시링크](https://jsfiddle.net/bearjin/2b2hog0b/#)

```html
<div id="btn_box">
  <button>버튼1</button>
  <button>버튼2</button>
  <button>버튼3</button>
</div>
```
```css
*{margin:0; padding:0;}
#btn_box{padding:50px;}
button{width:100px; height:50px; backgrond-color:#eee;}
```
![button_sample](/assets/images/inline-block.jpg)

## 1. 요소들 붙여쓰기
css 수정 없이 간단한 방법으로 간격을 없앨 수 있지만 가독성이 좋지 않습니다.

```html
<div id="btn_box">
  <button>버튼1</button><button>버튼2</button><button>버튼3</button>
</div>
```

## 2. 부모 요소에 font-size:0
부모 요소에 font-size:0 을 적용 한 후, 자식 요소에 기존의 font-size 값을 입력하는 방법입니다.

```css
*{margin:0; padding:0;}
#btn_box{padding:50px; font-size:0;}
button{width:100px; height:50px; backgrond-color:#eee; font-size:14px;}
```

## 3. 주석처리 방법
html의 주석을 활용해서 간격을 제거 할 수 있다고 합니다.

```html
<div id="btn_box">
  <button>버튼1</button><!--
  --><button>버튼2</button><!--
  --><button>버튼3</button>
</div>
```

## 4. 닫힘 태그 내리는 방법
닫힘 태그를 아래로 내려 간격을 없앨 수 있습니다.

```html
<div id="btn_box">
  <button>버튼1</button
  ><button>버튼2</button
  ><button>버튼3</button>
</div>
```

## 5. 마진값으로 없애기
마진값을 통해 간격을 없앨 수 있지만 브라우저 마다 마진 값이 달라 추천 하지 않은 방법 입니다.

```css
*{margin:0; padding:0;}
#btn_box{padding:50px;}
button{width:100px; height:50px; margin-right:-6px; backgrond-color:#eee;}
```

## 6. float 속성
float 값을 부여해 간격을 제거 할 수 있지만 vertical-align 속성을 사용 할 수 없습니다. 

```css
*{margin:0; padding:0;}
#btn_box{overflow:hidden; padding:50px;}
button{float:left; width:100px; height:50px; backgrond-color:#eee;}
```