type MovieCardProps = {
    title: string,
    image: string,
    onClick: () => void
}

export default function MovieCard({ title, image, onClick }: MovieCardProps) {
  return (
    <div className="aspect-[2/3] cursor-pointer" onClick={onClick}>
        <img src={image} alt={title} className="rounded w-full h-full object-cover" />
    </div>
  )
}
