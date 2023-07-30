import Observer from '../components/utils/Observer'
import 'animate.css'   
import Link from 'next/link'

export const metadata = {
    title: "gabe wolford | work",
    icons: {
      icon: "/images/green.png"
    },
    description: "i\'m gabe, a full stack developer based in portland, oregon specializing in react applications and front-end technologies, with expertise in node.js, next.js, tailwind, and responsive design. i have a proven ability to deliver high-quality & visually appealing web applications and skilled in building robust & scalable solutions. i collaborate well with cross-functional design & product teams every step of the way. i am committed to staying up-to-date with the latest trends and delivering exceptional user experiences.",
    keywords: "software, developer, software engineer, full stack developer, full stack software engineer, web developer, frontend developer, react, node, next, react.js, node.js, next.js, tailwind"
  }

export default function WorkPage() {

    return (
        <>
            <Observer />
            <main className="animate__animated animate__fadeIn mt-24 pb-36 max-w-[80vw] lg:max-w-[70vw] mx-auto">
                <header className="text-center text-3xl md:text-4xl font-bold mb-16">
                        <h1>highlighted work</h1>
                </header>

                <section className="fade-in show flex flex-col md:flex-row items-center gap-6 md:gap-14 mb-16 md:mb-32">
                    <div className="flex flex-col md:ml-20">
                        <Link href="https://github.com/gabewolford/" target="_blank">
                            <h4 className="text-2xl md:text-3xl hover:text-orange font-md leading-7 mb-1 transition ease-in-out duration-300">team oregon</h4>
                        </Link>
                        <p className="text-md">react application</p>
                        <p className="text-xs mb-2 text-dark-grey">july 2023</p>
                    
                        <p className="text-sm mb-2">full stack development, web design, technical SEO, digital strategy, webmaster services, domains & hosting, next, react, tailwind, vercel</p>
                        <div className="flex items-center">
                            <p>
                                <span className="text-blue text-md hover:text-pink hover:underline hover:underline-offset-8 hover:decoration-2">in progress</span>
                            </p>
                            <Link href="https://islamoradafishingguidesandcharters.com/" target="_blank">
                                <img className="w-6 ml-2" src='/images/right-arrow.svg' alt='right arrow'/>
                            </Link>
                        </div>
                    </div>
                    
                    <div className='order-last max-h-96 overflow-auto scrollbar-hide'>
                        <img src='/images/teamoregon.png' alt="team oregon screenshot" />
                    </div>
                </section>

                <section className="fade-in show flex flex-col md:flex-row items-center gap-6 md:gap-14 mb-16 md:mb-32">
                    <div className='order-last md:order-first max-h-96 overflow-auto scrollbar-hide'>
                        <img src='/images/biiig-stretch-screenshot.png' alt="biiig stretch screenshot" />
                    </div>
                    
                    <div>
                        <div className="flex flex-col md:mr-20">
                            <Link href="https://github.com/gabewolford/biiig-stretch" target="_blank">
                                <h4 className="text-2xl md:text-3xl hover:text-orange font-md leading-7 pt-4 mb-1 transition ease-in-out duration-300">biiig stretch studio</h4>
                            </Link>
                            <p className="text-md">react application</p>
                            <p className="text-xs mb-2 text-dark-grey">july 2023</p>
                        
                            <p className="text-sm mb-2">next.js, react, node, tailwind, javascript, vercel, figma</p>
                            <div className="flex items-center">
                                <Link href="https://biiigstretch.studio/" target="_blank">
                                    <img className="w-6 mr-2" src='/images/left-arrow.svg' alt='left arrow'/>
                                </Link>
                                <Link href="https://biiigstretch.studio/" target="_blank">
                                    <span className="text-blue text-md hover:text-pink hover:underline hover:underline-offset-8 hover:decoration-2">check it out</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="fade-in show flex flex-col md:flex-row items-center gap-6 md:gap-14 mb-16 md:mb-32">
                    <div className="flex flex-col md:ml-20">
                        <Link href="https://github.com/gabewolford/islamorada-fishing" target="_blank">
                            <h4 className="text-2xl md:text-3xl hover:text-orange font-md leading-7 mb-1 transition ease-in-out duration-300">islamorada fishing guides & charters</h4>
                        </Link>
                        <p className="text-md">react application</p>
                        <p className="text-xs mb-2 text-dark-grey">april 2023</p>
                    
                        <p className="text-sm mb-2">information architecture overhaul, SEO, site migration, and frontend facelift using react, next, node, sanity, tailwind, vercel, figma</p>
                        <div className="flex items-center">
                            <Link href="https://islamoradafishingguidesandcharters.com/" target="_blank">
                                <span className="text-blue text-md hover:text-pink hover:underline hover:underline-offset-8 hover:decoration-2">check it out</span>
                            </Link>
                            <Link href="https://islamoradafishingguidesandcharters.com/" target="_blank">
                                <img className="w-6 ml-2" src='/images/right-arrow.svg' alt='right arrow'/>
                            </Link>
                        </div>
                    </div>
                    
                    <div className='order-last max-h-96 overflow-auto scrollbar-hide'>
                        <img src='/images/islamorada.png' alt="islamorada fishing screenshot" />
                    </div>
                </section>

                <section className="fade-in flex flex-col md:flex-row items-center gap-6 md:gap-14 mb-16 md:mb-32">
                    <div className='order-last md:order-first max-h-96 overflow-auto scrollbar-hide'>
                        <img src='/images/launchbreak.png' alt="launchbreak screenshot" />
                    </div>
                    
                    <div>
                        <div className="flex flex-col md:mr-20">
                            <Link href="https://github.com/gabewolford/launchbreak" target="_blank">
                                <h4 className="text-2xl md:text-3xl hover:text-orange font-md leading-7 pt-4 mb-1 transition ease-in-out duration-300">launchbreak</h4>
                            </Link>
                            <p className="text-md">full stack react application</p>
                            <p className="text-xs mb-2 text-dark-grey">may 2023</p>
                        
                            <p className="text-sm mb-2">react, express, mongoDB, node, heroku, javascript, tailwind, figma</p>
                            <div className="flex items-center">
                                <Link href="https://launchbreak.herokuapp.com/" target="_blank">
                                    <img className="w-6 mr-2" src='/images/left-arrow.svg' alt='left arrow'/>
                                </Link>
                                <Link href="https://launchbreak.herokuapp.com/" target="_blank">
                                    <span className="text-blue text-md hover:text-pink hover:underline hover:underline-offset-8 hover:decoration-2">check it out</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="fade-in flex flex-col md:flex-row items-center gap-6 md:gap-14 mb-16 md:mb-32">
                    <div className="flex flex-col md:ml-20">
                        <Link href="https://github.com/spbovarnick/anomalies-anonymous" target="_blank">
                            <h4 className="text-2xl md:text-3xl hover:text-orange font-md leading-7 mb-1 transition ease-in-out duration-300">anomalies anonymous</h4>
                        </Link>
                        <p className="text-md">full stack django application</p>
                        <p className="text-xs mb-2 text-dark-grey">march 2023</p>
                    
                        <p className="text-sm mb-2">django, python, heroku, postgreSQL, bootstrap, jQuery, geocoder, crispy forms, figma</p>
                        <div className="flex items-center">
                            <Link href="https://www.anomaliesanonymous.com/" target="_blank">
                                <span className="text-blue text-md hover:text-pink hover:underline hover:underline-offset-8 hover:decoration-2">check it out</span>
                            </Link>
                            <Link href="https://www.anomaliesanonymous.com/" target="_blank">
                                <img className="w-6 ml-2" src='/images/right-arrow.svg' alt='right arrow'/>
                            </Link>
                            
                        </div>
                    </div>
                    
                    <div className='order-last overflow-auto scrollbar-hide'>
                        <img src='/images/anonanon.png' alt="anomalies anonymous screenshot" />
                    </div>
                </section>

                <section className="fade-in flex flex-col md:flex-row items-center gap-6 md:gap-14 mb-16">
                    <div className='order-last md:order-first max-h-96 overflow-auto scrollbar-hide'>
                        <img src='/images/gregslist.png' alt="gregslist screenshot" />
                    </div>
                    
                    <div>
                        <div className="flex flex-col md:mr-20">
                            <Link href="https://github.com/gabewolford/gregslist" target="_blank">
                                <h4 className="text-2xl md:text-3xl hover:text-orange font-md leading-7 mb-1 transition ease-in-out duration-300">gregslist</h4>
                            </Link>
                            <p className="text-md">full stack e-commerce application</p>
                            <p className="text-xs mb-2 text-dark-grey">feb 2023</p>
                        
                            <p className="text-sm mb-2">node, mongoDB, mongoose, jsx, heroku, postman, css, bootstrap, git/github, figma</p>
                            <div className="flex items-center">
                                <Link href="https://gregslist.herokuapp.com/" target="_blank">
                                    <img className="w-6 mr-2" src='/images/left-arrow.svg' alt='left arrow'/>
                                </Link>
                                <Link href="https://gregslist.herokuapp.com/" target="_blank">
                                    <span className="text-blue text-md hover:text-pink hover:underline hover:underline-offset-8 hover:decoration-2">check it out</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
   
                <section className='fade-in mt-24 text-center'>
                    <div className="justify-end">
                        <Link href="https://github.com/gabewolford" target="_blank">
                            <h1 className="text-2xl md:text-3xl overline hover:text-yellow transition ease-in-out duration-300">more coming soon!</h1>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}