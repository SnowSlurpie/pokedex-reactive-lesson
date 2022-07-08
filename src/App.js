import { useState, useEffect } from 'react'

//3rd party packages belong at bottom under react stuff. best practice to keep them at the bottom.

import Header from './components/header'

import SearchForm from './components/searchForm'

import PokemonDetails from './components/pokemonDetails'

import Spinner from './components/spinner'

function App(){
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('sylveon')  
  
  useEffect(() => {
    getPokemon()
  }, [])

  const getPokemon = () => {
    setLoading(true)
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
      .then (res => res.json())
      .then (json => setPokemon(json))
      .catch(err => setError('Pokemon not found'))
      .finally(() => setLoading(false))
  }
const renderUI = () => {
  if (loading) 
      return <Spinner />
    else if (error) 
      return <p className='error'>{error}</p>
    else if (pokemon)
      return <PokemonDetails pokemon={pokemon} />
    else if (!searchTerm)
      return <p>Search a Pokemon to get started!</p>
    else
      return null
    }
  return (
    <div>
      <Header />
      <SearchForm />
      <PokemonDetails />
      <Spinner />
    </div>
  );
}

export default App;