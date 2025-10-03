import React from "react"
import videojs from "video.js"
import "video.js/dist/video-js.css"
import "@videojs/http-streaming"
import type { default as VideoJsPlayer } from "video.js/dist/types/player"

type PlayerType = {
  url: string
  closeModalState: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Player({url, closeModalState}: PlayerType) {
  const prefix = "http://localhost:3000/"
  const videoRef = React.useRef<HTMLDivElement | null>(null)
  const playerRef = React.useRef<VideoJsPlayer | null>(null)

  React.useEffect(() => {
    // If player exists, update source
    if (playerRef.current && playerRef.current.isReady_) {
      console.log('Updating source to:', prefix + url)
      playerRef.current.src({
        src: prefix + "Auta.m3u8",
        type: 'application/x-mpegURL'
      })
      playerRef.current.load()
      return
    }

    const container = videoRef.current
    if (!container) return

    // Create video element
    const el = document.createElement("video")
    el.className = "video-js vjs-big-play-centered"
    el.setAttribute('playsinline', '')
    container.appendChild(el)

    // Initialize player
    const player = videojs(el, {
      controls: true,
      preload: 'metadata',
      autoplay: 'muted', // Use 'muted' to allow autoplay
      html5: {
        vhs: {
          enableLowInitialPlaylist: true,
          smoothQualityChange: true,
          overrideNative: !videojs.browser.IS_SAFARI,
        },
        nativeAudioTracks: false,
        nativeVideoTracks: false,
      }
    })

    player.addClass("rounded-xl shadow-2xl")
    player.el().classList.add("max-w-[90vw]", "max-h-[90vh]")

    playerRef.current = player

    // Wait for player ready before setting source
    player.ready(() => {
      console.log('Player ready, setting source:', prefix + url)
      player.src({
        src: prefix + "Auta.m3u8",
        type: 'application/x-mpegURL'
      })
      player.load()
    })

    // Debug logging
    player.on('loadstart', () => console.log('Loading started'))
    player.on('loadedmetadata', () => console.log('Metadata loaded'))
    player.on('loadeddata', () => console.log('Data loaded'))
    player.on('canplay', () => console.log('Can play'))
    player.on('playing', () => console.log('Playing'))
    player.on('waiting', () => console.log('Waiting for data'))
    player.on('stalled', () => console.log('Network stalled'))

    // Error handling
    player.on('error', () => {
      const error = player.error()
      console.error('Video.js error:', {
        code: error?.code,
        message: error?.message,
        status: error?.status,
      })
    })

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose()
      }
      playerRef.current = null
      container.innerHTML = ""
    }
  }, [prefix, url])

  return (
    <div className="w-full h-full bg-black/50 z-10 fixed top-0 left-0 flex justify-center items-center inset-0">
      <div className="relative">
        <div ref={videoRef} data-vjs-player className="w-full h-full"></div>
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