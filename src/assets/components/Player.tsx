import type { Dispatch, SetStateAction } from "react"

type PlayerType = {
    url: string
    closeModalState: Dispatch<SetStateAction<boolean>>
}

export default function Player({url, closeModalState}: PlayerType) {
    const prefix = "http://localhost:3000/"

    console.log(url)

  return (
    <div className="w-full h-full bg-black/50 z-10 fixed top-0 left-0 flex justify-center items-center inset-0">
      <video controls className="max-w-[90vw]">
        <source src={prefix + "Prci_prci_prcičky_4_Na_Táboře_2005.mkv"} type="video/mp4" />
      </video>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute right-1 top-1 cursor-pointer" onClick={() => closeModalState(false)}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </div>
  )
}
