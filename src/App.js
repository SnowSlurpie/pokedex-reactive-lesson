import Header from './components/header'

import SearchForm from './components/searchForm'

import PokemonDetails from './components/pokemonDetails'

import Spinner from './components/spinner'

function App(){
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