import "@css/circle.css";
import "@css/component.css";
// import "@css/font-awesome.css";
import "@css/font-awesome.min.css";
import "@css/style.css";
import "./globals.css";

import MainState from "@/context/context";
import GioCSS from "@/layouts/GioCSS";

import { Open_Sans, Poppins, MuseoModerno } from "next/font/google";

const museo = MuseoModerno({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-museo",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-open_sans",
  display: "swap",
});

export const metadata = {
  title: "Gio Atademos | Resume & Portfolio",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      nocache: true,
    },
  },
};

const fontFamily = `${open_sans.variable} ${poppins.variable}`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="overflow-x-hidden h-full js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers no-applicationcache svg inlinesvg smil svgclippaths"
    >
      <body
        className={`${fontFamily} ${museo.variable} font-Poppins text-fs-16 font-medium leading-lh-1.6`}
      >
        <MainState>
          <GioCSS />
          {children}
        </MainState>
      </body>
    </html>
  );
}