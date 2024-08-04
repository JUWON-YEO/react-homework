import { string, exact } from "prop-types";

export const SearchInputType = exact({
  text: string.isRequired,
  image: string.isRequired,
}).isRequired;
 