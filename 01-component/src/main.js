import React, { useEffect } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";
function SearchInput(_a) {
    var _b = _a.status, status = _b === void 0 ? "focusOut" : _b, autoFocus = _a.autoFocus;
    useEffect(function () {
        var input = document.getElementById("autoFocus");
        input.focus();
    }, []);
    var autoFocus = "";
    switch (status) {
        default:
        case "focusOut":
            break;
        case "focusIn":
            autoFocus = "autoFocus";
            break;
    }
    return (React.createElement("div", { class: "search-input" },
        React.createElement("input", { className: "SearchInput", id: "searchText", placeholder: "\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694", id: autoFocus }),
        React.createElement("label", { for: "searchText", class: "sr-only" }, "\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"),
        React.createElement("button", { type: "button", class: "search-button" },
            React.createElement("img", { src: "/search.svg", alt: "" }))));
}
function SearchInputList() {
    return (React.createElement("fragment", null,
        React.createElement(SearchInput, { status: "focusOut" }),
        React.createElement(SearchInput, { status: "focusIn" })));
}
var container = document.getElementById("react-app");
if (container) {
    createRoot(container).render(React.createElement(SearchInputList, null));
}
else {
    console.warn('문서에 "#react-app" 요소가 존재하지 않습니다.');
}
