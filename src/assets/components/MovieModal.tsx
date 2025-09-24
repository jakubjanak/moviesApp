import type { Dispatch, SetStateAction } from "react";
import type { MovieData } from "../scripts/types"

type MovieCardProps = { data: MovieData } & { title: string, setUseState: Dispatch<SetStateAction<MovieData | null>> };

export default function MovieModal({data, title, setUseState}: MovieCardProps) {
  return (
    <div className="w-full h-full bg-black/50 z-10 fixed top-0 left-0 flex justify-center items-center inset-0">
        <div className="bg-customBlack h-max w-max relative border border-customWhite rounded py-4 px-4 inset-0">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex flex-col gap-1 my-2">
                <p className="font-bold text-lg">Rok vydání: <span className="font-normal text-base">{data.year}</span></p>
                <p className="font-bold text-lg">Hodnocení: <span className="font-normal text-base">{data.review}</span></p>
                <p className="font-bold text-lg">Žánry: <span className="font-normal text-base capitalize">{data.genre.map((genreType, indx) => (
                    indx + 1 < data.genre.length ? genreType + " / " : genreType
                ))}</span></p>
                <p className="font-bold text-lg">Délka filmu: <span className="font-normal text-base">{data.length}</span></p>
            </div>
                <button className="font-bold text-customWhite bg-customPurple rounded py-1.5 px-3">Přehrát</button>
            <div className="aspect-[2/3] rounded my-1.5">
                <img src={data.poster} alt={title} />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute right-1 top-1 cursor-pointer" onClick={() => setUseState(null)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

        </div>
    </div>
  )
}
