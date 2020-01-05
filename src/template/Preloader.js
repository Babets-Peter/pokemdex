import React from 'react'
import { Placeholder } from 'react-preloading-screen'

import '../style/preloader.scss'

const MyLoader = props => {
  return (
  <Placeholder> 
    <div className="container">
		<h1>Loading</h1>
		<div className="item-1"></div>
		<div className="item-2"></div>
		<div className="item-3"></div>
		<div className="item-4"></div>
		<div className="item-5"></div>
	</div>
  </Placeholder> 
  )
}

export default MyLoader;