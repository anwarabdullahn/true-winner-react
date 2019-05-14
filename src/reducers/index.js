import { combineReducers } from 'redux';
import TopicsReducer from './topics';

export default combineReducers({
	topics: TopicsReducer
});
