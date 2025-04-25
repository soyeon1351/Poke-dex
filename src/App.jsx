import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(()=>{
    const fetchAPI = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/1/")
      const data = await response.json()
      console.log(data.flavor_text_entries.find(el => el.language.name === 'ko').flavor_text)
      
      const pokemonData = {
        id : 1,
        name : data.names.find(el => el.language.name === 'ko').name,
        description : data.flavor_text_entries.find(el => el.language.name === 'ko').flavor_text,
        front : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        back : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
      }
      console.log(pokemonData)
    }
    fetchAPI()
  }, [])

  return (
    <>
    </>
  
  )
}

export default App
