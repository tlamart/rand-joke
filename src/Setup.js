import React from 'react';

class Setup extends React.Component {
	render() {
		return (
			<p style={{fontWeight: "bold"}}id="setup">{ this.props.setup }</p>
		);
	}
}

export default Setup;