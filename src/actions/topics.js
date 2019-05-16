export const Types = {
	GET_TOPIC_REQUEST: 'GET_TOPIC_REQUEST',
	GET_TOPIC_SUCCESS: 'GET_TOPIC_SUCCESS',
	VOTE_TOPIC_REQUEST: 'VOTE_TOPIC_REQUEST',
	VOTE_TOPIC_SUCCESS: 'VOTE_TOPIC_SUCCESS',
	VOTE_TOPIC_FETCHING: 'VOTE_TOPIC_FETCHING'
};

export const getTopicRequest = () => ({
	type: Types.GET_TOPIC_REQUEST
});

export const getTopicSuccess = (topics) => ({
	type: Types.GET_TOPIC_SUCCESS,
	payload: { topics }
});

export const voteTopicRequest = (id) => ({
	type: Types.VOTE_TOPIC_REQUEST,
	payload: { id }
});

export const voteTopicFetching = () => ({
	type: Types.VOTE_TOPIC_FETCHING,
	payload: {
		isVote: true
	}
});
