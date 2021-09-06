---
title: "웹 사이트 최적화 방법"
categories:
  - HTML
tags:
  - html
  - Web Optimization
  - study
---

## 1. HTTP 요청 줄이기
브라우저가 웹페이지를 그리는 첫번째 과정으로 주소창에 URL을 입력하고 엔터키를 누르면 서버는 요청을 받고 웹 페이지를 구성하고 있는 HTML, CSS, JavaScript, 이미지 등의 구성 요소들을 보내며 응답합니다. 이러한 구성 요소들을  사용자의 컴퓨터로 가져오는 데는 네트워크 비용이 발생되고, 이 비용이 곧 응답 시간으로 이어집니다.  그러므로 구성요소의 개수를 줄이는 것이 가장 기본적이면서도 중요한 부분중에 하나 입니다.

아래 그림은 쉐보레 메인 페이지와 스파크 세이프티 페이지를 분석한 결과 입니다. 왼쪽은 캐시가 없는 상태일때의 분석 결과이고, 오른쪽은 캐시가 있는 상태일 때 분석한 결과 입니다. 각각의 페이지 마다 구성요소들의 수만큼 HTTP 요청 횟수도 달라지며 이에따라 응답 시간도 차이가 나게 됩니다. 이러한 구성요소들을 어떻게 줄이고 최소화 할 수 있는지에 대한 방법들을 살펴보겠습니다.

<p align="center">
  <img src="https://bearjin.com/assets/images/web-optimization_img01.png" alt="웹 최적화 관련 이미지">
</p>


## 2. CSS 스프라이트(sprite)
1번 항목의 그림에서도 볼 수 있듯이 웹페이지를 구현하면서 많은 이미지들이 사용됩니다. 마크업만으로는 표현에 한계가 있기 때문입니다. 대신 이미지를 많이 사용하면 할수록 HTTP 요청 또한 많아 지게 됩니다. 이미지를 많이 사용하면서도 HTTP 요청을 최소화 하기 위한 방법으로 CSS 스프라이트(sprite) 기법이 있습니다. 

CSS 스프라이트(sprite) 기법은 여러개의 이미지를 하나로 모아 이미지 파일의 갯수를 줄이는 방법 입니다. 여러 이미지를 다운 받아야 했던 것을 한개만 다운 받게 되니 요청횟수도 줄고 응답 시간도 줄어들게 됩니다. 또 여러 이미지를 하나로 모으면 이미지 사이즈가 더 커질 것이라 생각 할 수 있는데 오히려 개별 이미지의 사이즈를 합한 것보다 이미지를 하나로 합친 파일의 용량이 더 작아 용량을 줄이는 효과도 얻을 수 있습니다. 


## 3. 캐시 만료일 설정
캐시 만료일을 설정하는 이유는 웹페이지의 구성 요소인 HTML, CSS, JavaScript, 이미지 등의 파일등을 사용자 컴퓨터의 캐시에 저장해두고 재사용하기 위해서 입니다.

1번 항목에 있는 그림을 보면 저장된 캐시가 없을 때 63개의 구성요소를 다운로드 하고, 저장된 캐시가 있을 경우 24개의 구성요소 만을 다운로드 하는 모습을 보았습니다.

이처럼 사용자의 컴퓨터에 캐시 파일이 저장되어 있을 경우 사용자가 캐시 파일을 지우기 전까지 저장된 파일을 불러와 구성 요소를 다운 받지 않고 응답 시간을 줄이게 됩니다. 

아래 그림을 보면 제 컴퓨터에 저장되어 있는 캐시 파일들 입니다. 만료 날짜가 설정된 파일도 있고 그렇지 않은 파일들도 있는 모습을 보실 수 있습니다. 

모든 구성 요소에 만료 날짜를 설정하는 것이 아니라 만료 날짜 동안 수정되지 않아도 문제가 되지 않을 요소들에게 적용해야 합니다. 만약 만료 날짜 전에 파일을 수정해야 한다면 파일이름을 변경하거나 캐시 데이터를 재 다운로드 받아 수정해야 합니다. 만약 이렇게 하지 않는다면 계속 같은 파일로 인식해 기존의 사용자 컴퓨터에 있는 파일을 로딩해 사용하게 되어 새로운 정보가 웹페이지에 나타나지 않습니다. 

![웹 최적화 관련 이미지](/assets/images/web-optimization_img03.png)


## 4. Gzip 
압축을 통해서 파일 크기를 줄여 응답 시간을 줄일 수 있습니다. 브라우저에서 사용되는 encoding 종류는 Accept-Encoding 이라는 Request Header의 attribute를 통해서 서버쪽에 알려지며 서버쪽에서는 이 Accept-Encoding 의 값을 보고 브라우저에서 decoding이 가능한 압축 파일을 보내게 됩니다.

Gzip은 파일의 압축에 사용되는 응용 소프트웨어 이며 대부분의 브라우저에서 지원되고 있기 때문에 가장 대중적이며 효과적인 압축 방법입니다. Gzip 으로 파일을 압축해 전송하게 되면 평균 70% 정도 파일 크기가 작아지는 효과를 볼 수 있습니다. 모바일 환경과 같이 네트워크 환경이 불안한 상황에서는 더욱 효과적인 기술 입니다.

9번 항목의 JavaScript and CSS Minify 와 같이 사용하면 훨씬 더 많은 용량을 줄일 수 있습니다. 

## 5. HTML 마크업 최적화
HTML은 태그의 중첩을 최소화하여 단순하게 구성한다. 또한 공백, 주석 등을 제거하여 사용한다. 권장하는 DOM 트리의 노드 수는 전체 1500개 미만, 최대 깊이는 32개, 자식 노드를 가지는 부모 노드는 60개 미만이다. 불필요한 마크업 사용으로 인해 DOM 트리가 커지는 것을 막고, HTML 파일 용량이 늘어나지 않도록 해야 한다.


## 6. 상단에 스타일시트를 넣기
문서의 HEAD에 스타일시트를 입력하면 순차적으로 페이지를 로딩하도록 만들어 주어 페이지 로딩 속도를 향상 시킬 수 있습니다.  브라우저는 점진적으로 페이지를 그리는데 렌더 트리를 생성할 때 스타일시트가 반드시 필요합니다. 그리고 파이어폭스나 인터넷 익스플로러는 스타일시트 파일을 모두 다운로드할 때까지 화면을 렌더링 하지 않고 기다립니다. 그래서 스타일시트 파일은 페이지의 제일 위쪽에 위치하는 것을 권장 합니다.  


## 7. 하단에 스크립트를 넣기
스크립트를 하단에 놓아야 하는 가장 큰 이유는 파일을 다운로드해서 실행하기 전까지 브라우저가 DOM 파싱도 중지하고 아무것도 렌더링하지 않기 때문입니다. 이로 인해 이미 서버 통신을 완료하고 필요한 구성 요소를 모두 브라우저에 가져왔음에도 자바스크립트를 수행하느라 렌더링이 멈추게 됩니다. 이때 사용자에게는 마치 화면이 멈춘 것처럼 보여 체감 속도가 느려지게 됩니다. 


## 8. JavaScript and CSS 파일을 외부로 분리하기
JavaScript 와 CSS 파일을 문서내에 배치하는것 보다 외부로 분리하여 link, script 태그로 불러 오는 방식을 사용하는 방법으로 응답시간을 줄일 수 있습니다. 브라우저에 의해 캐시에 저장된 JavaScript 와 CSS 파일은 재사용 되어 사용되기 때문입니다. 


## 9. JavaScript and CSS 통합하기
외부로 분리한 파일들을 최대한 통합하여 파일 갯수를 줄이는 것 또한 중요합니다. 아무리 작은 파일이라도 사용자의 컴퓨터로 가져오기 위해서는 요청을 해야하고 요청이 많아지면 응답 시간 또한 늘어나게 되기 때문입니다.   


## 10. JavaScript and CSS Minify(축소) 
JavaScript 와 CSS 작성 시 불필요한 선언을 하지 않는 것 역시 파일의 용량을 줄이고, 렌더링 속도를 빠르게 할 수 있는 방법 중 하나입니다. JavaScript 와 CSS 에서 불필요한 white space를 제거하여 용량을 줄이고 필요한 정보만 한줄에 보내기 때문에 traffic 사이즈가 상당히 줄어들게 됩니다. 

JavaScript 축소하는 툴로 JSMin 과 YUI Compressor가 있습니다. YUI Compressor 는 CSS  축소도 가능 합니다.
CSS 축소하는툴로는 CSS Optimizer, Page Speed, YUI Compressor 등과 같은 툴로 축소 할 수 있습니다. 

툴을 사용하여 축소를 하는것도 나쁜 방법은 아니지만 직접 코드를 줄여가며 좀 더 자연스럽고 깔끔하게 코드를 작성하는 방법을 확인해 보는 것도 좋은 방법이라고 생각합니다.
```css
#Minify{
  display: block;
  float: left;
  width: 300px;
  height: 300px;
}
```
```css
#Minify{display:block;float:left;width:300px;height:300px;}
```

## 11. 간결한 CSS 선택자 사용
스타일을 적용할 때 간결한 CSS 선택자를 사용해 최적화한다. ID 대신 클래스 선택자를 사용하면 중복되는 스타일을 묶어서 처리할 수 있다. 선택자는 최소화여 사용한다. 4개 이상의 선택자를 사용하는것은 성능뿐만 아니라 가독성면에서도 좋지 않다.


## 12. DNS 조회 줄이기
DNS (Domain Name System)는 전화 번호부가 사람들의 이름을 전화 번호로 매핑하는 것처럼 호스트 이름을 IP 주소에 매핑합니다. 브라우저에 www.yahoo.com을 입력하면 브라우저에서 접속 한 DNS 확인자가 해당 서버의 IP 주소를 반환합니다. DNS에는 비용이 발생합니다. 일반적으로 DNS가 주어진 호스트 이름의 IP 주소를 조회하는데 20 - 120ms 가 걸립니다. 브라우저는 DNS 조회가 완료 될때까지 이 호스트 이름에서 아무것도 다운로드 할 수 없습니다.

DNS 조회는 성능향상을 위해 임시저장(cache) 됩니다. 이 캐시는 사용자의 ISP 또는 LAN (Local Area Network)이 관리하는 특수 캐시 서버에서 발생할 수 있지만 개별 사용자의 컴퓨터에서 발생하는 캐시도 있습니다. DNS 정보는 운영 체제의 DNS 캐시 (Microsoft Windows의 "DNS 클라이언트 서비스")에 남아 있습니다. 대부분의 브라우저에는 운영 체제의 캐시와 별도로 고유한 캐시가 있습니다. 브라우저가 자체 캐시에 DNS 레코드를 보관하는 한 운영 체제가 레코드 요청을 방해하지 않습니다.

Internet Explorer는 기본적으로 DnsCacheTimeout레지스트리 설정에 지정된대로 DNS 조회를 30분 동안 캐시합니다. Firefox는 network.dnsCacheExpiration구성 설정에 의해 제어되는 DNS 조회를 1분 동안 캐시합니다. (Fasterfox가 이것을 1시간으로 변경합니다.)

클라이언트의 DNS 캐시가 비어 있으면 (브라우저와 운영 체제 모두에 대해) DNS 조회 수는 웹 페이지의 고유한 호스트 이름 수와 같습니다. 여기에는 페이지의 URL, 이미지, 스크립트 파일, 스타일시트, 플래시 객체 등에 사용된 호스트 이름이 포함됩니다. 고유한 호스트 이름의 수를 줄이면 DNS 조회 횟수가 줄어 듭니다.

고유한 호스트 이름의 수를 줄이면 페이지에서 발생하는 병렬 다운로드의 양이 줄어 듭니다. DNS 조회를 피하면 응답 시간이 단축되지만 병렬 다운로드를 줄이면 응답 시간이 늘어날 수 있습니다. 따라서 이 components를 적어도 2개(hostnames이 4개를 넘으면 안됨)로 분리시킬 것을 권장합니다. 이것은 DNS 조회를 줄이는 것과 높은 수준의 parallel downloads를 허용하는 것 사이에 적당한 절충안을 만들어줄 것입니다.


## 13. 중복 Script 제거하기
한페이지에서 동일한 자바스크립트 파일을 두번 포함시키는 것은 성능에 큰 영향을 미칩니다. 이러한 경우가 생각보다 특별한 경우가 아니라고 합니다. 두 가지 중요 요소(스크립트 크기와 개수)는 단일 웹페이지에서 스크립트 복제 가능성을 증가 시킵니다. 그런 일이 생기면, 복제 스크립트는 불필요한 HTTP 요청과 자바스크립트 실행의 생성으로 인해 성능에 영향을 줍니다.  


## 14. 리다이렉트 피하기
리다이렉트는 사용자를 한 URL에서 다른 URL로 다시 보내는 것을 말합니다. HTML 문서 모두 요청하기도 하며, 페이지 안에서 구성요소를 요청할 때도 사용됩니다. 이 밖에도 리다이렉트를 사용하는 이유는 다양하지만 리다이렉트는 페이지를 더 느리게 만듭니다. 

리다이렉트가 완료되고 HTML 문서가 다운로드 될때까지 브라우저 화면에 아무것도 보이지 않습니다. 리다이렉트를 HTML 문서 자체의 다운로드를 지연시키기 때문에 가장 안 좋다고 할 수 있습니다. 


## 15. DOM 접근을 최소화 하기
자바스크립트의 DOM 객체는 자바스크립트의 주요 성능 저하 요인 중 하나 입니다. 따라서 자바스크립트의 성능을 최적화하기 위해서는 DOM 객체 접근을 최소화하도록 코드를 작성해야 합니다. 


## 16. 이벤트 핸들러 설정하기
페이지 안에서 너무 자주 실행되는 DOM tree의 서로 다른 요소들에 붙여진 많은 이벤트 핸들러 때문에 반응 속도가 느려지게 됩니다. 만약 한개의 div 안에 10개의 버튼을 사용한다면 각 버튼마다 이벤트 핸들러를 설정하지 않고 버튼들을 감싸고 있는 div 에 이벤트 핸들러를 사용하는 것이 더 효과적입니다. 


## 17. NO 404s 없애기
404 Not Found 는 HTTP 요청을 하고 페이지가 없다는 응답을 받게 되는 불필요한 요청으로 사용자경험을 느리게 만듭니다. 


## 18. 이미지 최적화 하기
이미지의 개수를 줄이는 스프라이트 기법을 통해 개수를 줄여주는 것도 중요하지만 모든 이미지에 다 적용할수는 없기 때문에 각각의 이미지들을 최적화 해주는 것이 중요합니다. 이미지 최적화를 통해 이미지의 용량이 줄어들고, 사용자의 대역폭에 여유가 생기고, 더 빨리 다운로드하여 화면에 렌더링 할 수 있게 해줍니다.

이미지를 최적화 하기 전 꼭 이미지를 사용해야 하는지에 대한 여부부터 생각해 봐야 합니다. 이미지를 대신하여 CSS 와 웹 글꼴들을 활용하여 대체할수 있다면 대체하여 구현하는 것이 최고의 최적화 방법입니다.

- 벡터 형식 선호 : 벡터 이미지는 해상도 및 배율에 독립적이므로, 여러 기기 및 고해상도 환경에 가장 적합합니다.
- SVG 자산 최소화 및 압축 : 대부분의 그리그 애플리케이션에서 생성하는 XML 마크업에는 불필요한 메타데이터가 들어 있는 경우가 많습니다. 이러한 메타데이터는 제거할 수 있습니다. 서버가 SVG 자산에 대해 GZIP 압축을 적용하도록 구성 되었는지 확인합니다.
- 최적의 래스터 이미지 형식 선택 : 기능적인 요구사항을 확인하고 각각의 특정 자산에 맞는 형식을 선택합니다.
- 래스터 형식에 최적화된 품질 설정 실험 : '품질' 설정을 낮추는 것을 두려워하지 마세요. 결과가 매우 좋은 경우가 많으며 바이트 절감 효과는 상당합니다.
- 불필요한 이미지 메타데이터 제거 : 많은 래스터 이미지에는 위치정보, 카메라 정보 등 자산과 관련하여 불필요한 메타 데이터가 들어 있습니다. 적합한 도구를 사용하여 이러한 메타 데이터를 삭제해 줍니다.
- 배율이 조정된 이미지 제공 : 서버의 이미지 크기를 조정하고 '표시' 크기를 이미지의 '실제' 크기와 최대한 가깝게 합니다. 특히, 큰 이미지의 경우 크기가 조정될 때 가장 큰 오버헤드가 발생하므로 주의 해야 합니다.
- 자동화 : 자동화된 도구 및 인프라에 투자하여 모든 이미지 자산이 항상 최적화 되도록 합니다.


## 19. CSS, 자바스크립트 번들하기
모듈 기반의 개발 방식이 등장하기 이전까지 분리된 여러 개의 리소스 파일을 가져와 사용했었다. 아래 최적화 하기 전 예제를 살펴보면, 5번 이상의 리소스 요청(CSS 파일 2번, 자바스크립트 파일 3번)이 발생한다. 이 경우에는 webpack과 같은 번들러를 사용하여 CSS, 자바스크립트 파일 요청을 줄일 수 있다. 번들러는 여러 개의 모듈 파일을 하나로 묶어서 1개 파일로 생성해주는데 이것을 번들 파일이라고 한다. 이 번들 파일을 사용하여 리소스 요청을 줄일 수 있다. (모듈 설명과 번들 파일 생성 방법은 [FE 가이드](https://ui.toast.com/fe-guide/ko_BUNDLER) 번들러를 참조한다)


### Reference
🔗[구글 이미지 최적화](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization?hl=ko)      
🔗[웹 사이트 최적화 방법](http://12bme.tistory.com/128?category=682905)     
🔗[네이버 개발블로그 웹 사이트 최적화](https://d2.naver.com/helloworld/303083)      
🔗[성능 최적화 :: TOAST UI](https://ui.toast.com/fe-guide/ko_PERFORMANCE)