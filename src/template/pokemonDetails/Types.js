import React, {memo} from 'react'

const Types = ({ types }) => {
  return (
	<div className={`content__view-card-type`}>
		<span className={`title`}>Types:</span>
		{types.map((type,ind) => 
			(<span key={ind}>#{type.type.name}</span>))
	}
	</div>
  )
}

export default memo(Types);