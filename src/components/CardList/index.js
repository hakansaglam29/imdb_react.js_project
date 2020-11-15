import React, {useContext} from "react";
import {Card} from '../Card';
import {MovieContext} from "../../Movie";
import { CardListWrapper } from "./CardList.style"

export const CardList = () => {

  const {movieData} = useContext(MovieContext);

  return (
    <CardListWrapper>
      {movieData?.map(
        (movie, index) => (<Card
          key={index}
          title={movie.title}
          poster_path={
            movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://upload.wikimedia.org/wikipedia/en/f/f9/No-image-available.jpg"}
          overview={movie.overview}
          release_date={movie.release_date}
          vote_average={movie.vote_average} />)
      )}
    </CardListWrapper>
  )
}