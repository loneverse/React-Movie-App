import { useEffect, useState } from "react"

import MovieCard from "./MovieCard" 

import './App.css'
import searchIcon from './search.svg'

const API_URL = "<your_api_key> "


// const movie1 = {

//         "Title": "Lauf um Dein Leben - Vom Junkie zum Ironman",
//         "Year": "2008",
//         "imdbID": "tt0954542",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BMDJhZjA5MWEtOTE5Yy00MWJiLTgwNjQtMDliOWI0NWJmZDZkXkEyXkFqcGdeQXVyMjY1ODY2Ng@@._V1_SX300.jpg"
// }


const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
 
    const searchMovies = async (title) => {
         const response = await fetch(`${API_URL}&s=${title}`)
         const data = await response.json()

         setMovies(data.Search)

    }

    // Use effects to load componets on Application load
    useEffect(() => {
        searchMovies("Ironman")

    },[]);


    return(
        <div className="app">
            <h1>Movie It</h1>

            <div className="search">
                <input
                    placeholder="Search any Movie"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} //Set Target text Dynamically search
                />
                <img 
                    src={searchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)} 
                />
            </div>


            {movies?.length > 0 
                    ?(
                       <div className="container">
                        {movies.map((movie) => (
                           <MovieCard movie={movie}/> 
                        ))}
                       </div>
                    ):(
                        <div className="empty">
                            <h2>No Movies Found</h2>
                        </div>
                    )}
        </div>
    )
}

export default App
