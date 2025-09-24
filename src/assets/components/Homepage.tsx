import { Link } from "react-router"

export default function Homepage() {
  return (
    <div className="w-full h-screen flex justify-between">
        <div className="w-full h-full flex justify-center items-center border-r-2">
            <Link to="/filmy">
                <h1 className="uppercase text-5xl font-bold bitcount-ink-regular">filmy</h1>
            </Link>
        </div>
        <div className="w-full h-full flex justify-center items-center">
            <Link to="/serialy">
                <h1 className="uppercase text-5xl font-bold bitcount-ink-regular">seriály</h1>
            </Link>
        </div>
    </div>
  )
}
