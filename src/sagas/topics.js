import { takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/topics';

function* getTopics(){
    try {

    } catch (e) {

    }
}

function* watchGetTopicsRequest(){
    yield takeEvery(actions.Types.GET_TOPIC_REQUEST, getTopics)
}
