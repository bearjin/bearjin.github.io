---
title: "브라우저에서 웹페이지가 나타나는 과정"
categories:
  - HTML
tags:
  - html
  - browser
  - rendering engine
  - study
---

요즘 일반적인 스크린에서는 1초에 60번(60fps)의 그림을 그린다고 합니다.  이 때문에 브라우저가 60fps 을 유지해야 웹페이지가 버벅임 없이 매끄럽게 보일 수 있고,  60fps 을 유지하기 위해선 **최적화(Optimization)**가 필요합니다. 이러한 최적화를 하기 위해 먼저 브라우저가 어떤 과정을 거쳐 화면에 나타나는지 부터 알아보려고 합니다.   

브라우저가 하나의 화면을 나타내는 과정을 **중요 렌더링 경로(Critical Rendering Path)**라고 부릅니다.    

우리가 일상적으로 주소창에 url을 입력하고, 엔터키를 누르면 브라우저는 해당 서버에 요청을 보내게 됩니다. 서버에서는 요청을 받고 응답으로 HTML 데이터를 보냅니다. 이 HTML 데이터를 실제 우리가 보는 화면으로 그리기까지의 과정이 바로 중요 렌더링 경로이며 이 과정의 각 단계가 최대한 효율적으로 이루어지도록 만드는 것을 최적화라고 부릅니다. 

중요 렌더링 경로의 과정에는 총 7가지의 과정이 있습니다.

1. 서버에서 응답으로 받은 HTML 데이터를 파싱한다.
2. HTML을 파싱한 결과로 DOM Tree를 만든다.
3. 파싱하는 중 CSS 파일 링크를 만나면 CSS 파일을 요청해서 받아온다. 
4. CSS 파일을 읽어서 CSSOM(CSS Object Model)을 만든다.
5. DOM Tree와 CSSOM이 모두 만들어지면 이 둘을 사용해 Render Tree를 만든다.
6. Render Tree에 있는 각각의 노드들이 화면의 어디에 어떻게 위치할 지를 계산하는 Layout과정을 거쳐서,
7. 화면에 실제 픽셀을 Paint한다.

각 과정별로 자세하게 살펴 보겠습니다.

## 1. 서버에서 응답으로 받은 HTML 데이터를 파싱한다.

<p align="center">
  <img src="https://bearjin.com/assets/images/browser_rendering_img01.png" alt="브라우저 렌더링 관련 이미지">
</p>

주소창에 url을 입력하고 엔터키를 치면 브라우저는 해당 서버에 요청을 보내고 요청에 대한 응답으로 HTML문서를 받아오게 됩니다. 
이걸 하나하나 파싱(Parsing)하기 시작하면서 브라우저가 데이터를 화면에 그리는 과정이 시작됩니다.
- 미디어 파일을 만나면 추가로 요청을 보내서 받아옵니다.
- script 파일을 만나면 해당 파일을 받아와서 실행할 때까지 파싱이 멈춥니다. script파일이 크면 클수록 그만큼 렌더링 시간은 길어지기 때문에 script 파일을 body 태그 제일 하단에 두는 방법을 통해 파싱이 멈추는것을 방지하고 있습니다.
- script 파일을 head에 두어야 되는 경우는 async, defer 속성을 활용합니다. 🔗[참고 링크](https://bearjin.com/html/script-async-defer/)

## 2. HTML을 파싱한 결과로 DOM Tree를 만든다.

<p align="center">
  <img src="https://bearjin.com/assets/images/browser_rendering_img02.png" alt="브라우저 렌더링 관련 이미지">
  <img src="https://bearjin.com/assets/images/browser_rendering_img03.jpg" alt="브라우저 렌더링 관련 이미지">
</p>

브라우저는 읽어들인 HTML 바이트 데이터를, 해당 파일에 지정된 인코딩(ex: UTF-8)에 따라 문자열로 바꾸게 됩니다. 바꾼 문자열을 다시 읽어서, HTML 표준에 따라 문자열을 토큰(Token)으로 변환합니다.    

이미지에서 보여지는 것처럼 이 과정에서 <code><html></code>은 StartTag: html로 <code></html></code> 은 EndTag: html 이 들어왔으면 html 노드를 만들고 EndTag: html 로 변환됩니다.    

이렇게 만들어진 토큰들을 다시 노드로 바꾸는 과정을 거칩니다. StartTag : html이 들어왔으면 html 노드를 만들고 EndTag : html 을 만나기 전까지 들어오는 토큰들은 html 노드의 자식 노드로 넣는 식으로 변환이 이루어지기 때문에, 과정이 끝나면 Tree 모양의 DOM(Document Object Model)이 완성되게 됩니다.

## 3,4. CSS 파일을 요청해서 받아 CSSOM을 만든다.

<p align="center">
  <img src="https://bearjin.com/assets/images/browser_rendering_img04.png" alt="브라우저 렌더링 관련 이미지">
</p>

HTML을 파싱하다가 CSS 링크를 만나면, CSS 파일을 요청해서 받아오게 됩니다. 받아온 CSS 파일은 HTML을 파싱한 것과 유사한 과정을 거쳐서 역시 Tree형태의 CSSOM으로 만들어집니다. CSS 파싱은 CSS 특성상 자식 노드들이 부모 노드의 특성을 계속해서 이어받는(cascading) 규칙이 추가된다는 것을 빼고는 HTML파싱과 동일하게 이루어집니다. 이렇게 CSSOM을 구성하는 것이 끝나야, 비로소 이후의 Rendering 과정을 시작할 수 있습니다. (그래서 CSS는 rendering의 blocking 요소라고 합니다.)

## 5. DOM(Content) + CSSOM(Style) = Render Tree

<p align="center">
  <img src="https://bearjin.com/assets/images/browser_rendering_img05.png" alt="브라우저 렌더링 관련 이미지">
</p>

CSSOM을 모두 만들었으면, DOM과 CSSOM을 합쳐서 Render Tree를 만듭니다. Render Tree는 DOM Tree에 있는 것들 중에서 화면에 실제로 '보이는' 친구들만으로 이루어 집니다. 만약 CSS에서 display:none; 으로 설정하였다면, 그 노드(와 그 자식 노드 전부)는 Render Tree에 추가 되지 않습니다.    

그래서 아래 이미지의 Render Tree에는 head 태그와, display속성이 none인 p 태그 하위의 span 태그가 사라진 것을 확인 할 수 있습니다. 

<p align="center">
  <img src="https://bearjin.com/assets/images/browser_rendering_img06.png" alt="브라우저 렌더링 관련 이미지">
</p>

Render Tree에는 여러 가지가 포함되어 있습니다. Render Object Tree, Render Layer Tree 등등을 합쳐서 화면을 그리는데 필요한 모든 정보를 가지고 있는 Render Tree가 완성 됩니다.  

- DOM 트리 : HTML 웹 페이지를 파싱한 트리로, HTML 문서의 각 요소를 쉽게 처리(추가, 삭제 등) 하기 위하여 브라우저의 엔진이 사용하는 트리다.
- Render Object : DOM 트리로부터 만들어지는 트리로, DOM 트리의 노드 가운데 실제 화면에 표현 되는 노드만으로 구성된 트리다.
- Render Layer : 브라우저의 엔진이 하드웨어 가속 등을 처리하기 위해 사용하는 논리적인 레이어로, 각 Render Object의 속성에 따라 Render Layer에 할당된다.
- Graphics Layer : 하드웨어 가속 처리를 위한 물리적인 레이어로, 레이어별 Render Object를 Graphics Layer 단위로 렌더링한 뒤 최종적으로 GPU 를 통해 합성된다. 

<p align="center">
  <img src="https://bearjin.com/assets/images/browser_rendering_img07.png" alt="브라우저 렌더링 관련 이미지">
</p>

Render Object Tree 가 말했듯이 DOM Tree의 노드 중에서 화면에 보이는 것들만으로 이루어지는 트리입니다. block, inline, text, table 같은 요소들이 Render Object가 됩니다.  DOM Tree에서 div 태그는 Render Object Tree 에 Block element로, span 태그는 Inline element로 옮겨집니다.

Render Object의 속성에 따라 필요한 경우 Render Layer가 만들어 집니다. 그리고 이 Render Layer 중에서 GPU 에서 처리되는 부분이 있으면 다시 Graphic Layer로 분리 됩니다. 대표적으로 다음과 같은 속성들이 쓰였을 때 Graphic Layer가 만들어지게 됩니다. (이 과정에서 '하드웨어 가속'을 사용하여  성능을 좋게 할 수 있습니다.)

- CSS 3D Transform(translate3d, preserve-3d 등등) 이나 perspective 속성이 적용된 경우
- <code><video></code> 또는 <code><canvas></code> 요소
- CSS3 애니메이션 함수나 CSS 필터 함수를 사용하는 경우
- 자식 요소가 레이어로 구성된 경우
- z-index 값이 낮은 형제 요소가 레이어로 구성된 경우

만약 이러한 속성들이 없이 div 태그 하나에 width 속성만 있다고 한다면 레이어는 기본으로 만들어지는 하나만 사용하게 됩니다.

## 6. Layout(reflow) : 요소들의 위치를 계산하는 과정

<p align="center">
  <img src="https://bearjin.com/assets/images/browser_rendering_img08.png" alt="브라우저 렌더링 관련 이미지">
</p>

화면에 보이는 노드들만을 가지고 있는 Render Tree가 다 만들어지면, 이제 Render Tree 에 있는 각각의 노드들이 화면의 어디에 위치할 지를 계산하는 Layout 과정을 거칩니다. CSSOM에 가져온 스타일 정보들로 이미 요소들이 어떻게 생겨야 한다는 정보를 모두 알고 있지만, 현재 보이는 뷰포트를 기준으로 실제 어느 위치에 있어야 하는지는 모르기 때문에 이 과정에서 position, width, height, CSS box model 등을 계산하여 크기와 위치에 관련된 부분들이 계산됩니다.

만약 width의 속성값이 퍼센트(%)와 같은 단위로 되어있다면 브라우저가 리사이즈 될때마다 요소는 변경되지 않고 크기가 변경되기 때문에 Render Tree는 그대로인 상태에서 Layout 과정을 다시 거쳐 계산하고 수정하게 됩니다. 이렇게 화면에 보이는 요소 각각의 위치를 정해주는 과정을 Webkit 에서는 Layout, Gecko 에서는 reflow로 부르고 있습니다.

## 7. Paint : 화면에 실제 픽셀을 그려내는 과정

<p align="center">
  <img src="https://bearjin.com/assets/images/browser_rendering_img09.png" alt="브라우저 렌더링 관련 이미지">
</p>

마지막 으로 Render Tree의 각 노드들을 실제로 화면에 그리게 됩니다. visibility, background-color 같이 정말로 눈에 보이는 픽셀들이 여기에서 그려집니다. 만약 Render Layer 가 2개 이상이라면 각각의  Layer를 paint 한 뒤 하나의 이미지로  Composite 하는 과정을 추가로 거친 뒤에 실제로 화면에 그려지게 됩니다.


### Reference
🔗[구글 주요 렌더링 경로](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/?hl=ko)    
🔗[네이버 개발자 블로그](https://d2.naver.com/helloworld/59361)    
🔗[네이버 개발자 블로그](https://d2.naver.com/helloworld/2061385)