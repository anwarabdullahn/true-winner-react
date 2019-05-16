import React from 'react';
import { Card, Button, Icon, Radio } from 'antd';
import './_index.scss';
const RadioGroup = Radio.Group;

export default class index extends React.Component {
	render() {
		console.log('props', this.props);
		return (
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<form>
					<Card title="Vote" className="card-content">
						<Button type="danger" ghost>
							Open
						</Button>
						<h3>{this.props.data.title}</h3>
						<span>Created by Anwar Abdullah</span>
						<div className="announce">
							<p>
								<Icon type="sound" />
								{'  '}Announce
							</p>
							<p>{this.props.data.voter} participans</p>
						</div>
						<RadioGroup name="options" defaultValue={1} style={{ marginTop: '10px' }}>
							{this.props.data.options &&
								this.props.data.options.map((opt) => (
									<div className="poll" key={opt.id}>
										<Radio value={opt.id} />
										<h4>{opt.name}</h4>
										<p>{opt.count}</p>
										<div className="persentage" />
									</div>
								))}
						</RadioGroup>
					</Card>
					<Button className="submit-btn" type="primary submit" block>
						Vote
					</Button>
				</form>
			</div>
		);
	}
}
