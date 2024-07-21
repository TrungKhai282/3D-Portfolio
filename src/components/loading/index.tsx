import React from "react";
import style from "./style.module.scss";

const Loading = () => {
  return (
    <div className={style.loading}>
      <div className={style.loader}></div>
    </div>
  );
};

export default Loading;
