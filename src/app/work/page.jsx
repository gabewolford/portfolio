import Observer from "../components/utils/Observer";
import PhotoLeftCard from "../components/PhotoLeftCard";
import PhotoRightCard from "../components/PhotoRightCard";
import "animate.css";
import Link from "next/link";

export const metadata = {
  title: "gabe wolford | work",
  icons: {
    icon: "/images/green.png",
  },
  description:
    "i'm gabe, a full stack developer based in portland, oregon specializing in react applications and front-end technologies, with expertise in node.js, next.js, tailwind, and responsive design. i have a proven ability to deliver high-quality & visually appealing web applications and skilled in building robust & scalable solutions. i collaborate well with cross-functional design & product teams every step of the way. i am committed to staying up-to-date with the latest trends and delivering exceptional user experiences.",
  keywords:
    "software, developer, software engineer, full stack developer, full stack software engineer, web developer, frontend developer, react, node, next, react.js, node.js, next.js, tailwind",
};

export default function WorkPage() {
  return (
    <>
      <Observer />
      <main className="animate__animated animate__fadeIn mt-24 pb-36 max-w-[80vw] lg:max-w-[70vw] mx-auto">
        <header className="text-center text-3xl md:text-4xl font-bold mb-16">
          <h1>featured work</h1>
        </header>

        <div className="flex flex-col gap-16 md:gap-32">
          <PhotoRightCard
            imageUrl={"/images/teamoregon.png"}
            altText={"team oregon screenshot"}
            githubUrl={"https://github.com/gabewolford/team-oregon"}
            siteUrl={"https://teamoregon.cc/"}
            projectName={"team oregon"}
            monthAndYear={"august 2023"}
            technologies={
              "fullstack development, headless development, web design, webmaster services, domains & hosting, next, react, sanity, paypal, mongoDB, next auth, tailwind, vercel"
            }
            ctaText={"check it out"}
          />

          <PhotoLeftCard
            imageUrl={"/images/islamorada.png"}
            altText={"islamorada fishing screenshot"}
            githubUrl={
              "https://github.com/gabewolford/islamorada-fishing-guides"
            }
            siteUrl={"https://islamoradafishingguidesandcharters.com"}
            projectName={"islamorada fishing guides"}
            monthAndYear={"april 2023"}
            technologies={
              "frontend development, headless development, site migration, webmaster services, domains & hosting, react, next, node, sanity, tailwind, vercel, figma"
            }
            ctaText={"check it out"}
          />

          <PhotoRightCard
            imageUrl={"/images/morf-health.png"}
            altText={"morf health screenshot"}
            githubUrl={"https://github.com/gabewolford/morf-health"}
            siteUrl={"https://www.morf.health/"}
            projectName={"morf health"}
            monthAndYear={"october 2023"}
            technologies={
              "frontend development, headless development, react, next, node, sanity, tailwind, vercel, figma"
            }
            ctaText={"check it out"}
          />

          <PhotoLeftCard
            imageUrl={"/images/alex-barron-portfolio.png"}
            altText={"portfolio site screenshot"}
            githubUrl={"https://github.com/gabewolford/alex-barron-portfolio"}
            siteUrl={"https://alexbarron.site/"}
            projectName={"product design portfolio site"}
            monthAndYear={"november 2023"}
            technologies={
              "frontend development, nuxt, node, tailwind, vercel, figma"
            }
            ctaText={"check it out"}
          />

          <PhotoRightCard
            imageUrl={"/images/meat-cheese-bread.png"}
            altText={"Meat Cheese Bread screenshot"}
            githubUrl={"https://github.com/gabewolford/meat-cheese-bread"}
            siteUrl={"https://meat-cheese-bread.vercel.app/"}
            projectName={"meat cheese bread"}
            monthAndYear={"january 2024"}
            technologies={
              "frontend development, headless development, web design, webmaster services, domains & hosting, next, sanity, tailwind, figma, vercel"
            }
            ctaText={"coming soon"}
          />

          <PhotoLeftCard
            imageUrl={"/images/vert-outdoors.png"}
            altText={"VERT Outdoors screenshot"}
            githubUrl={"https://github.com/gabewolford/vert-outdoors"}
            siteUrl={"https://vert-outdoors.vercel.app/"}
            projectName={"vert outdoors"}
            monthAndYear={"september 2023"}
            technologies={
              "frontend development, headless development, web design, logo design, webmaster services, domains & hosting, nuxt, sanity, tailwind, figma, vercel"
            }
            ctaText={"check it out"}
          />

          <PhotoRightCard
            imageUrl={"/images/biiig-stretch-screenshot.png"}
            altText={"biiig stretch screenshot"}
            githubUrl={"https://github.com/gabewolford/biiig-stretch"}
            siteUrl={"https://biiigstretch.studio"}
            projectName={"biiig stretch studio"}
            monthAndYear={"july 2023"}
            technologies={
              "next.js, react, node, tailwind, sanity, vercel, figma"
            }
            ctaText={"check it out"}
          />

          <PhotoLeftCard
            imageUrl={"/images/smallhound.png"}
            altText={"small hound screenshot"}
            githubUrl={"https://github.com/gabewolford/small-hound"}
            siteUrl={"https://smallhound.co/"}
            projectName={"small hound"}
            monthAndYear={"june 2023"}
            technologies={
              "next.js, react, node, tailwind, javascript, vercel, figma"
            }
            ctaText={"check it out"}
          />

          <PhotoRightCard
            imageUrl={"/images/ourkade.png"}
            altText={"ourkade screenshot"}
            githubUrl={"https://github.com/gabewolford/ourkade"}
            siteUrl={"https://ourkade.io"}
            projectName={"ourkade"}
            monthAndYear={"october 2023"}
            technologies={
              "frontend development, ui development, vue3, node, tailwind, vercel, figma"
            }
            ctaText={"coming q1 2024"}
          />

          <PhotoLeftCard
            imageUrl={"/images/launchbreak.png"}
            altText={"launchbreak screenshot"}
            githubUrl={"https://github.com/gabewolford/launchbreak"}
            siteUrl={"https://launchbreak.herokuapp.com/"}
            projectName={"launchbreak"}
            monthAndYear={"may 2023"}
            technologies={
              "full stack development, react, express, mongoDB, node, heroku, javascript, tailwind, figma"
            }
            ctaText={"check it out"}
          />

          <section className="text-center">
            <div className="justify-end">
              <Link href="https://github.com/gabewolford" target="_blank">
                <h1 className="text-2xl md:text-3xl overline hover:text-yellow transition ease-in-out duration-300">
                  more coming soon!
                </h1>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
