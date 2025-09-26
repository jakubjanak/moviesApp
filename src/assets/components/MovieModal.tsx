import type { Dispatch, SetStateAction } from "react";
import type { MovieData } from "../scripts/types";

type MovieCardProps = { data: MovieData } & { title: string, setUseState: Dispatch<SetStateAction<MovieData | null>>, setShowDesc: Dispatch<SetStateAction<boolean>> };

export default function MovieModal({data, title, setUseState, setShowDesc}: MovieCardProps) {
    const limitWords = 58
    const descriptionWords = data.description.split(" ")
    console.log(descriptionWords.length)
    const previewDescription = descriptionWords.slice(0, limitWords).join(" ")
    const isLong = descriptionWords.length > limitWords

  return (
    <div className="w-full h-full bg-black/50 z-10 fixed top-0 left-0 flex justify-center items-center inset-0">
        <div className="bg-customBlack relative rounded py-4 px-4 inset-0">
            <h1 className="text-2xl font-bold w-max">{title}</h1>
            <div className="flex flex-col gap-1 my-2 max-w-[45vw]">
                <p className="font-bold text-lg">Rok vydání: <span className="font-normal text-base">{data.year}</span></p>
                <p className="font-bold text-lg">Hodnocení: <span className="font-normal text-base">{data.review}</span></p>
                <p className="font-bold text-lg">Žánry: <span className="font-normal text-base capitalize">{data.genre.map((genreType, indx) => (
                    indx + 1 < data.genre.length ? genreType + " / " : genreType
                ))}</span></p>
                <p className="font-bold text-lg">Délka filmu: <span className="font-normal text-base">{data.length}</span></p>
                <p className="font-bold text-lg line-clamp-4">Popis: <span className="font-normal text-base">{isLong ? previewDescription : data.description}{isLong && ( <button className="text-blue-400 cursor-pointer" onClick={() => setShowDesc(true)}>...více</button> )}</span></p>
            </div>
            <button className="font-bold text-customWhite bg-customPurple rounded py-1.5 px-3">Přehrát</button>
            <div className="w-full mt-1.5">
                {/* <img className="max-h-[55vh] max-w-[90vw] object-contain rounded" src={data.poster} alt={title} /> */}
                <iframe className="w-[768px] aspect-video rounded" src={data.trailerUrl} title={title + " - trailer"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute right-1 top-1 cursor-pointer" onClick={() => setUseState(null)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

        </div>
    </div>
  )
}
