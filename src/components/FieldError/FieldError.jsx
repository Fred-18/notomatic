import React from "react";
import s from "./style.module.css";
export const FieldError = ({ msg }) => {
  return (
    <>
      <span className={s.container}>{msg}</span>
    </>
  );
};
