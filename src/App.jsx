import Header from "./components/Header"
import Input from "./components/Input"
import Card from "./components/Card"
import { useEffect, useState } from "react"
import "./App.css"

const API_URL = "http://www.omdbapi.com?apikey=3be35780";

function App() {
    const [movies, setMovies] = useState([]);
    

    const searchMovie = async (title) => {
        const respone = await fetch(`${API_URL}&s=${title}`);
        const data = await respone.json();
    
        setMovies(data.Search);
      }
      useEffect(() => {
        searchMovie('Love');
      }, []);
  
  return (
    <>
      <Header />
      <Input />
      <div className="flex justify-center my-10">
          {
            movies?.length > 0
            ? (
              <div className="w-5/6 flex flex-wrap justify-center gap-8">
              {movies.map((movie) => (
                <Card movie={movie} />
              ))}
              </div>
            ) :
            (
              <div>
                <h1>No Movies!</h1>
              </div>
            )
          }
      </div>
    </>
  )
}

export default App
