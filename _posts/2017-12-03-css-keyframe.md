---
title: "애니메이션 효과 만들기"
categories:
  - CSS
tags:
  - css
  - transform
  - study
---

css3에서는 @keyframes을 통해 다양한 애니메이션 효과들을 만들 수 있습니다.   
@keyframes 을 통해 애니메이션 효과를 만들기 위해서는 from(0%) 과 to(100%) 값이 반드시 필요합니다.   
또한 퍼센트를 통해 애니메이션 중간중간 다양한 효과들을 나타낼 수 있습니다. 예를 들어

```css
@keyframes move{
  0%{top:0; left:0;}
  25%{top:50px;}
  50%{top:100px; left:100px;}
  75%{top:150px;}
  100%{top:200px; left:200px;}
}
```

위의 코드에서 처럼 각각의 퍼센트마다 css를 통해 다양한 효과들을 만들어 낼 수 있습니다. 0%의 처음(top:0 , left:0) 위치에서 시작해 각각의 단계를 거쳐 100% 의 마지막 값(top:200px, left:200px)으로 끝나게 됩니다. @keyframes 에서 !import 속성은 무시됩니다.

@keyframes 를 통해 만든 애니메이션을 사용하기 위해서는 animation 속성이 필요합니다.

animation 속성의 하위 속성에는

**animation-name** : @keyframes를 통해 만든 애니메이션들 중 사용할 애니메이션의 이름을 지정합니다.

**animation-delay** : 엘리먼트가 로드되고 언제 애니메이션이 시작될지 지정합니다.

**animation-direction** : 애니메이션이 종료되고 다시 처음부터 시작할지 역방향으로 진행할지 지정합니다. 
- normal : 한 사이클이 끝나도 같은 방향으로 움직입니다.
- alternate : 한 사이클이 끝나면 역방향으로 움직입니다.
- reverse : 처음부터 역방향으로 움직입니다.
- alternate-reverse : 처음부터 역방향으로 움직이고, 한 사이클이 끝나면 정상 방향으로 움직입니다. alternate의 반대라고 생각하면 됩니다.
- animation-duration : 한 싸이클의 애니메이션이 얼마에 걸쳐 일어날지 지정합니다.

**animation-iteration-count** : 애니메이션의 반복 횟수를 지정합니다. infinite로 지정하면 무한 반복 됩니다.

**animation-play-state** : 애니메이션을 멈추거나 다시 시작할 수 있습니다.
- paused : 실행 중인 애니메이션을 일시 중지합니다. 현재값이 계속 유지 됩니다.
- running : 일시 중지된 애니메이션을 계속 실행합니다. 현재 값에서부터 다시 시작됩니다.

**animation-timing-function** : 중간 상태들의 전환을 어떤 시간가격으로 진행할지 지정합니다.
- ease
- ease-in
- ease-out
- ease-in-out
- linear
- step-start
- step-end

**animation-fill-mode** : 애니메이션이 시작되기 전이나 끝나고 난 후 어떤 값이 적요될지 지정합니다.
- forwards :  애니메이션이 완료된 후에도 마지막 키 프레임에 정의된 최종 속성 값이 유지됩니다.
- backwards : animation-delay로 정의된 기간 중 애니메이션을 표시하기 전에 첫 번째 키 프레임에 정의된 시작 속성값이 적용됩니다.
- both : 위 둘 효과가 모두 적용됩니다.
- none : 기본 동작이 변경되지 않습니다.

이러한 속성들을 축약해서 작성할 수 있습니다. 작성 순서는 

animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction 순으로 축약하여 작성 할 수 있습니다.

### Reference
🔗[애니메이션1](https://jsfiddle.net/n9d0w8pb/1/)    
🔗[박스 이동 애니메이션](https://jsfiddle.net/3pmd3h29/1/)    
🔗[사각형에서 원 모양 변경 및 회전](https://jsfiddle.net/23b9b7bx/)    
🔗[애니메이션2](https://jsfiddle.net/bearjin/L3wbekdy/4/)