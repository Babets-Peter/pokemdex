import React, {memo} from 'react'

const Stats = ({stats, img, name}) => {
  return (
  	<div className={`content__view-card-stats`}>
  		<div className={`content__view-card-stats-block`}>
			<span className={`title`}>Stats:</span>
			{stats.map((stat,ind) => 
				(<span key={ind}>{stat.stat.name}:&nbsp;{stat.base_stat}</span>))
			}
		</div>
		<div className={`content__view-card-stats-img`}>
    		<img src={img} alt={name} title={name} />
		</div>
	 </div>
  )
}

export default memo(Stats);