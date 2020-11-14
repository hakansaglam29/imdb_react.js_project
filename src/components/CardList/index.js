import React, { useState, useEffect } from "react";
import { Card } from "../Card";
import axios from "axios";
import { CardListWrapper } from "./CardList.style"
import { SearchBar } from '../SearchBar';

const apiKey = "apiKey"; //temporary
const baseUrl = "https://api.themoviedb.org/3/search/movie";

export const CardList = (props) => {
    const [movieData, setMovieData] = useState(null);
    const [inputData, setInputData] = useState('live')

    useEffect(() => {
        axios.get(baseUrl, {
            params: {
                api_key: apiKey,
                query: inputData,
                page:2,
            }
        })
            .then((res) => setMovieData(res.data.results))
    }, [inputData])


    return (
        <>
            <SearchBar onChange={e => setInputData(e.target.value)} />
            <CardListWrapper>
                {movieData && movieData.map(movie => {
                    return <Card title={movie.title} poster_path={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} overview={movie.overview} release_date={movie.release_date} vote_average={movie.vote_average}/>

                })

                }
            </CardListWrapper>
        </>
    )
}
