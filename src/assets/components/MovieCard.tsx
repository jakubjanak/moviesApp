import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

type MovieCardProps = {
    title: string,
    image: string,
    onClick: () => void
}

export default function MovieCard({ title, image, onClick }: MovieCardProps) {

  gsap.registerPlugin(Observer);

  const movieCardContainer = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    Observer.create({
      target: movieCardContainer.current,
      onHover: () => {
        gsap.to(movieCardContainer.current, {
          y: -10
        })
      },
      onHoverEnd: () => {
        gsap.to(movieCardContainer.current, {
          y: 0
        })
      }
    })
  })

  return (
    <div className="aspect-[2/3] cursor-pointer" onClick={onClick} ref={movieCardContainer} >
        <img src={image} alt={title} className="rounded w-full h-full object-cover" />
    </div>
  )
}
