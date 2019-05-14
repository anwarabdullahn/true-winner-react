import React from 'react';
import { Card } from 'antd';
import './_index.scss';

export default (props) => {
	console.log('props', props);
	return (
		<Card className="card-content">
			<p>{props.data.title}</p>
			<p>Card content</p>
			<p>Card content</p>
		</Card>
	);
};
