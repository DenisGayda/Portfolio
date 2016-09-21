import React from 'react';

export default class extends React.Component {
	render() {	
		let site = ['magazine', 'translator', 'lending', 'euro-2016', 'notify' ,'comments', 'plus_zero']
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
