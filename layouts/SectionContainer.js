"use client";
import { MainContext } from "@/context/context";
import { useContext, useEffect, useState } from "react";

const SectionContainer = ({ children, id }) => {
  const { nav, direction } = useContext(MainContext);
  const [navClass, setNavClass] = useState(`page--animate-${direction}`);

  useEffect(() => {
    setTimeout(() => {
      setNavClass(nav === id ? "page--current" : `page--animate-${direction}`);
    }, 1000);
  }, [nav]);

  return (
    <div className={`page ${navClass}`} id={id}>
      {children}
    </div>
  );
};
export default SectionContainer;
