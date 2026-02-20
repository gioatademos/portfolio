"use client";
import DayLight from "@/components/DayLight";
import Popup from "@/components/Popup";
import Preloader from "@/components/Preloader";
import { MainContext } from "@/context/context";
import { gioUtility } from "@/utility";
import { useContext, useEffect } from "react";
import Cursor from "./Cursor";
import Header from "./Header";

const MainLayout = ({ children }) => {
  const { direction, popup, dark } = useContext(MainContext);
  useEffect(() => {
    gioUtility.customCursor();
  }, []);
  return (
    <div
      className={`home ${dark ? "dark" : ""} bg-${
        dark ? "black" : "white"
      } text-${
        dark ? "white" : "black-6"
      } relative w-full h-full overflow-hidden anim--effect-3 animation-${direction}`}
    >
      <Preloader />
      {popup && <Popup />}
      
      <DayLight />

      {/* Header Starts */}
      <Header />
      {/* Header Ends */}
      {children}
      <Cursor />
    </div>
  );
};
export default MainLayout;
