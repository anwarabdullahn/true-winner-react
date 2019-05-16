import { takeEvery, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/topics';
import * as api from '../api/topics';

function* getTopics() {
	try {
		const result = yield call(api.getTopics);
		yield put(actions.getTopicSuccess(result));
	} catch (e) {
		console.log('error get topic', e);
	}
}

function* watchGetTopicsRequest() {
	yield takeEvery(actions.Types.GET_TOPIC_REQUEST, getTopics);
}

function* voteTopic(action) {
	try {
		yield call(api.voteTopic, { id: action.payload.id });
		yield call(getTopics);
	} catch (e) {
		console.log('error vote topic', e);
	}
}

function* watchVoteTopicRequest() {
	yield takeLatest(actions.Types.VOTE_TOPIC_REQUEST, voteTopic);
}

const topicsSaga = [ fork(watchGetTopicsRequest), fork(watchVoteTopicRequest) ];

export default topicsSaga;
