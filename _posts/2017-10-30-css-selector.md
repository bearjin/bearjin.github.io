---
title: "가상 클래스 와 가상 요소 선택자의 차이"
categories:
  - CSS
tags:
  - css
  - selector
  - study
---

가상 선택자에는 크게 가상 클래스 선택자 와 가상 요소 선택자로 나눌 수 있습니다.   
HTML에 이미 존재하는 요소를 선택하면 "가상 클래스" 선택자.   
HTML에 존재하지 않지만 가상의 요소를 생성하여 선택하는 것은 "가상 요소" 선택자.   
참고: 가상 클래스는 가상 요소보다 구체성이 높습니다.  

## 가상 클래스 선택자 에는   
```css
 : active
​사용자에 의해 활성화되어있는 요소를 나타냅니다. 마우스를 사용하는 경우에는 일반적으로 마우스 버튼을 누르는 순간부터 떼는 시점까지를 의미합니다. 일반적으로 <a>와 <button>에 사용되지만, 다른 요소에도 사용될 수 있습니다.   
:active 가상 클래스로 정의된 스타일은 적어도 하나의 동등한 특수성을 갖는 일련의 후속 링크 가상 클래스( :link, :hover, :visited)에 의해 재정의 됩니다. 링크를 적절히 디자인하기 위해서 LVHA-순서(:link - :visited - :hover - :active)에 따라서 :active 규칙을 다른 모든 링크 규칙들보다 뒤에 놓습니다. 

 : checked
radio (<input type="radio">), checkbox (<input type="checkbox">), or option (<option> in a <select>) 가 체크 되었을때의 선택에 대한 효과를 변경하는데 사용될 수 있습니다. 

 : default
<button>,  <input type="checkbox">, <input type="radio">및  <option> 의 기본값에 대한 효과를 변경하는데 사용될 수 있습니다. 

 : dir()
텍스트의 방향성을 나타내는 매개변수를 사용하여 텍스트의 방향을 설정해 주는데 사용 됩니다. 

:dir()의 매개변수로는 ltr : 왼쪽에서 오른쪽 요소를 대상으로 지정합니다. rtl : 오른쪽에서 왼쪽으로 요소를 대상으로 지정합니다. 

 : disabled
​비활성화 된 요소를 나타냅니다. 요소를 활성화(선택, 클릭 또는 입력)하거나 포커스를 받을 수 없으면 비활성화 됩니다. 이 속성을 지정하면 요소가 화면에 표시되기는 하지만 사용자가 입력하거나 수정할 수 없습니다.

 : empty
​자식이 없는 모든 요소를 나타내며 텍스트 공백 또한 포함 됩니다. 주석 또는 처리 명령은 요소가 비어있는 것으로 간주되는지 여부에 영향을주지 않습니다.

 : enabled
​모든 활성화된 요소를 나타냅니다. 요소는 활성화(선택, 클릭, 입력 등)되거나 포커스를 받을 수 있는 경우 활성화 됩니다. 이 셀렉터는 대부분 폼요소에서 사용 됩니다.

 : first-child
부모의 첫번째 자식 요소를 선택 하는 선택자 입니다.

 : first-of-type
같은 유형의 첫번째 형제를 선택하는 선택자 입니다.

 : focus
포커스가 있는 요소를 선택하는데 사용됩니다. 일반적으로 사용자가 요소를 클릭하거나 탭키를 사용하여 해당 부분이 선택 되어 졌을때 사용 되는 셀렉터 입니다.

 : hover
요소 위로 마우스를 가져갈 때 요소를 선택하는 데 사용됩니다. 링크뿐만 아니라 모든 요소에서 사용할 수 있습니다.

 : in-range
지정된 범위 내에있는 값을 가진 모든 요소를 선택합니다. 참고로 :in-range 셀렉터는 범위 제한이 있는 요소(예 : 최소 및 최대 속성의 입력 요소)에서만 작동합니다.

 : invalid
요소의 설정에 따라 유효성을 검사하지 않는 값으로 양식 요소를 선택합니다.

 : lang()
lang 속성이 지정된 값을 가진 요소를 선택하는데 사용됩니다. ​참고로 lang 속성 값은 lang = "fr"(프랑스어) 또는 lang = "fr-ca"(캐나다 프랑스어)와 같이 결합 된 두 개의 언어 코드와 같이 대개 2 자 언어 코드입니다.

 : last-child
부모의 마지막 자식인 요소를 선택합니다.

 : last-of-type
특정 유형의 요소 중 마지막 자식인 요소를 선택합니다.

 : link
​방문하지 않은 링크를 선택하는데 사용됩니다. 참고로 이미 방문한 링크의 스타일은 지정하지 않습니다.

 : not()
지정된 요소 셀렉터가 아닌 모든 요소를 선택합니다.

 : nth-child()
부모의 유형에 관계없이 n번째 자식인 모든 요소를 찾습니다. n은 숫자, 키워드 또는 수식 일 수 있습니다.
:nth-child(odd) : 홀수 , :nth-child(even) : 짝수 

 : nth-last-child()
마지막 자식으로부터 세어, 그 부모의 형식에 관계 없이 n번째 자식 인 모든 요소를 찾습니다. n은 숫자, 키워드 또는 수식 일 수 있습니다.

 : nth-last-of-type()
특정 유형의 해당 상위 항목에서 마지막 하위 항목부터 계산 하여 n 번째 하위 항목 인 모든 요소를 찾습니다. n 은 숫자, 키워드 또는 수식 일 수 있습니다.

 : nth-of-type()
특정 유형의 부모 중 n 번째 자식 인 모든 요소를 찾습니다. n 은 숫자, 키워드 또는 수식 일 수 있습니다.

 : only-child
부모의 유일한 자식 인 모든 요소와 일치합니다.

 : only-of-type
해당 유형의 유일한 하위 요소 인 상위 요소의 모든 요소를 ​​찾습니다.

 : optional
선택적인 양식 요소를 선택합니다. 필수 속성이없는 양식 요소는 선택적으로 정의됩니다. 참고로 양식 요소 input, select 및 textarea에만 적용됩니다.

 : out-of-range
지정된 범위를 벗어나는 값을 가진 모든 요소를 ​​선택합니다. 참고로 범위 제한이있는 요소 (예 : 최소 및 최대 속성의 입력 요소)에서만 작동합니다.

 : read-only
"readonly"인 요소를 선택합니다. "readonly"속성이있는 양식 요소는 "readonly"으로 정의됩니다. 참고로 현재 대부분의 브라우저에서 : read--only 셀렉터는 input 및 textarea 요소에만 적용되지만 "readonly"인 모든 요소에 적용해야합니다.

 : read-write
"읽기 가능"및 "쓰기 가능"인 양식 요소를 선택합니다. "readonly"속성이없고 "disabled"속성이없는 양식 요소는 "읽기"및 "쓰기 가능"으로 정의됩니다. 참고로 현재 대부분의 브라우저에서 : reda - write 셀렉터는 input 및 textarea 요소에만 적용되며 "readonly"속성은 요소가 비활성화되었는지 여부에 관계없이 존재하지 않습니다.

 : required
필요한 양식 요소를 선택합니다. 필수 속성이있는 양식 요소는 필수로 정의됩니다. 참고로 :required 셀렉터는 입력 요소, 선택 및 텍스트 영역과 같은 양식 요소에만 적용됩니다.

 : root
문서의 루트 요소와 일치합니다. HTML에서 루트 요소는 항상 html 요소입니다.

 : target
​앵커 이름 뒤에 #가 붙은 URL은 문서 내의 특정 요소에 연결됩니다. 링크 대상 요소는 대상 요소입니다.
: target selector는 현재 활성화 된 target 요소의 스타일을 지정하는 데 사용할 수 있습니다.

 : valid
요소의 설정에 따라 유효성을 검사하는 값을 가진 양식 요소를 선택합니다. 참고로 최소 및 최대 속성을 가진 입력 요소, 유효한 전자 메일이있는 전자 메일 필드 또는 숫자 값이있는 숫자 필드 등과 같이 제한이있는 양식 요소에서만 작동합니다.

 : visited
방문한 링크를 선택하는 데 사용됩니다. 브라우저는 보안 문제로 인해 방문한 링크에 대해 설정할 수있는 스타일을 제한합니다. 
- color
- background
- border-color ( and border-color for separate sides )
- outline color
- column-rule-color
- the color parts of fill and stroke

```

## 가상 요소 선택자에는
```css
 :: after
선택된 요소의 뒤에 내용을 생성 합니다. 이는 주로 본문에 추가적인 내용을 덧붙이는 경우에 많이 쓰이며 content 속성을 통해 내용을 삽입할 수 있습니다. 이 요소는 인라인을 기본값으로 가지고 있습니다.

 :: before
선택된 요소의 앞에 내용을 생성 합니다. ::after 와 같은 특징을 가지고 있습니다.

 :: first-letter
지정된 셀렉터의 첫 번째 문자에 스타일을 추가하는 데 사용됩니다. 
참고로 다음 속성들은 ::first-letter와 함께 사용할 수 있습니다.
- float
- clear
- margin
- padding
- border
- background
- font
- color
- text-decoration
- text-transform
- vertical-align( only if float is "none")
- line-height

 :: first-line
지정된 셀렉터의 첫 번째 줄에 스타일을 추가하는 데 사용됩니다.
참고로 다음 속성들은 ::first-line과 함께 사용할 수 있습니다.
- clear
- background
- font
- color
- text-decoration
- text-transform
- vertical-align
- line-height
- word-spacing
- letter-spacing

 :: selection
사용자가 선택한 요소의 부분과 일치합니다. ::selection에는 color, background, cursor, outline.
```