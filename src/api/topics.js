export const initTopics = () =>
	sessionStorage.getItem('topics') === null &&
	sessionStorage.setItem(
		'topics',
		JSON.stringify([
			{
				id: 1,
				title: 'What Your Programming Language',
				options: [
					{ id: 1, name: 'Javascripts', count: 10 },
					{
						id: 2,
						name: 'Dart',
						count: 2
					}
				],
				voter: 12
			}
		])
	);

export const getTopics = () =>
	sessionStorage.getItem('topics') === null ? [] : JSON.parse(sessionStorage.getItem('topics'));
