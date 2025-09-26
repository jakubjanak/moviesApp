import type { Dispatch, SetStateAction } from "react"

export type DescriptionType = {
        description: string,
        setShowDesc: Dispatch<SetStateAction<boolean>>
}

export default function DescriptionModal({ description, setShowDesc }: DescriptionType) {
  return (
    <div className="w-full h-full bg-black/50 z-10 fixed top-0 left-0 flex justify-center items-center inset-0">
        <div className="bg-customBlack relative border border-customWhite rounded py-6 px-6 inset-0 w-1/2">
            <p className="text-base">{description}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute right-1 top-1 cursor-pointer" onClick={() => setShowDesc(false)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </div>
    </div>
  )
}
