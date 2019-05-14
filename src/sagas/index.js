import { all } from 'redux-saga/effects';

import TopicsSagas from './topics';

export default function* rootSaga() {
	yield all([ ...TopicsSagas ]);
}
