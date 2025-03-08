import '../css/favorites.css'
import { useMovieContext } from '../components/Context'
import MovieCard from '../components/MovieCard'
export default function Favorites(){
    const {favorites} = useMovieContext()
    const displayMovies = favorites.map((movie)=>{
          return  <MovieCard movie={movie} key={movie.id}/> })
    return(

        <> 

            {favorites.length === 0 ?<div className='favorite-message'>
            <h2>NO FAVORITES TO SHOW</h2>
            <p>Start Adding movis to your favorites</p>
            </div> :
            <div className='movie-display'>
            {displayMovies}
            </div>}


            
        </>
    )
}