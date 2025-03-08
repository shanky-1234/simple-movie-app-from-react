import Header from "./components/Header";
import Home from "./pages/Home";
import MovieCard from "./components/MovieCard";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import { MovieContext, MovieProvider } from "./components/Context";


export default function App(){
  return(
    <>
    <MovieProvider  >
      <Header />
      
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/favorites" element={<Favorites/>}/>
    
    </Routes>
     </ MovieProvider> 
     </>
   
  )
}