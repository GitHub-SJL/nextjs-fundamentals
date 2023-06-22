import Seo from "@/componets/Seo";
import { useState, useEffect } from "react";
const API_KEY = "fbea410dc10bda1a3c8129fba3707eb4";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      const { results } = await response.json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      {/* movies가 존재하지않으면 Loading */}
      {!movies && <h4>Loading...</h4>}
      {/* movies?를 통해 movies가 없으면 map이 실행 X */}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
