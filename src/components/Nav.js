import piggy from '../porco.png'
import React from 'react'
import Filter from './Filter'


const Nav = (props) => {

	const handleGreasedClick = (event) =>{
		props.handleGreasedClick(event)


	}
	return (
		<div className="navWrapper">
			<div>
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			<span className="normalText">A React App for County Fair Hog Fans</span><br/>
			</div>
			</div>

			<div id='row'>
	<button onClick={handleGreasedClick}>{props.greased ? 'See All Hogs' : 'See Greased Hogs'}</button>  SortHogs: <Filter handleSort={props.handleSort}/>
			</div>

		</div>
	)
}

export default Nav
