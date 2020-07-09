import React from 'react';

class Delivery extends React.Component {
	render() {
		return (<p style={{fontStyle: "italic"}}id="delivery" className="hide">{ this.props.delivery }</p>);
	}
}

export default Delivery;