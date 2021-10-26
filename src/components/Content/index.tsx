import { Container } from "./styles";
import { memo } from "react";
import { MovieCard } from "../MovieCard";

interface ContentProps {
  selectedGenre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  };

  movies: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>;
}

function ContentComponent({ selectedGenre, movies }: ContentProps) {

  return (
    <Container>
      <header className="header">
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main className="main">
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </Container>
  )
}

export const Content = memo(ContentComponent, (prevProps, nextProps) => {
  return Object.is(prevProps, nextProps);
})
