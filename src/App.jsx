import Header from "./components/Header"
import Input from "./components/Input"
import Card from "./components/Card"
import { IconSearch } from "@tabler/icons";
import { useEffect, useState } from "react"
import "./App.css"

const API_URL = "http://www.omdbapi.com?apikey=3be35780";

function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovie = async (title) => {
        const respone = await fetch(`${API_URL}&s=${title}`);
        const data = await respone.json();
    
        setMovies(data.Search);
      }
      useEffect(() => {
        searchMovie('cinta');
      }, []);
  
  return (
    <>
      <Header />
        <h1 className="w-full text-center text-slate-800 text-3xl font-bold py-10">Search Movie</h1>
          <section className="w-full mt-10 flex flex-wrap justify-center">
            <div className="w-1/2 flex items-center gap-x-1">
              <Input setSearchTerm={setSearchTerm} />
              <button id="search-button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-sm px-5 py-2.5 focus:outline-none" onClick={() => searchMovie(searchTerm) }><IconSearch />
              </button>
            </div>
          </section>
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
