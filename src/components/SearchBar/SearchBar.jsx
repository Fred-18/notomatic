import React from "react";
import { Search as SearchIcon } from "react-bootstrap-icons";
import s from "./style.module.css";

export const SearchBar = ({ placeholder, onTextchange }) => {
  return (
    <>
      <SearchIcon size={25} className={s.icon} />
      <input
        type="text"
        className={s.input}
        onChange={(e) => onTextchange(e.target.value)}
        placeholder={placeholder}
      />
    </>
  );
};
