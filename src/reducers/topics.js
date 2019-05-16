import { Types } from '../actions/topics';

const initialState = {
	isVote: false
};

export default (state = initialState, actions) => {
	switch (actions.type) {
		case Types.GET_TOPIC_SUCCESS:
			return {
				...state,
				topics: actions.payload.topics,
				isVote: false
			};
		case Types.VOTE_TOPIC_REQUEST:
			return {
				...state,
				isVote: true
			};
		default:
			return state;
	}
};
