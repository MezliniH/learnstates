import React from 'react'
import MovieCard from '/home/mylab/Templates/my-first-movie-app/src/components/movieCard/MovieCard.jsx'
import './MovieList.css'
function MovieList({movieListData , titleSearch , rateSearch}) {
    return (
        <div className="MovList" >
        
         {movieListData
            .filter(movie =>movie.title.toLowerCase().includes(titleSearch.toLowerCase())
            && movie.rating>=rateSearch)
            .map((movie,index)=> <MovieCard   key={index} movie={movie}/>)}
        </div>
    )
}

export default MovieList