export const initTopics = () =>
	sessionStorage.getItem('topics') === null &&
	sessionStorage.setItem(
		'topics',
		JSON.stringify({
			id: 1,
			title: 'Kapan bukber nich ?',
			options: [
				{ id: 1, name: 'Minggu depan skhuyyy..', count: 10 },
				{ id: 2, name: 'Senin ini yokss takiss!!', count: 2 }
			],
			voter: 12
		})
	);

export const getTopics = () =>
	sessionStorage.getItem('topics') === null ? [] : JSON.parse(sessionStorage.getItem('topics'));

export const voteTopic = ({ id }) =>
	new Promise(function(resolve, reject) {
		setTimeout(function() {
			const topic = JSON.parse(sessionStorage.getItem('topics')),
				index = topic.options.findIndex((opt) => id === opt.id);
			index === -1 && reject();
			topic.options[index].count += 1;
			topic.voter += 1;
			sessionStorage.setItem('topics', JSON.stringify(topic));
			return resolve({ id });
		}, 2300);
	});
