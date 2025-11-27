import { useState, type Dispatch, type SetStateAction } from "react";
import type { MovieData } from "../scripts/types";
import Player from "./Player";

type MovieCardProps = { data: MovieData } & { title: string, setUseState: Dispatch<SetStateAction<MovieData | null>>, setShowDesc: Dispatch<SetStateAction<boolean>> };

export default function MovieModal({data, title, setUseState, setShowDesc}: MovieCardProps) {
    const limitWords = 58
    const limitActors = 8
    const actorsLimitedArray: [string] = [""]
    const descriptionWords = data.description.split(" ")
    console.log(data.subtitles)
    const previewDescription = descriptionWords.slice(0, limitWords).join(" ")
    const isLong = descriptionWords.length > limitWords

    for(let i = 0; i < limitActors; i++) {
        if(actorsLimitedArray[0] == "") {
            actorsLimitedArray[0] = data.actors[i];
        } else {
            const temporaryValueForAddingToAnArray = data.actors[i];
            actorsLimitedArray.push(temporaryValueForAddingToAnArray);
        }
        console.log(actorsLimitedArray);
    }

    const showMoreActorsFunc = () => {
        setShowAllActors(!showAllActors);
    }

    const [showPlayer, setShowPlayer] = useState(false)
    const [showAllActors, setShowAllActors] = useState(false)

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
                <p className="font-bold text-lg">Délka filmu: <span className="font-normal text-base">{data.length + " min"}</span></p>
                {
                    showAllActors == false ? 
                        <p className="font-bold text-lg">Herci: <span className="font-normal text-base">{actorsLimitedArray.map((actor, indx) => (
                            indx + 1 < actorsLimitedArray.length ? actor + ", ": actor
                        ))}<button className="text-blue-400 cursor-pointer" onClick={showMoreActorsFunc}>...více</button></span></p>
                    :           
                        <p className="font-bold text-lg">Herci: <span className="font-normal text-base">{data.actors.map((actor, indx) => (
                            indx + 1 < data.actors.length ? actor + ", " : actor
                        ))}<button className="text-blue-400 cursor-pointer" onClick={showMoreActorsFunc}>...méně</button></span></p>   
                }
                <p className="font-bold text-lg">Režisér: <span className="font-normal text-base">{data.directors.map((director, indx) => (
                            indx + 1 < data.directors.length ? director + ", " : director
                        ))}</span></p>
                <p className="font-bold text-lg line-clamp-4">Popis: <span className="font-normal text-base">{isLong ? previewDescription : data.description}{isLong && ( <button className="text-blue-400 cursor-pointer" onClick={() => setShowDesc(true)}>...více</button> )}</span></p>
            </div>
            <button onClick={() => setShowPlayer(true)} className="font-bold text-customWhite bg-customPurple rounded py-1.5 px-3 cursor-pointer">Přehrát</button>
            <div className="w-full mt-1.5">
                {/* <img className="max-h-[55vh] max-w-[90vw] object-contain rounded" src={data.poster} alt={title} /> */}
                <iframe className="w-[768px] aspect-video rounded" src={data.trailerUrl} title={title + " - trailer"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute right-1 top-1 cursor-pointer" onClick={() => setUseState(null)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        
        </div>
        {
            showPlayer &&
            <Player url={data.url} subtitles={data.subtitles} title={title} closeModalState={setShowPlayer} />
        }
    </div>
  )
}
