import { takeEvery, call, fork } from 'redux-saga/effects';
import * as actions from '../actions/topics';
import * as api from '../api/topics';

function* getTopics() {
	try {
		const result = call(api.getTopics);
	} catch (e) {}
}

function* watchGetTopicsRequest() {
	yield takeEvery(actions.Types.GET_TOPIC_REQUEST, getTopics);
}

const topicsSaga = [ fork(watchGetTopicsRequest) ];

export default topicsSaga;
