"use client";
import { MainContext } from "@/context/context";
import { Fragment, useContext } from "react";
const GioCSS = () => {
  const { color } = useContext(MainContext);
  return (
    <Fragment>
      <link rel="stylesheet" href={`/assets/css/skins/${color}.css`} />
    </Fragment>
  );
};
export default GioCSS;
