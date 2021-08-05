---
title: "transform 활용"
categories:
  - CSS
tags:
  - css
  - transform
  - study
---
transform은 엘리먼트의 크기, 위치, 모양을 변경하는 속성입니다. transform은 2D transform, 3D transfrom으로 나눠집니다.

| 2D transform | 3D transform |
| ---------- |:-------------:|
| matrix     | matrix3d      |
| translate  | translate3d   |
| translateX | translateZ    |
| translateY | scale3d       |
| scale      | scaleZ        |
| scaleX     | rotate3d      |
| scaleY     | rotateX       |
| rotate     | rotateY       |
| skew       | rotateZ       |
| skewX      | perspective   |
| skewY      |  |

```
transform 속성의 속성값은 
transform : scale(2, 3) 과 같은 형태로 사용할 수 있습니다.

transform : scale(2, 3) == transform : scaleX(2), transform : scaleY(3) 와 같은 결과를 나타냅니다.
transform : scale(2) 만 입력했을때는 transform : scale(2, 0)을 입력한 것과 같습니다.

또한 transform : scale(2) rotate(360deg) 와 같이 여러 속성값을 같이 사용할 수 있습니다.
```
translate 속성값은 X,Y,Z 축 값에 따라 콘텐츠의 위치를 변경 시켜주는 효과를 나타냅니다.   
scale 속성값은 X,Y,Z 축 값에 따라 콘텐츠의 크기를 변경 시켜주는 효과를 나타냅니다.   
rotate 속성값은 X,Y,Z 축 값에 따라 회전을 시켜주는 효과를 나타냅니다.   
skew 속성값은 X,Y 축 값에 따라 기울기 효과를 나타냅니다.   
matrix 속성값은 transform 이 가진 모든 효과들을 한번에 나타낼 수 있는 값입니다. 여러 효과를 한번에 사용할 때 matrix 속성값을 사용해 코드의 양을 줄일 수 있습니다. 하지만 코드를 입력하는 단위나 수치가 다르기 때문에 코드입력에 주의를 해야 합니다. 

🔗[codepen transform 예제](https://codepen.io/vineethtrv/pen/XKKEgM)