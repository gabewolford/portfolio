import Observer from '../components/utils/Observer'
import Link from 'next/link'

export const metadata = {
  title: "gabe wolford | about me",
  icons: {
    icon: "/images/orange.png"
  },
  description: "i\'m gabe, a full stack developer based in portland, oregon specializing in react applications and front-end technologies, with expertise in next.js, node.js, tailwind, and responsive design. i have a proven ability to deliver high-quality & visually appealing web applications and skilled in building robust & scalable solutions. i collaborate well with cross-functional design & product teams every step of the way. i am committed to staying up-to-date with the latest trends and delivering exceptional user experiences.",
  keywords: "software, developer, software engineer, full stack developer, full stack software engineer, web developer, frontend developer, react, node, next, react.js, node.js, next.js, tailwind"
}

export default function MePage() {

    return (
        <>
            <Observer />

            <main className="animate__animated animate__fadeIn mt-16 pb-24 max-w-[80vw] md:max-w-[70vw] mx-auto text-sm">
                
                <div className="fade-in show grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mt-24 md:mt-32">
                    <img className="rounded-full mx-auto" src='/images/vla.png' alt="profile photo" />
                    <div className="">
                        <h1 className="text-3xl md:text-4xl mb-5">a lil bit about me</h1>
                        <p className="mb-4">i&apos;m gabe, a full stack developer based in portland, oregon specializing in react applications and front-end technologies, with expertise in next.js, node.js, tailwind, and responsive design. i have a proven ability to deliver high-quality & visually appealing web applications and skilled in building robust & scalable solutions. i collaborate well with cross-functional design & product teams every step of the way. i am committed to staying up-to-date with the latest trends and delivering exceptional user experiences. i&apos;m currently running a one-man dev shop over at <Link href="https://biiigstretch.studio" className='text-yellow'>Biiig Stretch Studio.</Link></p>
                        <p>in my spare time you can find me outside, riding my bike on a variety of different surfaces. if i&apos;m not doing that, i&apos;m probably making a mean sandwich or exploring the PNW with my dog and my partner. as a lifelong learner, space fanatic, and amateur astronomer, i love reading about the universe & the current state of space exploration.</p>
                    </div>
                </div>

                <h2 className="fade-in text-2xl md:text-3xl mb-8 mt-16 lg:mt-20">skills</h2>

                <div className="fade-in grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-14">
                    <div className="mb-10">
                        <h5 className="text-dark-grey mb-3 hover:text-green">languages</h5>
                        <p>javascript, typescript, python, html5, css3, php, sql</p>
                    </div>

                    <div className="mb-10">
                        <h5 className="text-dark-grey mb-3 hover:text-orange">frameworks</h5>
                        <p>react, node, next, express, django, tailwind</p>
                    </div>

                    <div className="mb-10">
                        <h5 className="text-dark-grey mb-3 hover:text-pink">databases</h5>
                        <p>mongoDB, postresql</p>
                    </div>

                    <div className="mb-20">
                        <h5 className="text-dark-grey mb-3 hover:text-yellow">systems & tools</h5>
                        <p>vite, vercel, sanity, wordpress, cms, headless cms git, mongoose, prisma, postman, aws, google, figma, vs code</p>
                    </div>
                </div>
                    
                <div className="fade-in mb-4 flex items-center">
                    <Link 
                      href="/images/resume.pdf" 
                      target="_blank" 
                      className="mr-1.5"
                    >
                      <img src='/images/download.png' alt="download-button"/>
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
                      target='_blank' 
                      className="mr-2"
                    >
                      <img src="/images/email.png" alt="email"
                      />
                    </Link>

                    <Link 
                      href="https://www.linkedin.com/in/gabe-wolford/" 
                      target='_blank' 
                      className="mr-2"
                    >
                      <img src="/images/linkedin.png" alt="linked in"/>
                    </Link>

                    <Link 
                      href="https://github.com/gabewolford" 
                      target='_blank'
                    >
                      <img src="/images/github.png" alt="github"/>
                    </Link>
                </div>
            </main>
        </>
    )
}