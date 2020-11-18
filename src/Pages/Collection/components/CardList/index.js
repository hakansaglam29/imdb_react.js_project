import React, {useContext} from "react";
import {Card} from '../Card';
import {CollectionContext} from "../../Collection";
import { CardListWrapper } from "./CardList.style"

export const CardList = () => {

  const {CollectionData} = useContext(CollectionContext);

  return (
    <CardListWrapper>
      {CollectionData?.map(
        (Collection, index) => (
        <Card
          key={index}
          name={Collection.name}
          poster_path={
            Collection.poster_path ? `https://image.tmdb.org/t/p/w500${Collection.poster_path}`
              : "https://img.izismile.com/img/img4/20110707/640/amazing_movie_posters_640_high_15.jpg"}
          overview={Collection.overview}
          id={Collection.id}
          release_date={Collection.release_date}
          vote_average={Collection.vote_average} 
          />)
      )}
    </CardListWrapper>
  )
}