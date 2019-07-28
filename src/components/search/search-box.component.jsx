import React from "react";

const SearchBox = ({ placeholder, handler }) => {
  return (
    <input
      type="search"
      onChange={handler}
      className="input has-text-center w-50"
      placeholder={placeholder}
    />
  );
};

export default SearchBox;
