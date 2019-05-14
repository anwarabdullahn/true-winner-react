import { Types } from '../actions/topics';

const initialState = {};

export default (state = initialState, actions) => {
	switch (actions.type) {
		case Types.GET_TOPIC_SUCCESS:
			return {
				...state,
				topics: actions.payload.topics
			};
		default:
			return state;
	}
};
