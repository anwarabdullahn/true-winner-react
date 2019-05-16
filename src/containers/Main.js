import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTopicRequest } from '../actions/topics';
import './Main.scss';
import Card from '../components/Card';

class Main extends Component {
	componentDidMount() {
		this.props.getTopicRequest();
	}

	render() {
		console.log('this.props', this.props);
		return (
			<div className="main-content">
				{this.props.topics.topics && <Card data={this.props.topics.topics} />}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	topics: state.topics
});

export default connect(mapStateToProps, {
	getTopicRequest
})(Main);
