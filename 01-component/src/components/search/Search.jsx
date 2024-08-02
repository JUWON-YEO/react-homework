import { string } from "prop-types";

SearchInput.propTypes = {
  text: string.isRequired,
  image: string.isRequired,
};

//검색 컴포넌트 생성만들기
function SearchInput({ text, image }) {
  return (
    <>
      <input className="SearchInput" id="searchText" />
      <label htmlFor="searchText">{text}</label>
      <button type="button" className="search-button">
        <img src={`/${image}`} alt="검색" />
      </button>
    </>
  );
}

export default SearchInput;
