---
title: "SCOPE(변수 범위) 이해하기"
categories:
  - Javascript
tags:
  - javascript
  - scope
  - Study
---

## SCOPE 란 ?
SCOPE (스코프)는 직역하면 영역, 범위라는 뜻을 가지고 있습니다. Javascript 안에서의 스코프는 변수와 매개변수의 유효범위를 나타내며 변수가 정의 될때 변수의 위치에 따라 전역 범위(Global Scope), 지역 범위(Local Scope) 로 나뉘어 집니다.   

- Global Scope 는 전역 범위로 전역 범위에서 선언된 변수는 코드 어느 곳에서도 참조하여 사용 할 수 있습니다.    
- Local Scope 는 지역 범위로 지역 범위에서 선언된 변수는 선언된 함수 내부안에서만 참조하여 사용 할 수 있습니다.

[예시코드](https://jsfiddle.net/rhkfoyyh/2/)

함수 외부에서 선언된 변수는 전역 스코프로 불리며 함수 외부에서 선언한 변수 global_scope는 local 함수 내에서도 불러 사용 할 수 있습니다. 하지만 local 함수 안에서 선언된 local_scope는 지역 스코프로 함수 local 안에서만 사용이 가능하여 함수 밖에서 local_scope를 값을 사용 할 수 없습니다. 

위의 코드를 실행 하였을 때 아래 그림처럼 지역변수 local_scope를 전역 스코프에서 호출하였을 때 local_scope 는 정의 되지 않았다는 오류가 발생 합니다. 

![scope](/assets/images/scope_img01.png)

Javascript Scope는 다른 언어들과는 다른 특징들을 몇가지 가지고 있습니다.

### 첫번째로 함수 단위의 유효범위를 가지고 있습니다. 
아래의 함수를 실행하였을 때 아래 그림과 같은 결과가 나타나는 것을 보실 수 있습니다. 다른 프로그래밍 언어들은 유효범위의 단위가 블록 단위이기 때문에 위의 코드와 같이 if문, for문 등 구문들이 사용되었을 때 중괄호 밖의 범위에서는 그 안의 변수를 사용할 수 없습니다. 하지만 JavaScript의 유효범위는 함수 단위이기 때문에 예제코드의 변수 a,b,c 모두 같은 유효범위를 갖습니다. 그 결과, 아래 그림처럼 구문 밖에서 그 변수를 참조하여 결과를 나타낸 것을 보실 수 있을 겁니다.

[예시코드](https://jsfiddle.net/0x1gn6ps/)

![scope](/assets/images/scope_img02.png)

### 두번째로 변수명의 중복이 가능합니다. 
다른 프로그래밍 언어에서는 변수명이 중복 되었을 때 에러가 발생하지만 JavaScript에서는 변수명이 중복되어도 에러가 나지 않습니다. 중복된 변수명으로 된 변수를 참조할 때 가장 가까운 범위의 변수를 참조합니다.  

[예시코드](https://jsfiddle.net/rhkfoyyh/1/)   

위의 코드를 실행 하였을 때 local_scope는 전역 변수가 아닌 좀 더 가까운 지역 변수 scope를 참조 하여 아래 그림과 같은 결과를 실행 합니다. 

![scope](/assets/images/scope_img03.png)

### 세번째 특징으로는 var 키워드 생략이 가능합니다.
JavaScript 에서는 var 키워드를 사용하여 변수를 선언 합니다. 다른 프로그래밍 언어의 경우에는 변수를 선언 할 때 변수형을 쓰지 않을 경우 에러가 나지만 JavaScript 는 var 키워드가 생략이 가능합니다. 단, var 키워드를 빼먹고 선언할 경우 전역 변수로 선언 됩니다. 

[예시코드](https://jsfiddle.net/rhkfoyyh/5/)

위의 코드 처럼 함수 내부에서 var 키워드를 쓰지 않고 변수 scope 를 선언 하였을 때 변수 scope는 전역 변수의 성격을 가집니다. 그 결과 두 함수에서 모두 같은 결과를 나타 냅니다.

![scope](/assets/images/scope_img04.png)

### 네번째로 렉시컬 특성을 가지고 있습니다.
렉시컬 특성이란 함수 실행 시 유효범위를 함수 실행 환경이 아닌 함수 정의 환경으로 참조하는 특성입니다. 
위의 좌측 코드를 봤을 때 함수 f1에서 함수 f2를 호출하면 실행이 됩니다. 함수 f1, f2 모두 전역에서 생성된 함수여서 서로를 참조할 수 있습니다. 하지만 우측 코드처럼 함수 f1 안에서 함수 f2를 호출했다고 해서 f2가 f1 안에 들어온 것처럼 f1의 내부 변수 a를 참조할 수 없습니다. 렉시컬 특성으로 인해서 함수 f2가 실행될 때가 아닌 정의 될 때의 환경을 보기 때문에 참조하는 a라는 변수를 찾을 수 없습니다. 그래서 위와 같은 실행결과가 나옵니다. 

[예시코드](https://jsfiddle.net/ywwLtko7/)   
[예시코드](https://jsfiddle.net/5w0bct25/)

![scope](/assets/images/scope_img05.png)
![scope](/assets/images/scope_img06.png)

#### Reference
[https://msdn.microsoft.com/ko-kr/library/bzt2dkta(v=vs.94).aspx](https://msdn.microsoft.com/ko-kr/library/bzt2dkta(v=vs.94).aspx)
[http://poiemaweb.com/js-scope](http://poiemaweb.com/js-scope)
[http://www.nextree.co.kr/p7363/](http://www.nextree.co.kr/p7363/)
[http://meetup.toast.com/posts/86](http://meetup.toast.com/posts/86)
[http://hochulshin.com/everything-about-javascript-scope/](http://hochulshin.com/everything-about-javascript-scope/)



