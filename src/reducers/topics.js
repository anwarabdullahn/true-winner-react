import { Types } from '../actions/topics';

const initialState = {
	topics: []
};

export default (state = initialState, actions) => {
	switch (actions.type) {
		case Types.GET_TOPIC_SUCCESS: {
			return {
				topics: actions.payload.topics
			};
		}
		default:
			return state;
	}
};
