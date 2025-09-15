import { movies } from "./assets/scripts/movies"
import MovieCard from "./assets/components/MovieCard"

function Homepage() {

  return (
    <>
      {
        Object.entries(movies).map(([title, data]) => (
          <MovieCard title={title} data={data} />
        ))
      }
    </>
  )
}

export default Homepage
