import React from 'react';


export default class extends React.Component {
   
	render() {
		return (
			<div className="slide">
                <div className="block">
                    <img src={"image/"+this.props.site+".png"} />
                    <a className="link_button" href={"https://denisgayda.github.io/"+this.props.site+"/"} data-title="Viev source code on GitHub"></a>
                </div>
                <ul> Using technology
                    {
                        this.props.technology.map((val,index) => {
                            return <li key={index}>{val}</li>
                        })
                    }
                </ul>
            </div>
		);
	}
}