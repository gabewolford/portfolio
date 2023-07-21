export default function NotFound() {
  return (
    <h1 className="grid h-screen place-items-center text-3xl mx-auto md:text-4xl ml-10 md:mx-12 animate__animated animate__fadeIn">
        <span>
            <span className="text-pink hover:text-green transition ease-in-out duration-500">Page </span>
            <span className="text-dark-grey hover:text-blue transition ease-in-out duration-500">Not </span>
            <span className="text-green hover:text-yellow transition ease-in-out duration-400">Found</span>
        </span>
    </h1>
  )
}