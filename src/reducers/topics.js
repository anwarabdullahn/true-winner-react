import { Types } from '../actions/topics';

const initialState = {
	isVote: false
};

export default (state = initialState, actions) => {
	console.log('action', actions);
	switch (actions.type) {
		case Types.GET_TOPIC_SUCCESS:
			return {
				...state,
				topics: actions.payload.topics,
				isVote: false
			};
		case Types.VOTE_TOPIC_FETCHING:
			return {
				...state,
				isVote: actions.payload.isVote
			};
		case Types.VOTE_TOPIC_SUCCESS:
			return {
				...state,
				isChose: actions.payload.isChose
			};
		default:
			return state;
	}
};
