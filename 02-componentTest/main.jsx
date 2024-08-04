//@ts-nocheck
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SearchList from "@/components/SearchList";

//검색 컴포넌트를 렌더링 할 DOM 요소
const container = document.getElementById("react-app");

//DOM 요소를 찾은 후 검색 컴포넌트 렌더링
if (container) {
  createRoot(container).render(
    <StrictMode>
      <SearchList />
    </StrictMode>
  );
} else {
  console.warn('문서에 "#react-app" 요소가 존재하지 않습니다.');
}
