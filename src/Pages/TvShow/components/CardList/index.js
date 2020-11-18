import React, {useContext} from "react";
import {Card} from '../Card';
import {TvShowContext} from "../../TvShow";
import { CardListWrapper } from "./CardList.style"

export const CardList = () => {

  const {TvShowData} = useContext(TvShowContext);

  return (
    <CardListWrapper>
      {TvShowData?.map(
        (TvShow, index) => (
        <Card
          key={index}
          original_name={TvShow.original_name}
          poster_path={
            TvShow.poster_path ? `https://image.tmdb.org/t/p/w500${TvShow.poster_path}`
              : "https://ih1.redbubble.net/image.475759197.7205/farp,small,wall_texture,product,750x1000.jpg"}
          overview={TvShow.overview}
          id={TvShow.id}
          release_date={TvShow.release_date}
          vote_average={TvShow.vote_average} 
          />)
      )}
    </CardListWrapper>
  )
}