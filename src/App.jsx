import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(()=>{
    const fetchAPI = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/1/")
      const data = await response.json()
      console.log(data)
    }
    fetchAPI()
  }, [])

  return (
    <>
    </>
  
  )
}

export default App
