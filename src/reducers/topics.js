import { Types } from '../actions/topics';

const initialState = {
	topics: [
		{
			id: 1,
			title: 'What Your Programming Language',
			options: [
				{
					id: 1,
					name: 'Javascripts',
					count: 10
				},
				{
					id: 2,
					name: 'Dart',
					count: 2
				}
			],
			voter: 12
		}
	]
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
