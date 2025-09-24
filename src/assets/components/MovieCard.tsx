type MovieCardProps = {
    title: string,
    image: string
}

export default function MovieCard({ title, image }: MovieCardProps) {
  return (
    <div className="aspect-[2/3]">
        <a href={"/movies/" + title}>
            <img src={image} alt={title} className="rounded w-full h-full object-cover" />
        </a>
    </div>
  )
}
