export const Types = {
	GET_TOPIC_REQUEST: 'GET_TOPIC_REQUEST',
	GET_TOPIC_SUCCESS: 'GET_TOPIC_SUCCESS'
};

export const getTopicRequest = () => ({
	type: Types.GET_TOPIC_REQUEST
});

export const getTopicSuccess = ({ topics }) => ({
	type: Types.GET_TOPIC_SUCCESS,
	payload: {
		topics
	}
});
