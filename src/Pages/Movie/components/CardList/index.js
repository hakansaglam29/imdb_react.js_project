import React, {useContext} from "react";
import {Card} from '../Card';
import {MovieContext} from "../../Movie";
import { CardListWrapper } from "./CardList.style"

export const CardList = () => {

  const {movieData} = useContext(MovieContext);

  return (
    <CardListWrapper>
      {movieData?.map(
        (movie, index) => (
        <Card
          key={index}
          title={movie.title}
          poster_path={
            movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://bashooka.com/wp-content/uploads/2013/01/movie-poster-mashups-19.jpg"}
          overview={movie.overview}
          id={movie.id}
          release_date={movie.release_date}
          vote_average={movie.vote_average} 
          />)
      )}
    </CardListWrapper>
  )
}