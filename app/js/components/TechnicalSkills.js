import React from 'react';
import SkillsCirkle from './SkillsCirkle';

export default class extends React.Component {
	render() {	
		let skillsFirst = [{'name' :'HTML/HTML5', 'count' : 5}, {'name' :'CSS3 via Sass', 'count' : 5}, {'name' :'Bootstrap', 'count' : 4}, {'name' :'Javascript / ES 2015', 'count' : 4}, {'name' :'jQuerry' , 'count' : 4}]	
		let skillsSecond = [{'name' :'Jade', 'count' : 5}, {'name' :'Gulp', 'count' : 5}, {'name' :'AJAX', 'count' : 4}, {'name' :'Git', 'count' : 4}, {'name' :'React', 'count' : 3}]
		return (
			<div className="section__column">
				<ul className="section__column_item">
				{
				 	skillsFirst.map((obj, index) => {
				 		return <SkillsCirkle key={index} name={obj.name} count={obj.count} />
				 	})
				}
	            </ul>
	           <ul className="section__column_item">
				{
				 	skillsSecond.map((obj, index) => {
				 		return <SkillsCirkle key={index} name={obj.name} count={obj.count} />
				 	})
				}
	            </ul>
	        </div>
		);
	}
}
