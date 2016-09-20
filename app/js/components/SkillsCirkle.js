import React from 'react';

export default class extends React.Component {
     _setSpan(arg) {
        if (arg == 5) {
            return <p>
                <span className="circle_black"></span>
                <span className="circle_black"></span>
                <span className="circle_black"></span>
                <span className="circle_black"></span>
                <span className="circle_black"></span>
            </p>
        }
        if (arg == 4) {
            return <p>
                <span className="circle_black"></span>
                <span className="circle_black"></span>
                <span className="circle_black"></span>
                <span className="circle_black"></span>
                <span className="circle_white"></span>
            </p>
        }
        if (arg == 3) {
            return <p>
                <span className="circle_black"></span>
                <span className="circle_black"></span>
                <span className="circle_black"></span>
                <span className="circle_white"></span>
                <span className="circle_white"></span>
            </p>
        }
    }
	render() {
		return (
            <li>
                <p>{this.props.name}</p>
                {this._setSpan(this.props.count)}
            </li>
        );
	}
}
