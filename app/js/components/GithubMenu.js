import React from 'react';


export default class extends React.Component {
   
	render() {
		return (
			<div id="menu">
                <ul>
                    <li className="fbar"></li>
                    {
                        this.props.site.map((val, index) => {
                            return <li key={index} className="menuItem"><a href=""><img src={"image/"+val+".min.png"} /></a></li>
                        })
                    }
                    <li className="fbar"></li>
                </ul>
            </div>
		);
	}
}