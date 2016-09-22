import React from 'react';
import { Link } from 'react-router';


export default class extends React.Component {
	render() {		
		return (
			<div>
				<header>
					<h1 className="my-name"><Link to='/portfolio'>Denis Gayda</Link></h1>
					<ul className="menu__list">
						<li className="menu__list_item portfolio"><Link to='/portfolio'>portfolio</Link></li>
						<li className="menu__list_item"><Link to='/resume'>resume</Link></li>
						<li className="menu__list_item"><Link to='/github'>github</Link></li>
					</ul>
				</header>
				{this.props.children}
			</div>
		);
	}
}

