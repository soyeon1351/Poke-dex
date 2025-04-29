import { useEffect } from 'react'
import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMultiplePokemonById } from './RTK/thunk'
import { Link, Routes, Route } from 'react-router-dom'
import Favorite from './pages/Favorite'
import Search from './pages/Search'
import Main from './pages/Main'
import Detail from './pages/Detail'

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
    <nav>
      <Link to={'/'}>메인</Link>
      <Link to={'/detail/pokemon'}>상세정보</Link>
      <Link to={'/Search'}>검색</Link>
      <Link to={'/Favorite'}>찜목록</Link>
    </nav>
    <Routes>
      <Route path={'/'} element={<Main />}></Route>
      <Route path={'/detail/pokemon'} element={<Detail />}></Route>
      <Route path={'/Search'} element={<Search />}></Route>
      <Route path={'/Favorite'} element={<Favorite />}></Route>
    </Routes>
    </>
  
  )
}

export default App
