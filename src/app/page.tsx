import "animate.css";

export const metadata = {
  title: "gabe wolford",
  icons: {
    icon: "/images/pink.png",
  },
  description:
    "i'm gabe, a full stack developer based in portland, oregon specializing in react applications and front-end technologies, with expertise in node.js, next.js, tailwind, and responsive design. i have a proven ability to deliver high-quality & visually appealing web applications and skilled in building robust & scalable solutions. i collaborate well with cross-functional design & product teams every step of the way. i am committed to staying up-to-date with the latest trends and delivering exceptional user experiences.",
  keywords:
    "software, developer, software engineer, full stack developer, full stack software engineer, web developer, frontend developer, react, node, next, react.js, node.js, next.js, tailwind",
};

export default function HomePage() {
  return (
    <>
      <h1 className="flex items-center text-3xl mx-9 md:mx-auto md:text-4xl animate__animated animate__fadeIn">
        <main className="leading-tight tracking-normal cursor-default">
          <span>hey there, i&apos;m </span>
          <span className="text-dark-grey hover:text-blue transition ease-in-out duration-500">
            {" "}
            gabe
          </span>
          <span className="text-green hover:text-yellow transition ease-in-out duration-400">
            ( )
          </span>
          <br />
          <span>i&apos;m a </span>
          <span className="text-yellow hover:text-blue">&#123;</span>
          <span className="text-brown hover:text-green transition ease-in-out duration-500">
            frontend
          </span>
          <span className="text-dark-grey">.</span>
          <span className="text-orange hover:text-pink transition ease-in-out duration-500">
            developer
          </span>
          <span className="text-dark-grey"></span>
          <span className="text-yellow hover:text-blue transition ease-in-out duration-500">
            &#125;
          </span>
          <br />
          <span> based in </span>
          <br />
          <span className="text-pink hover:text-green transition ease-in-out duration-500">
            &#91;
          </span>
          <span className="text-orange">&apos;</span>
          <span className="text-blue hover:text-yellow transition ease-in-out duration-500">
            portland
          </span>
          <span className="text-orange">&apos;</span>
          <span className="text-green">, </span>
          <span className="text-orange">&apos;</span>
          <span className="text-blue hover:text-yellow transition ease-in-out duration-500">
            oregon
          </span>
          <span className="text-orange">&apos;</span>
          <span className="text-pink hover:text-green transition ease-in-out duration-500">
            &#93;
          </span>
        </main>
      </h1>
    </>
  );
}
