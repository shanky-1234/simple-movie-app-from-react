    import poster from '../assets/postertest.jpg'
    import '../css/homepage.css'
    import { useState, useEffect } from "react"
    import MovieCard from "../components/MovieCard"
    import {popularMovies, searchMovies} from '../assets/services/moviedata'
    import { useMovieContext } from '../components/Context'

    export default function Home(){

        const [search, setSearch] = useState("")
        const [movies, setMovie] = useState([])
        
        const [error, setError] = useState(null)
        const [loading, setLoading] = useState(true)
        const displayMovies = movies.map((movie)=>{
      return  <MovieCard movie={movie} key={movie.id}/> 
    }
    )

   
    useEffect(()=>{
            const loadPopularMovies = async() =>{
                try {
                    const popular = await popularMovies()
                    
                    setMovie(popular)
                   
                } catch (error) {
                    
                    console.log('error due to',error)
                    setError('Failed')

                }
                finally{
                    setLoading(false)
                }
            }
            loadPopularMovies()        
    },[])
console.log(movies)
    
    

        // For Form
        async function handleSearch(event){
            event.preventDefault()
            
        const formData = new FormData(event.target);
        const getMovieName = formData.get("movieSearch"); 
        if (getMovieName.trim() === ''){
            return
        }
        setSearch(getMovieName)
        

                try{
                    const response = await searchMovies(getMovieName)
                    setMovie(response)
                }
                catch (error){
                    setError(error)
                }
                finally{
                    setLoading(false)
                }
            
            
        }

        return(
            <>
                <div className="search-bar">
                    <form onSubmit={handleSearch}>
                        <input type="text" name="movieSearch" id="movieSearch" placeholder="Search Any Movies, TV shows"  />
                        <button className='submit-button'>Search</button>
                        </form>
                </div>
                <div className='movie-display'>
                {/* {search != '' &&moviesMap} */}
   
               {displayMovies}
                </div>
            </>
        )
    }