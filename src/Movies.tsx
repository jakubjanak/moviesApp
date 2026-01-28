import SearchBtn from "./assets/components/SearchBtn"
import Header from "./assets/components/Header"
import { movies } from "./assets/scripts/movies"
import MovieCard from "./assets/components/MovieCard"
import { useState } from "react"
import { normalizeText } from "./assets/scripts/moviesFuncs"
import { useEffect } from "react"
import type { MovieData } from "./assets/scripts/types"
import MovieModal from "./assets/components/MovieModal"
import DescriptionModal from "./assets/components/DescriptionModal"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "./assets/scripts/firebird"

const PAGE_SIZE = 21;

function Movies() {
  const [searchVal, setSearchVal] = useState("")
  const [page, setPage] = useState(0)
  const [currentData, setCurrentData] = useState<MovieData | null>(null);
  const [currentTitle, setCurrentTitle] = useState("");
  const [showDescription, setShowDescription] = useState(false);

  gsap.registerPlugin(useGSAP)

  const moviesContainerRef = useRef<HTMLDivElement>(null)

  const filteredMovies = Object.entries(movies).filter(([title]) =>
    normalizeText(title).includes(normalizeText(searchVal))
  );

  const totalPages = Math.max(1, Math.ceil(filteredMovies.length / PAGE_SIZE));

  useEffect(() => {
    setPage(0);
  }, [searchVal])

  const start = page * PAGE_SIZE;
  const current = filteredMovies.slice(start, start + PAGE_SIZE);

  const goto = (p: number) => {
    const next = Math.min(Math.max(0, p), totalPages - 1);
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth"}); // návrat nahoru na stránku
  };

  const signWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user
      alert((`Přihlášen jako ${user.displayName} (${user.email})`))
    } catch (err) {
      console.error(err);
    }
  }

  return (
      <div className="h-full w-full my-4">
        <button className="pointer" onClick={signWithGoogle}>Přihlásit se</button>
        <Header>filmová galerie</Header>
        <SearchBtn value={searchVal} onChange={e => setSearchVal(e.target.value)} />
        <div ref={moviesContainerRef} className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 w-10/12 mx-auto gap-2 mt-4">
        {
          current.map(([title, data]) => (
            <MovieCard key={title} title={title} image={data.poster} onClick={() => {setCurrentData(data); setCurrentTitle(title)}}/>
          ))
        }
        </div>

        {
          currentData &&
          <MovieModal data={currentData} title={currentTitle} setUseState={setCurrentData} setShowDesc={setShowDescription} />
        }

        {
          showDescription == true && currentData !== null &&
          <DescriptionModal description={currentData?.description} setShowDesc={setShowDescription} />
        }

              {/* Pagination ovládání */}
      <div className="flex items-center justify-center gap-2 mt-6">
        <button className="cursor-pointer" onClick={() => goto(page - 1)} disabled={page === 0}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>

        </button>

        {/* Číselné stránky – pro 200+ položek klidně zkrať (např. ellipsy) */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded cursor-pointer ${i === page ? "purple_bg_color white_text_color cursor-pointer" : "purple_bg_color opacity-40"}`}
            onClick={() => goto(i)}
          >
            {i + 1}
          </button>
        ))}

        <button className="cursor-pointer" onClick={() => goto(page + 1)} disabled={page >= totalPages - 1}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
      </div>
  )
}

export default Movies

