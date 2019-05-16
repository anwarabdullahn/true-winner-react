export const initTopics = () =>
	sessionStorage.getItem('topics') === null &&
	sessionStorage.setItem(
		'topics',
		JSON.stringify(
			{
				id: 1,
				title: 'Kapan bukber nich ?',
				options: [ { id: 1, name: 'Minggu depan skhuyyy..', count: 10 }, { id: 2, name: 'Senin ini yokss takiss!!', count: 2 } ],
				voter: 12
			}
		)
	);

export const getTopics = () =>
	sessionStorage.getItem('topics') === null ? [] : JSON.parse(sessionStorage.getItem('topics'));
