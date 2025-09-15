type MovieData = {
    year: number,
    review: number,
    genre: string[],
    poster: string,
    length: number,
}

type MovieCardProps = {
    title: string,
    data: MovieData
}

export default function MovieCard({ title, data }: MovieCardProps) {
  return (
    <div className="flex">
        <div>
            <h2 className="font-bold text-2xl">{title}</h2>
            <p className="font-medium text-lg">Rok vydání: <span className="font-normal">{data.year}</span></p>
            <p className="font-medium text-lg">ČSFD hodnocení: <span className="font-normal">{data.review}</span></p>
            <p className="font-medium text-lg">Délka: <span className="font-normal">{data.length}</span></p>
        </div>
        <div>
            <img src={data.poster} alt={title} />
        </div>
    </div>
  )
}
