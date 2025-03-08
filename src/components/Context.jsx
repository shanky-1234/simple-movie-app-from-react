import {useContext, createContext, useEffect, useState} from 'react'

export const MovieContext = createContext()

export const useMovieContext = () => {
    return useContext(MovieContext)
}

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])
    
    useEffect(()=>{
        const setMovieStorage = localStorage.getItem('favorites')
        if(setMovieStorage){
            setFavorites(JSON.parse(setMovieStorage))
        }
    },[])

    useEffect(() =>{
        localStorage.setItem('favorites', JSON.stringify(favorites))

    },[favorites])

    const addToFavorites = (movie) => {
        return setFavorites(prevValue => {
            return [...prevValue, movie]
        })
    }

    const removeFavorites = (movieID) =>{
        return setFavorites(prevValue =>{
            return prevValue.filter((movie) => { return movie.id !== movieID})
        })
    }

    const checkFavorites = (movieID) => {
        return favorites.some(prevValue => prevValue.id === movieID)
    }

    const value = {
        favorites,addToFavorites,removeFavorites, checkFavorites
    }
    return<MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}