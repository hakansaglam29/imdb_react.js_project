import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const movieDetailBaseUrl = "https://api.themoviedb.org/3/movie/"
const apiKey = "api_keys"; //temporary
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export default function MovieDetails() {
    const [movieDetails, setMovieDetails] = useState()
    const { id } = useParams();

    useEffect(()=>{
        axios.get(
            movieDetailBaseUrl+id, {params: {
            api_key: apiKey,
            }}
        )
        .then(res=>setMovieDetails(res?.data))
        .catch()
        .finally()
    },[id])

    return (
        <div>
            <h1>{movieDetails?.original_title}</h1>
            <img src={baseImageUrl+movieDetails?.poster_path} alt={"Movie Poster"}/>
            <p>{movieDetails?.overview}</p> 
        </div>
    )
}