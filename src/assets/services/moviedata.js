
const MOVIE_API = '3b15114e07b000447874c46dc3808090'
const MOVIE_BASE ='https://api.themoviedb.org/3'

export const popularMovies = async() =>{
    const response = await fetch(`${MOVIE_BASE}/movie/popular?api_key=${MOVIE_API}`)
    const data = await response.json()
    console.log(data.results)
    return data.results
}

export const searchMovies = async(searchValue) =>{
    const respone = await fetch(`${MOVIE_BASE}/search/movie?api_key=${MOVIE_API}&query=${encodeURIComponent(searchValue)}`)
    const data = await respone.json()
    console.log(data.results)
    return data.results
}

