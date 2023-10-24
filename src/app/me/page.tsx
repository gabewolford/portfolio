import Observer from "../components/utils/Observer";
import Link from "next/link";

export const metadata = {
  title: "gabe wolford | about me",
  icons: {
    icon: "/images/orange.png",
  },
  description:
    "i'm gabe, a full stack developer based in portland, oregon specializing in react applications and front-end technologies, with expertise in next.js, node.js, tailwind, and responsive design. i have a proven ability to deliver high-quality & visually appealing web applications and skilled in building robust & scalable solutions. i collaborate well with cross-functional design & product teams every step of the way. i am committed to staying up-to-date with the latest trends and delivering exceptional user experiences.",
  keywords:
    "software, developer, software engineer, full stack developer, full stack software engineer, web developer, frontend developer, react, node, next, react.js, node.js, next.js, tailwind",
};

export default function MePage() {
  return (
    <>
      <Observer />

      <main className="animate__animated animate__fadeIn mt-16 pb-24 max-w-[80vw] md:max-w-[70vw] mx-auto text-sm">
        <div className="fade-in show grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mt-24 md:mt-32">
          <img
            className="rounded-full mx-auto"
            src="/images/vla.png"
            alt="profile photo"
          />
          <div className="">
            <h1 className="text-3xl md:text-4xl mb-5">a lil bit about me</h1>
            <p className="mb-4">
              i&apos;m gabe - a design-oriented developer with a deep background
              in the music industry, specializing in react applications and
              other front-end technologies. i have a proven ability to deliver
              scalable, accessible, performant, and visually appealing web
              applications that users love. i prefer building with
              next/vue/nuxt, node.js, sanity, tailwind, and figma. my soft
              skills compliment my tech chops, allowing me to collaborate
              effectively with leadership, design, and engineering teams every
              step of the way. i&apos;m a lightning-fast learner and am
              committed to delivering exceptional user experiences.
            </p>
            <p>
              when i&apos;m not clacking away on the keys, i&apos;m probably
              petting my dog, riding my bike, learning the art of bonsai, or
              reading about space.
            </p>
          </div>
        </div>

        <h2 className="show text-2xl md:text-3xl mb-8 mt-16 lg:mt-20">
          skills
        </h2>

        <div className="show grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-14">
          <div className="mb-10">
            <h5 className="text-dark-grey mb-3 hover:text-green">languages</h5>
            <p>
              javascript, typescript, html5, css3, python, php, sql, and more
            </p>
          </div>

          <div className="mb-10">
            <h5 className="text-dark-grey mb-3 hover:text-orange">
              frameworks & libraries
            </h5>
            <p>
              react, next, vue, nuxt, node, express, django, tailwind, and more
            </p>
          </div>

          <div className="mb-10">
            <h5 className="text-dark-grey mb-3 hover:text-pink">databases</h5>
            <p>mongoDB, postresql, mysql, and more</p>
          </div>

          <div className="mb-20">
            <h5 className="text-dark-grey mb-3 hover:text-yellow">
              systems & tools
            </h5>
            <p>
              vite, vercel, sanity, paypal, square, stripe, wordpress, cms,
              headless cms, git, groq, graphQL, apollo, mongoose, postman, aws,
              google, figma, vs code, and more
            </p>
          </div>
        </div>

        <div className="fade-in mb-4 flex items-center">
          <Link href="/images/resume.pdf" target="_blank" className="mr-1.5">
            <img src="/images/download.png" alt="download-button" />
          </Link>

          <Link
            href="/images/resume.pdf"
            target="_blank"
            className="text-md md:text-lg text-green hover:text-blue mr-5"
          >
            download resume
          </Link>

          <Link
            href="mailto:gabewolford@gmail.com"
            target="_blank"
            className="mr-2"
          >
            <img src="/images/email.png" alt="email" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/gabe-wolford/"
            target="_blank"
            className="mr-2"
          >
            <img src="/images/linkedin.png" alt="linked in" />
          </Link>

          <Link href="https://github.com/gabewolford" target="_blank">
            <img src="/images/github.png" alt="github" />
          </Link>
        </div>
      </main>
    </>
  );
}
