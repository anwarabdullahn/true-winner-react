import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTopicRequest } from '../actions/topics';

class Main extends Component {
	componentDidMount() {
		this.props.getTopicRequest();
	}

	render() {
		console.log('props', this.props);
		return (
			<div>
				<h1>Hello World</h1>
			</div>
		);
	}
}

export default connect(null, {
	getTopicRequest
})(Main);
