import React from "react"
import videojs from "video.js"
import "video.js/dist/video-js.css"

type PlayerType = {
  url: string
  closeModalState: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Player({url, closeModalState}: PlayerType) {
  const prefix = "http://localhost:3000/"
  const videoRef = React.useRef<HTMLDivElement | null>(null)
  const playerRef = React.useRef<ReturnType<typeof videojs> | null>(null)

  React.useEffect(() => {
    if (playerRef.current) {
      playerRef.current.src([{ src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"}])
      return
    }

    const container = videoRef.current
    if (!container) return

    const el = document.createElement("video-js")
    el.classList.add("video-js", "vjs-big-play-centered", "max-w-[90vw]", "max-h-[90vh]", "rounded")
    container.appendChild(el)

    const player = (playerRef.current = videojs(el, {
      controls: true,
      responsive: true,
      sources: [{ src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" }],
      html5: {
        vhs: {
            enableLowInitialPlaylist: true,
            smoothQualityChange: true,
            overrideNative: true,
        }
      },
      playsInline: true,
    }))

    return () => {
      if (player && !player.isDisposed()) player.dispose()
      playerRef.current = null
      container.innerHTML = ""
    }
  }, [prefix, url])

  return (
    <div className="w-full h-full bg-black/50 z-10 fixed top-0 left-0 flex justify-center items-center inset-0">
      <div className="relative">
        <div ref={videoRef} data-vjs-player></div>
      </div>
      {/* Close button */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="size-6 absolute right-1 top-1 cursor-pointer text-white hover:text-gray-300 transition-colors" 
        onClick={() => closeModalState(false)}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </div>
  )
}