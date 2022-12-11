import Header from "./components/Header"
import Input from "./components/Input"
import "./App.css"

function App() {

  const API_URL = "http://www.omdbapi.com?apikey=3be35780"

  return (
    <>
      <Header />
      <Input />
    </>
  )
}

export default App
