import Seo from "@/componets/Seo";
import Link from "next/link";
import { useState, useEffect } from "react";
const API_KEY = "fbea410dc10bda1a3c8129fba3707eb4";

export default function Home({ results }) {
  console.log(results);
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <Link
          key={movie.id}
          href={{
            pathname: `/movies/${movie.id}`,
            query: { title: movie.original_title },
          }}
          as={`/movies/${movie.id}`}
        >
          <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        </Link>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3000/api/movies`);
  const { results } = await response.json();
  return {
    props: {
      results,
    },
  };
}
