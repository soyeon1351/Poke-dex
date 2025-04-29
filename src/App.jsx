import { useEffect } from 'react'
import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMultiplePokemonById } from './RTK/thunk'

function App() {
  const dispatch = useDispatch()
  const pokemonData = useSelector(state => state.pokemon)
  console.log(pokemonData)
  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151))
  },[])

  return (
    <>
    <h1 className='text-[40px] text-center'>포켓몬 도감</h1>
    </>
  
  )
}

export default App
