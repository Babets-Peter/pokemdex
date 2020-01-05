import React, {memo} from 'react'

const ShowPerPage = ({ totalSelect, showDataHandler, isActive, pokemons }) => {
  return (
    <div className={`content__toolbar`}>
    	<strong className={`title`}>Show total cards per page</strong>
    	{totalSelect.map(select => (
    		<span 
    			key={select}
    			onClick={ _=> showDataHandler(select)}
          className={isActive === select ? `active` : ``}
    			>
    				{select}
    		</span> 
		))}
    <strong className={`title`}>Current show</strong>
      {pokemons.length}
    </div>
  )
}

export default memo(ShowPerPage);