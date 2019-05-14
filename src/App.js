import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { initTopics } from './api/topics';
import Main from './containers/Main';

initTopics();

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Main />
			</Provider>
		);
	}
}
