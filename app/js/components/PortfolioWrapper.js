import React from 'react';

export default class extends React.Component {
	render() {	
		let site = ['magazine', 'Translator', 'site1', 'site2', 'site4' ,'comments', 'site1']
		return (
			 <div className="dg-wrapper">
			 {
			 	site.map((val, index) => {
			 		return <div key={index} className="b-page__main_item">
	                    <div className={"site page" + (index + 1)}></div>
	                    <a className="link_button" href={"https://denisgayda.github.io/"+ val + "/"} data-title="Visit this website"></a>
	                </div>
			 	})
			 }
            </div>
		);
	}
}
