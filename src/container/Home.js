import React, { useEffect } from 'react'

import SearchBox from '../template/SearchBox'
import SelectedBox from '../template/SelectedBox'
import PokemonCard from '../template/PokemonCard'
import ShowPerPage from '../template/ShowPerPage'
import MyLoader from '../template/Preloader'


import PokemonStore from '../store/index'
import { observer, inject } from 'mobx-react'


import Utils from '../utils/options'

import '../style/main.scss'

const Home = props => {
	
const { 
	pokemons, 
	getAllPokemons, 
	totalSelect, 
	showDataHandler, 
	totalOnPage, 
	searchHanlder, 
	filtredData,
	searchValue,
	selected,
	selectedHandler,
	isActive,
	isLoading
	 } = PokemonStore

useEffect( _ => {
	getAllPokemons()
},[totalOnPage, getAllPokemons])

if(isLoading) return (<MyLoader />)
   
   let options = Utils.createOptions(pokemons)
   let pokemonsData = pokemons.slice()
   searchValue && (pokemonsData = filtredData)
   !searchValue && selected.length && (pokemonsData = filtredData)

  return (
    <div className={`content`}>
    	<SearchBox searchHanlder={searchHanlder} />
    	<SelectedBox selectedHandler={selectedHandler} options={options} />
    	<ShowPerPage totalSelect={totalSelect} showDataHandler={showDataHandler} isActive={isActive} pokemons={pokemonsData}/>
    	<PokemonCard pokemons={pokemonsData} />
    </div>
  )
}

export default inject('PokemonStore')(observer(Home));