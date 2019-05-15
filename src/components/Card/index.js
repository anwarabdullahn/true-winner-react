import React from 'react';
import { Card, Button, Icon, Radio } from 'antd';
import './_index.scss';

export default (props) => {
	console.log('props', props);
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<form>
				<Card title="Vote" className="card-content">
					<Button type="danger" ghost>
						Open
					</Button>
					<h3>{props.data.title}</h3>
					<span>Created by Anwar Abdullah</span>
					<div className="announce">
						<p>
							<Icon type="sound" />
							{'  '}Announce
						</p>
						<p>20 participans</p>
					</div>
					<div className="poll">
						<Radio />
						<h4>Option 1</h4>
						<p>20</p>
						<div className="persentage" />
					</div>
				</Card>
				<Button className="submit-btn" type="primary" block>
					Vote
				</Button>
			</form>
		</div>
	);
};
