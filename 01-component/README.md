## 1주차 react 실습 과제

---

### 과제 - 리액트를 사용하여 아토믹 컴포넌트 구현

바닐라 프로젝트 결과물 중 검색창 컴포넌트를 리액트로 구현해보기로 했다!
&nbsp;
&nbsp;

### 1. 피그마를 이용하여 검색창 컴포넌트 재구현

![피그마 컴포넌트](/public/figma-search-input.jpg)

### 2. 검색 컴포넌트 생성하기

```
//검색 컴포넌트 생성만들기
function SearchInput({ status = "focusOut", autoFocus }) {
  //마운트 이후 실행부 autoFocus 아이디를 찾아서 focus 시킨다.
  useEffect(() => {
    const input = document.getElementById("autoFocus");
    input.focus();
  }, []);

  let autoFocus = "";

  switch (status) {
    default:
    case "focusOut":
      break;

    case "focusIn":
      autoFocus = "autoFocus";
      break;
  }

  return (
    <div class="search-input">
      <input className="SearchInput" id="searchText" placeholder="검색어를 입력해주세요" id={autoFocus} />
      <label for="searchText" class="sr-only">
        검색어를 입력해주세요
      </label>
      <button type="button" class="search-button">
        <img src="/search.svg" alt="" />
      </button>
    </div>
  );
}
```

### 3. 검색 컴포넌트 렌더링 코드 작성

```
//렌더링 할 컴포넌트
function SearchInputList() {
  return (
    <fragment>
      <SearchInput status="focusOut" />
      <SearchInput status="focusIn" />
    </fragment>
  );
}
```

### 4. 검색 컴포넌트 렌더링 실행

```
//검색 컴포넌트를 렌더링 할 DOM 요소
const container = document.getElementById("react-app");

//DOM 요소를 찾은 후 검색 컴포넌트 렌더링
if (container) {
  createRoot(container).render(<SearchInputList />);
} else {
  console.warn('문서에 "#react-app" 요소가 존재하지 않습니다.');
}

```

### 5.결과물

![검색 컴포넌트](/public/01-component.jpg)

### 6. 과제 후기

- 과제 초반
  피그마로 컴포넌트 구현조차 익숙하지 않았지만 야무쌤과의 수업을 통해 어느정도 감이 온 상태에서 검색컴포넌트를 만들어보았다. 기존 바닐라프로젝트에서는 검색컴포넌트에 fouse 스타일이 적용되어있지 않지만 이번 과제에서 fouse 상태에 달라지만 스타일의 검색 컴포넌트를 만들어보고싶었다.피그마 컴포넌트 그대로 `focus-in` 상태와 `focus-out` 상태 2가지를 화면에 보여줄 지, 하나로 focus상태에 따른 변화를 보여줄지도 고민했다.(실제로 사용 할 컴포넌트라면 fouse상태의 스타일은 css로만 작업하면 되기 때문에 2가지의 상태를 만들필요는 없겠지만...)

- 과제 중반
  야무쌤과의 수업에서 어떻게 컴포넌트가 생성되는지 배웠지만 아직도 나에게 리액트는 너무 낯설었다. 그래서 기존 코드를 많이 참고하게되었다.. 2가지 상태의 컴포넌트를 만들고 싶었지만 컴포넌트 렌더링 이후 `status`가 `focusIn`인 컴포넌트에만 `autofocus`를 적용시키고 싶었다.. 구글링을 통해 `useEffect`, `useRef` hook을 찾아 사용해보았다. 정확한 원리는 아직 더 배워야겠지만 이런 기능을 하는 리액트 함수가 있다는걸 알게되었다!

- 과제 마무리
  아직 익숙하지 않은 컴포넌트이지만 과제 실습을 통해 리액트에서 어떻게 컴포넌트가 만들어지는지 아주 살짝 알게된 것 같다. jsx 문법이나 tsx는 아직 잘 모르겠다.. 더 알아가보자!
