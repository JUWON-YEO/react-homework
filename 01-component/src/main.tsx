//@ts-nocheck
import React, { useEffect, useRef } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

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

//렌더링 할 컴포넌트
function SearchInputList() {
  return (
    <fragment>
      <SearchInput status="focusOut" />
      <SearchInput status="focusIn" />
    </fragment>
  );
}

//검색 컴포넌트를 렌더링 할 DOM 요소
const container = document.getElementById("react-app");

//DOM 요소를 찾은 후 검색 컴포넌트 렌더링
if (container) {
  createRoot(container).render(<SearchInputList />);
} else {
  console.warn('문서에 "#react-app" 요소가 존재하지 않습니다.');
}
