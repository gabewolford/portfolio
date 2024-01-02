import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "gabe wolford | software developer",
  icons: {
    icon: "/images/pink.png",
  },
  description:
    "I'm a design-minded developer, specializing in React, Vue, component-based design systems, and other front-end technologies. I enjoy solving challenging problems, and have a proven ability to deliver scalable, accessible, performant, and visually appealing single-page web applications that users love.",
  keywords:
    "software, developer, software engineer, full stack developer, full stack software engineer, web developer, frontend developer, react, node, next, react.js, node.js, next.js, tailwind, vue, nuxt, vercel",
  openGraph: {
    title: "Gabe Wolford",
    description:
      "I'm a design-minded developer, specializing in React, Vue, component-based design systems, and other front-end technologies. I enjoy solving challenging problems, and have a proven ability to deliver scalable, accessible, performant, and visually appealing single-page web applications that users love.",
    siteName: "Gabe Wolford",
    type: "website",
    locale: "en_US",
    url: "https://gabewolford.com/",
    images: [
      {
        url: "https://gabewolford.com//images/memoji.png",
        alt: "Gabe Wolford",
      },
    ],
  },
  images: [
    {
      url: "https://gabewolford.com//images/memoji.png",
      alt: "Gabe Wolford",
    },
  ],
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
