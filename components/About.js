"use client";
import { MainContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext, useRef, useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import Dock from "@/components/Dock/Dock";
import ScrollStack, { ScrollStackItem } from "./ScrollStack/ScrollStack";
import TimelineScroll from "@/components/TimelineScroll/TimelineScroll";



const counters = [
  {
    id: 1,
    title: 'years of <span className="block">experience</span>',
    value: "4",
  },
  {
    id: 2,
    title: 'completed <span className="block">projects</span>',
    value: "30",
  },
  {
    id: 3,
    title: 'happy <span className="block">customers</span>',
    value: "40",
  },
];

const experiences = [
  {
    id: 13,
    date: "July 2025",
    title: "Completed a Certification of Search Marketing Specialist at Digital Marketing Institute (DMI)",
  },
  {
    id: 12,
    date: "August 2024",
    title: "Started working as a Web Developer at Chasing Albert Agency",
  },
  {
    id: 11,
    date: "March 2023",
    title: "Completed a Master's Degree in Information Technology at King's Own Institute (KOI) in Australia",
    company: "Themeforest",
  },
  {
    id: 10,
    date: "August 2021",
    title: "Started working as a Web Developer at Fassa Digital Agency",
  },
  {
    id: 9,
    date: "February 2021",
    title: "Completed a Diploma of Digital Media Technologies at Australian College of Business Inteligence (ACBI)",
  },
  {
    id: 8,
    date: "January 2021",
    title: "Started working part time as a eCommerce Manager at Noritake Australia",
  },
  {
    id: 7,
    date: "August 2019",
    title: "Completed a Diploma of Enterprise Resource Planning at Australian College of Business Inteligence (ACBI)",
  },
  {
    id: 6,
    date: "July 2018",
    title: "Completed a Certificate IV in Marketing and Communication at Australian College of Business Inteligence (ACBI)",
  },
  {
    id: 5,
    date: "December 2018",
    title: "Completed a Cambridge FCE Certification in English Language in Australia",
  },
  {
    id: 4,
    date: "August 2017",
    title: "Arrived in Australia",
  },
  {
    id: 3,
    date: "January 2016",
    title: "Completed a Bachelor's Degree in Information Systems From Fundacao Santo Andre in Brazil",
  },
  {
    id: 2,
    date: "April 2015",
    title: "Got promoted to Assistant Customer Support Analyst at T-Systems do Brasil",
  },
  {
    id: 1,
    date: "April 2014",
    title: "Started a working at T-Systems do Brasil as Systems Support Junior",
  },
];

const skills = [
  { id: 1, name: "html", value: "25" },
  { id: 2, name: "javascript", value: "89" },
  { id: 3, name: "css", value: "70" },
  { id: 4, name: "php", value: "66" },
  { id: 5, name: "wordpress", value: "95" },
  { id: 6, name: "jquery", value: "50" },
  { id: 7, name: "angular", value: "65" },
  { id: 8, name: "react", value: "45" },
];

const About = () => {
  const { dark } = useContext(MainContext);
  const handleMouseMove = (e) => {
  const target = e.currentTarget;
  const rect = target.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
};


  return (
    <SectionContainer id="about">
      <div className="w-full">
        {/* Section Title Starts */}
        <SectionTitle title="about me" />
        {/* Section Title Ends */}
        {/* Section Info Starts */}
        <div className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] lg:max-w-960 md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto">
          <div className="flex flex-row down-lg:flex-col items-center gap-[50px]">
           {/* Left Column Starts */}
             <div className="xl:basis-[482px] down-lg:basis-full mb-20 shrink-0">
              <div
                className="relative w-full inline-block spotlight rounded-20 overflow-hidden group"
                onMouseMove={handleMouseMove}
              >
              {/* Profile Image Starts */}
              <img
                src="assets/img/Gio Atademos - About.jpg"
                alt="Profile"
                className="rounded-20 w-full h-auto transition duration-300 "
                style={{ aspectRatio: "482 / 602",  filter: "grayscale(90%) "}}
              />
              {/* Color Layer */}
              <img
                src="assets/img/Gio Atademos - About.jpg"
                alt="Profile Color"
                  className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  WebkitMaskImage: `
                    radial-gradient(
                      circle 220px at var(--mouse-x) var(--mouse-y),
                      black 0%,
                      black 40%,
                      rgba(0,0,0,0.6) 60%,
                      transparent 95%
                    )
                  `,
                  maskImage: `
                    radial-gradient(
                      circle 220px at var(--mouse-x) var(--mouse-y),
                      black 0%,
                      black 40%,
                      rgba(0,0,0,0.6) 60%,
                      transparent 95%
                    )
                  `,
                  transition: "mask-position 0.1s"
                }}
              />
              {/*Profile Image Ends*/}

              {/*Dock Starts*/}
              <div className="absolute bottom-0 mb-20 left-0 w-full flex justify-center z-30">

                <Dock
                  items={[
                    {
                      icon: "/assets/icons/email.svg",
                      label: "Email",
                      onClick: () =>
                        (window.location.href = "mailto:gioatademos@gmail.com"),
                    },
                    {
                      icon: "/assets/icons/call.svg",
                      label: "Phone",
                      onClick: () =>
                        (window.location.href = "tel:0449008188"),
                    },
                    {
                      icon: "/assets/icons/linkedin.svg",
                      label: "LinkedIn",
                      onClick: () =>
                        window.open(
                          "https://linkedin.com/in/giovanna-atademos",
                          "_blank"
                        ),
                    },
                    {
                      icon: "/assets/icons/github.svg",
                      label: "GitHub",
                      onClick: () =>
                        window.open("https://github.com/gioatademos", "_blank"),
                    },
                    {
                      icon: "/assets/icons/CV.svg",
                      label: "Resume",
                      onClick: () =>
                        window.open(
                          "/assets/docs/Giovanna Atademos - Resume - Web Developer.pdf",
                          "_blank"
                        ),
                    },
                  ]}
                  baseItemSize={50}
                  magnification={80}
                />
                </div>
              {/*Dock Ends*/}              
              </div>              
            </div>
             {/* Left Column Ends */}
            {/* Right Column Starts*/}
            <div className="flex-1 max-w-[680px] down-lg:w-full">
              {/* About Text Starts */}
              <p
                className={`text-light-grey font-Open-sans text-fs-16 leading-lh-1.7 mb-40 down-lg:hidden 
                ${dark ? "" : "!text-black-6"}`}
              >
                Digital Producer & Web Developer with 4+ years of experience delivering high-performing, 
                user-focused digital experiences. Skilled in managing websites, CRM, and marketing automation 
                tools to drive engagement and conversions. Strong technical foundation in WordPress, SEO, and analytics, 
                combined with proven ability to collaborate with cross-functional teams to execute digital strategies. 
                Passionate about using data insights to improve customer journeys and business outcomes.
              </p>
              {/* About Text Ends*/}
              
              {/* Facts Starts */}
              <div className="flex gap-[25px] down-lg:flex-col">
                {counters.map((counter) => (
                  <div className="flex-1 down-lg:w-full down-lg:flex-none" key={counter.id}>
                    
                    <div
                      onMouseMove={handleMouseMove}
                      className={`
                        spotlight
                        p-30
                        border-2
                        border-solid
                        ${dark ? "border-black-5" : "border-[rgb(128,99,192)]"}
                        rounded-20
                      `}
                    >
                      <h3 className="relative inline-block font-bold text-fs-50 xs:text-fs-40 text-accent leading-lh-1.2 after:content-['+'] after:absolute after:-right-24 after:text-fs-33 after:font-light after:top-2">
                        {counter.value}
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: counter.title,
                        }}
                        className="xs:text-fs-14 uppercase font-Open-sans font-medium"
                      ></p>
                    </div>
                  </div>
                ))}
              </div> 
              {/* Facts Ends */}
            </div>
            {/* Right Column */}   
          </div>
          <hr
            className={`border-t border-solid border-t-${
              dark ? "black-3" : "grey"
            } mx-auto max-w-40prcent mt-70 mb-55`}
          />
          {/* Resume Starts */}
          <TimelineScroll experiences={experiences} dark={dark} />
          {/* Resume Ends */}
          <hr
            className={`border-t border-solid border-t-${
              dark ? "black-3" : "grey"
            } mx-auto max-w-40prcent mt-70 mb-55`}
          />
          {/* Skills Starts */}
          <div className="relative">
            <h3
              className={`sticky uppercase text-fs-40 xs:text-fs-21 pb-48 font-semibold text-center ${
                dark ? "text-white" : "text-black-2"
              }`}
            >
              my skills
            </h3>
          
          <ScrollStack>
            {/* 1ST CARD STARS */}
            <ScrollStackItem>
            <div className="flex justify-center mb-70">
              <div
                className="p-50 w-full max-w-1140 rounded-30"
                style={{ backgroundColor: "#8063c0" }}
              >
                <div className="flex items-start gap-[50px]">

                  {/* LEFT TITLE BLOCK */}
                  <div className="w-[320px] shrink-0">
                    <h3 className="text-white font-normal text-fs-33 leading-lh-45">
                      digital platforms & <br /> martech stack
                    </h3>
                  </div>

                  {/* RIGHT LOGOS GRID */}
                  <div className="flex-1">
                    <div className="grid grid-cols-5 gap-[50px]">

                      {[
                        { name: "WordPress", icon: "wordpress.svg" },
                        { name: "Elementor", icon: "elementor.svg" },
                        { name: "Wix Studio", icon: "wix.svg" },
                        { name: "Shopify", icon: "shopify.svg" },
                        { name: "Webflow", icon: "webflow.svg" },
                        { name: "Hubspot", icon: "hubspot.svg" },
                        { name: "MailChimp", icon: "mailchimp.svg" },
                        { name: "MailerLite", icon: "mailerlite.svg" },
                        { name: "Active Campaign", icon: "activecampaign.svg" },
                        { name: "Marketo", icon: "marketo.svg" },
                        { name: "Google Analytics", icon: "ga.svg" },
                        { name: "Tag Manager", icon: "gtm.svg" },
                        { name: "Search Console", icon: "searchconsole.svg" },
                        { name: "SEMrush", icon: "semrush.svg" },
                        { name: "PageSpeed", icon: "pagespeed.svg" },
                      ].map((skill, i) => (
                        <div
                          key={i}
                          className="flex items-center text-center"
                          style={{ flexDirection: "column" }}
                        >

                          {/* ICON */}
                          <img
                            src={`assets/icons/${skill.icon}`}
                            alt={skill.name}
                            className="w-[90px] h-[90px]"
                            style={{ marginBottom: "18px" }}
                          />

                          {/* TEXT UNDER ICON */}
                          <span className="label-blue text-fs-14 font-medium">
                            {skill.name}
                          </span>

                        </div>
                      ))}

                    </div>
                  </div>

                </div>
              </div>
            </div>
            </ScrollStackItem>
            {/* 1ST CARD ENDS */}          
            {/* 2ND CARD STARTS */}          
            <ScrollStackItem>
            <div className="flex justify-center mb-70">
              <div
                className="p-50 w-full max-w-1140 rounded-30"
                style={{ backgroundColor: "#1eb5cf" }}
              >
                <div className="flex items-start gap-[50px]">

                  {/* LEFT TITLE BLOCK */}
                  <div className="w-[320px] shrink-0">
                    <h3 className="text-white font-normal text-fs-33 leading-lh-45">
                      digital platforms & <br /> martech stack
                    </h3>
                  </div>

                  {/* RIGHT LOGOS GRID */}
                  <div className="flex-1">
                    <div className="grid grid-cols-5 gap-[50px]">

                      {[
                        { name: "WordPress", icon: "wordpress.svg" },
                        { name: "Elementor", icon: "elementor.svg" },
                        { name: "Wix Studio", icon: "wix.svg" },
                        { name: "Shopify", icon: "shopify.svg" },
                        { name: "Webflow", icon: "webflow.svg" },
                        { name: "Hubspot", icon: "hubspot.svg" },
                        { name: "MailChimp", icon: "mailchimp.svg" },
                        { name: "MailerLite", icon: "mailerlite.svg" },
                        { name: "Active Campaign", icon: "activecampaign.svg" },
                        { name: "Marketo", icon: "marketo.svg" },
                        { name: "Google Analytics", icon: "ga.svg" },
                        { name: "Tag Manager", icon: "gtm.svg" },
                        { name: "Search Console", icon: "searchconsole.svg" },
                        { name: "SEMrush", icon: "semrush.svg" },
                        { name: "PageSpeed", icon: "pagespeed.svg" },
                      ].map((skill, i) => (
                        <div
                          key={i}
                          className="flex items-center text-center"
                          style={{ flexDirection: "column" }}
                        >

                          {/* ICON */}
                          <img
                            src={`assets/icons/${skill.icon}`}
                            alt={skill.name}
                            className="w-[90px] h-[90px]"
                            style={{ marginBottom: "18px" }}
                          />

                          {/* TEXT UNDER ICON */}
                          <span className="label-blue text-fs-14 font-medium">
                            {skill.name}
                          </span>

                        </div>
                      ))}

                    </div>
                  </div>

                </div>
              </div>
            </div>
            </ScrollStackItem>
            {/* 2ND CARD ENDS */}
            {/* 3RD CARD STARS */}
            <ScrollStackItem>
            <div className="flex justify-center mb-70">
              <div
                className="p-50 w-full max-w-1140 rounded-30"
                style={{ backgroundColor: "#8063c0" }}
              >
                <div className="flex items-start gap-[50px]">

                  {/* LEFT TITLE BLOCK */}
                  <div className="w-[320px] shrink-0">
                    <h3 className="text-white font-normal text-fs-33 leading-lh-45">
                      digital platforms & <br /> martech stack
                    </h3>
                  </div>

                  {/* RIGHT LOGOS GRID */}
                  <div className="flex-1">
                    <div className="grid grid-cols-5 gap-[50px]">

                      {[
                        { name: "WordPress", icon: "wordpress.svg" },
                        { name: "Elementor", icon: "elementor.svg" },
                        { name: "Wix Studio", icon: "wix.svg" },
                        { name: "Shopify", icon: "shopify.svg" },
                        { name: "Webflow", icon: "webflow.svg" },
                        { name: "Hubspot", icon: "hubspot.svg" },
                        { name: "MailChimp", icon: "mailchimp.svg" },
                        { name: "MailerLite", icon: "mailerlite.svg" },
                        { name: "Active Campaign", icon: "activecampaign.svg" },
                        { name: "Marketo", icon: "marketo.svg" },
                        { name: "Google Analytics", icon: "ga.svg" },
                        { name: "Tag Manager", icon: "gtm.svg" },
                        { name: "Search Console", icon: "searchconsole.svg" },
                        { name: "SEMrush", icon: "semrush.svg" },
                        { name: "PageSpeed", icon: "pagespeed.svg" },
                      ].map((skill, i) => (
                        <div
                          key={i}
                          className="flex items-center text-center"
                          style={{ flexDirection: "column" }}
                        >

                          {/* ICON */}
                          <img
                            src={`assets/icons/${skill.icon}`}
                            alt={skill.name}
                            className="w-[90px] h-[90px]"
                            style={{ marginBottom: "18px" }}
                          />

                          {/* TEXT UNDER ICON */}
                          <span className="label-blue text-fs-14 font-medium">
                            {skill.name}
                          </span>

                        </div>
                      ))}

                    </div>
                  </div>

                </div>
              </div>
            </div>
            </ScrollStackItem>
            {/* 3RD CARD ENDS */}          
            {/* 4TH CARD STARTS */}          
            <ScrollStackItem>
            <div className="flex justify-center mb-70">
              <div
                className="p-50 w-full max-w-1140 rounded-30"
                style={{ backgroundColor: "#1eb5cf" }}
              >
                <div className="flex items-start gap-[50px]">

                  {/* LEFT TITLE BLOCK */}
                  <div className="w-[320px] shrink-0">
                    <h3 className="text-white font-normal text-fs-33 leading-lh-45">
                      digital platforms & <br /> martech stack
                    </h3>
                  </div>

                  {/* RIGHT LOGOS GRID */}
                  <div className="flex-1">
                    <div className="grid grid-cols-5 gap-[50px]">

                      {[
                        { name: "WordPress", icon: "wordpress.svg" },
                        { name: "Elementor", icon: "elementor.svg" },
                        { name: "Wix Studio", icon: "wix.svg" },
                        { name: "Shopify", icon: "shopify.svg" },
                        { name: "Webflow", icon: "webflow.svg" },
                        { name: "Hubspot", icon: "hubspot.svg" },
                        { name: "MailChimp", icon: "mailchimp.svg" },
                        { name: "MailerLite", icon: "mailerlite.svg" },
                        { name: "Active Campaign", icon: "activecampaign.svg" },
                        { name: "Marketo", icon: "marketo.svg" },
                        { name: "Google Analytics", icon: "ga.svg" },
                        { name: "Tag Manager", icon: "gtm.svg" },
                        { name: "Search Console", icon: "searchconsole.svg" },
                        { name: "SEMrush", icon: "semrush.svg" },
                        { name: "PageSpeed", icon: "pagespeed.svg" },
                      ].map((skill, i) => (
                        <div
                          key={i}
                          className="flex items-center text-center"
                          style={{ flexDirection: "column" }}
                        >

                          {/* ICON */}
                          <img
                            src={`assets/icons/${skill.icon}`}
                            alt={skill.name}
                            className="w-[90px] h-[90px]"
                            style={{ marginBottom: "18px" }}
                          />

                          {/* TEXT UNDER ICON */}
                          <span className="label-blue text-fs-14 font-medium">
                            {skill.name}
                          </span>

                        </div>
                      ))}

                    </div>
                  </div>

                </div>
              </div>
            </div>
            </ScrollStackItem>
            {/* 4TH CARD ENDS */}
            {/* 5TH CARD STARS */}
            <ScrollStackItem>
            <div className="flex justify-center mb-70">
              <div
                className="p-50 w-full max-w-1140 rounded-30"
                style={{ backgroundColor: "#8063c0" }}
              >
                <div className="flex items-start gap-[50px]">

                  {/* LEFT TITLE BLOCK */}
                  <div className="w-[320px] shrink-0">
                    <h3 className="text-white font-normal text-fs-33 leading-lh-45">
                      digital platforms & <br /> martech stack
                    </h3>
                  </div>

                  {/* RIGHT LOGOS GRID */}
                  <div className="flex-1">
                    <div className="grid grid-cols-5 gap-[50px]">

                      {[
                        { name: "WordPress", icon: "wordpress.svg" },
                        { name: "Elementor", icon: "elementor.svg" },
                        { name: "Wix Studio", icon: "wix.svg" },
                        { name: "Shopify", icon: "shopify.svg" },
                        { name: "Webflow", icon: "webflow.svg" },
                        { name: "Hubspot", icon: "hubspot.svg" },
                        { name: "MailChimp", icon: "mailchimp.svg" },
                        { name: "MailerLite", icon: "mailerlite.svg" },
                        { name: "Active Campaign", icon: "activecampaign.svg" },
                        { name: "Marketo", icon: "marketo.svg" },
                        { name: "Google Analytics", icon: "ga.svg" },
                        { name: "Tag Manager", icon: "gtm.svg" },
                        { name: "Search Console", icon: "searchconsole.svg" },
                        { name: "SEMrush", icon: "semrush.svg" },
                        { name: "PageSpeed", icon: "pagespeed.svg" },
                      ].map((skill, i) => (
                        <div
                          key={i}
                          className="flex items-center text-center"
                          style={{ flexDirection: "column" }}
                        >

                          {/* ICON */}
                          <img
                            src={`assets/icons/${skill.icon}`}
                            alt={skill.name}
                            className="w-[90px] h-[90px]"
                            style={{ marginBottom: "18px" }}
                          />

                          {/* TEXT UNDER ICON */}
                          <span className="label-blue text-fs-14 font-medium">
                            {skill.name}
                          </span>

                        </div>
                      ))}

                    </div>
                  </div>

                </div>
              </div>
            </div>
            </ScrollStackItem>
            {/* 5TH CARD ENDS */}          
            {/* 6TH CARD STARTS */}          
            <ScrollStackItem>
            <div className="mb-12vh flex justify-center mb-70">
              <div
                className="p-50 w-full max-w-1140 rounded-30"
                style={{ backgroundColor: "#1eb5cf" }}
              >
                <div className="flex items-start gap-[50px]">

                  {/* LEFT TITLE BLOCK */}
                  <div className="w-[320px] shrink-0">
                    <h3 className="text-white font-normal text-fs-33 leading-lh-45">
                      digital platforms & <br /> martech stack
                    </h3>
                  </div>

                  {/* RIGHT LOGOS GRID */}
                  <div className="flex-1">
                    <div className="grid grid-cols-5 gap-[50px]">

                      {[
                        { name: "WordPress", icon: "wordpress.svg" },
                        { name: "Elementor", icon: "elementor.svg" },
                        { name: "Wix Studio", icon: "wix.svg" },
                        { name: "Shopify", icon: "shopify.svg" },
                        { name: "Webflow", icon: "webflow.svg" },
                        { name: "Hubspot", icon: "hubspot.svg" },
                        { name: "MailChimp", icon: "mailchimp.svg" },
                        { name: "MailerLite", icon: "mailerlite.svg" },
                        { name: "Active Campaign", icon: "activecampaign.svg" },
                        { name: "Marketo", icon: "marketo.svg" },
                        { name: "Google Analytics", icon: "ga.svg" },
                        { name: "Tag Manager", icon: "gtm.svg" },
                        { name: "Search Console", icon: "searchconsole.svg" },
                        { name: "SEMrush", icon: "semrush.svg" },
                        { name: "PageSpeed", icon: "pagespeed.svg" },
                      ].map((skill, i) => (
                        <div
                          key={i}
                          className="flex items-center text-center"
                          style={{ flexDirection: "column" }}
                        >

                          {/* ICON */}
                          <img
                            src={`assets/icons/${skill.icon}`}
                            alt={skill.name}
                            className="w-[90px] h-[90px]"
                            style={{ marginBottom: "18px" }}
                          />

                          {/* TEXT UNDER ICON */}
                          <span className="label-blue text-fs-14 font-medium">
                            {skill.name}
                          </span>

                        </div>
                      ))}

                    </div>
                  </div>

                </div>
              </div>
            </div>
            </ScrollStackItem>
            {/* 6TH CARD ENDS */}
          </ScrollStack>
          </div>
          {/* Skills Ends */}
        </div>
         {/* Section Info Ends */}
      </div>
    </SectionContainer>
  );
};
export default About;
