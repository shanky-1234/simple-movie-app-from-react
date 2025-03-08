import '../css/componetcard.css'

import React from 'react'
import { useMovieContext } from './Context'


export default function MovieCard({movie}){
    const {addToFavorites,removeFavorites, checkFavorites } = useMovieContext()
    const favorties = checkFavorites(movie.id)
    function submitFavorites(event){
        event.preventDefault()
        console.log(favorties)
        if(favorties){
            removeFavorites(movie.id)
        }
        else{
            addToFavorites(movie)
        }
    }
     
    
  
    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img className="poster"src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster" />
                
                <div className="like-button">
                    <button className={`fav-button ${favorties ? 'active' : ''}`} onClick={submitFavorites}><svg width="16px" height="16px" viewBox="0 0 16 16" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
<path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" fill="#ffffff"/>
</svg></button>
                </div>
                </div>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date}</p>
                    <div className="imdb rating">
                        <p>{movie.imdbRating}</p>
                    </div>
                </div>
            
        </div>
    )
}