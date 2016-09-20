import React from 'react';
import PortfolioWrapper from './PortfolioWrapper';

export default class extends React.Component {
    _setFunction() {
        var width = $('#dg-container').width();
        $('#dg-container').gallery(width);
    }
    componentDidMount() {
        this._setFunction()
    }
	render() {
		return (
			<section id="dg-container" className="dg-container wrapper">
               <PortfolioWrapper />
                <nav>   
                    <span className="dg-prev"></span>
                    <span className="dg-next"></span>
                </nav>
                {this._setFunction()}
            </section>
		);
	}
}