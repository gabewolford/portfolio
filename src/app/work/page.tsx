'use client'

import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function WorkPage() {
    useEffect(() => {
        const cards = document.querySelectorAll('.fade-in')
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle('show', entry.isIntersecting)
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target)
                }
            })
        },
        {
            threshold: .25,
        }
    )

    cards.forEach(card => {
        observer.observe(card)
    })
    }, [])

    return (
        <>
            <Head>
                <title>gabe wolford | work</title>
                <link rel="icon" href='/images/green.png' />
                <meta name="description" content="some of the work i've done" />
            </Head>
            <div className="animate__animated animate__fadeIn mt-24 pb-36 max-w-[80vw] lg:max-w-[70vw] mx-auto">
                <header className="text-center text-3xl md:text-4xl font-bold mb-16">
                        <h1>things i've built</h1>
                </header>

                <section className="fade-in show flex flex-col md:flex-row items-center gap-6 md:gap-14 mb-16 md:mb-32">
                    <div className="flex flex-col md:ml-20">
                        <Link href="https://github.com/gabewolford/islamorada-fishing" target="_blank">
                            <h4 className="text-2xl md:text-3xl hover:text-orange font-md leading-7 mb-1 transition ease-in-out duration-300">islamorada fishing guides & charters</h4>
                        </Link>
                        <p className="text-md">react application</p>
                        <p className="text-xs mb-2 text-dark-grey">april 2023</p>
                    
                        <p className="text-sm mb-2">information architecture overhaul, SEO, site migration, and frontend facelift using react, node, tailwind, vercel</p>
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
                        
                            <p className="text-sm mb-2">react, express, mongoDB, node, heroku, javascript, tailwind, figma, vs code</p>
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
                    
                        <p className="text-sm mb-2">django, python, heroku, postgreSQL, bootstrap, jQuery, geocoder, crispy forms, figma, vs code</p>
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
                        <img src='/images/islamorada.png' alt="gregslist screenshot" />
                    </div>
                    
                    <div>
                        <div className="flex flex-col md:mr-20">
                            <Link href="https://github.com/gabewolford/gregslist" target="_blank">
                                <h4 className="text-2xl md:text-3xl hover:text-orange font-md leading-7 mb-1 transition ease-in-out duration-300">gregslist</h4>
                            </Link>
                            <p className="text-md">full stack e-commerce application</p>
                            <p className="text-xs mb-2 text-dark-grey">feb 2023</p>
                        
                            <p className="text-sm mb-2">node, mongoDB, mongoose, jsx, heroku, postman, css, bootstrap, git/github, figma, vs code</p>
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
            </div>
        </>
    )
}