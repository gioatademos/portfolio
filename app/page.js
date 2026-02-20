"use client";

import Dock from "@/components/Dock/Dock";
import Noise from "@/components/Noise/Noise";
import FuzzyText from "@/components/FuzzyText/FuzzyText";

export default function Home() {
  const dockItems = [
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
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#353434] text-white overflow-hidden">

      {/* REAL NOISE CANVAS */}
      <Noise patternRefreshInterval={2} patternAlpha={25} />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-5xl w-full">
        {/* NAME BLOCK */}
        <div
        className="inline-block text-left overflow-visible"
        style={{ marginBottom: "clamp(40px, 10vh, 90px)" }}
        >
        <h1 className="gradient-text block font-bold italic text-fs-110 leading-[1.1] -mb-4 pr-4 pb-4 relative custom-md-2:text-fs-42 down-md:text-fs-38 xs:text-fs-40">
            Gio Atademos
        </h1>

        <p className="text-right tracking-[0.45em] text-base text-fs-26 md:text-lg xs:text-fs-18 font-poppins uppercase opacity-80">
            Portfolio
        </p>
        </div>

        {/* COMING SOON */}
        <div
        className="flex justify-center"
        style={{ marginBottom: "clamp(55px, 8vh, 120px)" }}
        >
        <FuzzyText
            className="fuzzy-canvas"
            baseIntensity={0.12}
            hoverIntensity={0}
            enableHover={false}
            fontSize="clamp(2rem, 4vw, 3.5rem)"
            fontWeight={800}
            color="#ffffff"
            letterSpacing={5}
        >
            COMING SOON
        </FuzzyText>
        </div>

        {/* DOCK */}
        <div className="flex justify-center">
        <Dock items={dockItems} baseItemSize={50} magnification={80} />
        </div>

        </div>
    </main>
  );
}