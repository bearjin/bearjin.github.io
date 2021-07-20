---
title: "Position 속성"
categories:
  - CSS
tags:
  - css
  - position
  - study
---

## position 의 이해 및 활용
css 에서 position 속성은 엘리먼트들의 위치를 지정해주는 역활을 하는 중요한 속성입니다. position에는 static, relative, absolute, fixed  라는 값을 가집니다. 

### static
먼저 static 은 position 속성의 기본값으로 offset (top, right, bottom, left) 값에 영향을 받지 않고 정적으로 위치하게 되어 생성된 위치를 고수합니다.

### relative
relative는 상대적인 위치를 나타내며 자신의 생성된 위치에서 offset 값을 통해 이동이 가능합니다. 부모에 위치값에 영향을 받지 않고 offset 값만을 따릅니다. 

### absolute
absolute는 relative와 마찬가지로 offset 값을 통해 이동이 가능하지만 자신의 원래 위치와는 상관없이 위치를 지정할 수 있습니다.   
가장 가까운 상위 요소를 기준( static을 제외한 )으로 위치를 결정하게 되고 상위 요소가 없으면 위치는 html을 기준으로 위치를 잡게 됩니다.

### fixed
fixed는 브라우저 화면에서의 고정적인 위치를 지정해주는 값입니다. 화면이 변하더라도 항상 화면상에 같은 위치에 고정되어 위치를 지정 할 수 있으며 다른 요소들의 위치값에 영향을 받지 않습니다.

[position sample 링크](https://jsfiddle.net/a2L2cmhp/)