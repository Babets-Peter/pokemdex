import React, { memo } from 'react'

import Types from './pokemonDetails/Types'
import Stats from './pokemonDetails/Stats'

const PokemonCard = ({ pokemons }) => {
return (
<div className={`content__view`}>
{pokemons.map((pokemon, ind) => {
	const { name, sprites: { front_default }, types, stats } = pokemon
	return(
	<div 
		key={ind}
		className={`content__view-card`}
		>
		<strong 
		className={`content__view-card-name`}
		>
			{name}
		</strong>
		<Stats stats={stats} name={name} img={front_default} />
		<Types types={types} />
	</div>
	)})}
</div>
  )
}

export default memo(PokemonCard);