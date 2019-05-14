import reducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

export default createStore(reducer, applyMiddleware(createSagaMiddleware()));

createSagaMiddleware().run(rootSaga);
