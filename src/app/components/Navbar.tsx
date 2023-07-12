import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="fixed z-50">
            <Link 
                href='/'
                className="fixed text-sm top-8 left-8 px-2 py-1 bg-transparent rounded lg:top-8 lg:left-8 hover:text-pink hover:underline hover:underline-offset-8 hover:decoration-2 hover:font-bold transtion ease-in-out duration-300"
                >
                home
            </Link>

            <Link 
                href='/work'
                className="fixed text-sm top-8 right-8 px-2 py-1 bg-transparent rounded lg:top-8 lg:right-8 hover:text-green hover:underline hover:underline-offset-8 hover:decoration-2 hover:font-bold transtion ease-in-out duration-300"
                >
                work
            </Link>


            <Link 
                href='/me'
                className="fixed text-sm bottom-8 left-8 px-2 py-1 bg-transparent rounded lg:bottom-8 lg:left-8 hover:text-orange hover:underline hover:underline-offset-8 hover:decoration-2 hover:font-bold transtion ease-in-out duration-300"
                >
                me
            </Link> 

            <div>
                <a href="mailto:gabewolford@gmail.com" 
                className="fixed text-sm bottom-8 right-8 px-2 py-1 bg-transparent rounded lg:bottom-8 lg:right-8 hover:text-yellow hover:underline hover:underline-offset-8 hover:decoration-2 hover:font-bold transtion ease-in-out duration-300">contact</a>
            </div>
        </nav>
    )
}