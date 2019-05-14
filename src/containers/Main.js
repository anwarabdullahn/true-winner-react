import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTopicRequest } from '../actions/topics';

import Button from 'antd/lib/button';
class Main extends Component {
	componentDidMount() {
		this.props.getTopicRequest();
	}

	render() {
		console.log('props', this.props);
		return (
			<div>
				<h1>Hello World</h1>

				<Button type="primary">Button</Button>
			</div>
		);
	}

	componentWillUnmount() {
		console.log('unmount');
	}
}

const mapStateToProps = (state) => ({
	topics: state.topics
});

export default connect(mapStateToProps, {
	getTopicRequest
})(Main);
