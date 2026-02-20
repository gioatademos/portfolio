"use client";
import { MainContext } from "@/context/context";
import { useContext } from "react";

const SectionTitle = ({ title }) => {  
  const { dark } = useContext(MainContext);
  return (
    <div className="mx-auto w-full relative py-80 text-center xs:px-25 xs:pt-16 xs:pb-14 xs:bg-black-3 xs:border-b xs:border-black-4 xs:fixed xs:left-0 xs:right-0 xs:top-0 xs:z-20">
      <h1
        className={`gradient-text text-fs-56 font-black uppercase m-0 xs:text-fs-26 xs:text-left xs:leading-lh-1.2`}
      >
        {title}
      </h1>
    </div>
  );
};
export default SectionTitle;
