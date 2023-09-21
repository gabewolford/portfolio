import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "gabe wolford | web developer",
  icons: {
    icon: "/images/pink.png",
  },
  description:
    "i'm gabe, a full stack developer based in portland, oregon specializing in react applications and front-end technologies, with expertise in node.js, next.js, tailwind, and responsive design. i have a proven ability to deliver high-quality & visually appealing web applications and skilled in building robust & scalable solutions. i collaborate well with cross-functional design & product teams every step of the way. i am committed to staying up-to-date with the latest trends and delivering exceptional user experiences.",
  keywords:
    "software, developer, software engineer, full stack developer, full stack software engineer, web developer, frontend developer, react, node, next, react.js, node.js, next.js, tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Navbar />
        <Analytics />
      </body>
    </html>
  );
}
