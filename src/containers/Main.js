import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTopicRequest, voteTopicRequest } from '../actions/topics';
import './Main.scss';
import Card from '../components/Card';

class Main extends Component {
	componentDidMount() {
		this.props.getTopicRequest();
	}

	handleSubmit = (id) => {
		this.props.voteTopicRequest(id);
	};

	render() {
		console.log('this.props', this.props);
		return (
			<div className="main-content">
				{this.props.topics.topics && (
					<Card
						data={this.props.topics.topics}
						onSubmit={this.handleSubmit}
						isVote={this.props.topics.isVote}
					/>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	topics: state.topics
});

export default connect(mapStateToProps, {
	getTopicRequest,
	voteTopicRequest
})(Main);
