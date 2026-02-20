"use client";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Portfolio from "@/components/Portfolio";
import { MainContext } from "@/context/context";
import Revealer from "@/layouts/Revealer";
import MainLayout from "@/layouts/MainLayout";
import { useContext, useEffect } from "react";

const Page = () => {
  const { darkToggle, changeColor } = useContext(MainContext);
  useEffect(() => {
    darkToggle();
    changeColor("green");
  }, []);

  return (
    <MainLayout>
      {/* Main Content Starts */}
      <div className="w-full h-full pages overflow-hidden">
        {/* Home Starts */}
        <Home authorImage={"assets/img/CHASING ALBERT - GIO 4"} />
        {/* Home Ends */}
        {/* About Starts */}
        <About />
        {/* About Ends */}
        {/* Portfolio Starts */}
        <Portfolio />
        {/* Portfolio Ends */}
        {/* Contact Starts */}
        <Contact />
        {/* Contact Ends */}
        {/* Blog Starts */}
        <Blog />
        {/* Blog Ends */}
      </div>
      <Revealer />
    </MainLayout>
  );
};
export default Page;
