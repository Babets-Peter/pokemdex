import React, { memo } from 'react'

const SearchBox = ({ searchHanlder }) => {
  return (
    <div className={`content__search-box`}>
    	<input 
	    	type={`text`}
	    	onChange={searchHanlder}
	    	placeholder={`Search by name...`}
	    	className={`content__search-box_field`}
    	/>
    </div>
  )
}

export default memo(SearchBox);