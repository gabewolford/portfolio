import 'animate.css'    

export default function HomePage() {
    return (
        <>
            <head>
              <title>gabe wolford</title>
              <link rel="icon" href="/images/pink.png"/>
            </head>
            <h1 className="grid h-screen place-items-center text-3xl mx-auto md:text-4xl ml-10 md:mx-12 animate__animated animate__fadeIn">
                <div className="leading-tight tracking-normal cursor-default">
                    <span>hey there, i&apos;m </span>
                    <span className="text-dark-grey hover:text-blue transition ease-in-out duration-500"> gabe</span>
                    <span className="text-green hover:text-yellow transition ease-in-out duration-400">( )</span>
                <br/>
                    <span>i&apos;m a </span>
                    <span className="text-yellow hover:text-blue">&#123;</span>
                    <span className="text-brown hover:text-green transition ease-in-out duration-500">fullStack</span>
                    <span className="text-dark-grey">.</span>
                    <span className="text-orange hover:text-pink transition ease-in-out duration-500">developer</span>
                    <span className="text-dark-grey"></span>
                    <span className="text-yellow hover:text-blue transition ease-in-out duration-500">&#125;</span>
                    <span> based in </span>
                    <br/>
                    <span className="text-pink hover:text-green transition ease-in-out duration-500">&#91;</span>
                    <span className="text-orange">&apos;</span>
                    <span className="text-blue hover:text-yellow transition ease-in-out duration-500">portland</span>
                    <span className="text-orange">&apos;</span>
                    <span className="text-green">, </span>
                    <span className="text-orange">&apos;</span>
                    <span className="text-blue hover:text-yellow transition ease-in-out duration-500">oregon</span>
                    <span className="text-orange">&apos;</span>
                    <span className="text-pink hover:text-green transition ease-in-out duration-500">&#93;</span>
                </div>
            </h1>
        </>
    )
}