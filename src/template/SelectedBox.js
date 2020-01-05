import React, { memo } from 'react'
import Select from 'react-select'

const SelectedBox = ({ selectedHandler, options }) => {
  return (
    <div className={`content__selected-box`}>
    	<Select 
	    	isMulti
        placeholder={`Select by type...`}
	        onChange={selectedHandler}
	        options={options}
    	/>
    </div>
  )
}

export default memo(SelectedBox);