import React from 'react';
import { Card, Button, Icon, Radio, Tooltip } from 'antd';
import classnames from 'classnames';
import './_index.scss';
const RadioGroup = Radio.Group;

export default class index extends React.Component {
	constructor() {
		super();
		this.state = {
			options: 0,
			disable: false
		};
	}

	onChange = (e) => this.setState({ options: e.target.value });

	onDisable = () => this.setState({ disable: !this.state.disable });

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.options);
	};

	render() {
		return (
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<form onSubmit={this.handleSubmit}>
					<Card
						title="Vote"
						className="card-content"
						actions={[
							<Tooltip placement="topRight" title="Create Own Poll">
								<Icon type="edit" />
							</Tooltip>
						]}
					>
						<Button type={!this.state.disable ? 'danger' : 'primary'} ghost onClick={this.onDisable}>
							{!this.state.disable ? 'Open' : 'Closed'}
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
						<RadioGroup name="options" onChange={this.onChange}>
							{this.props.data.options &&
								this.props.data.options.map((opt) => (
									<div className="poll" key={opt.id}>
										<Radio value={opt.id} disabled={this.props.isVote || this.state.disable}>
											{opt.name}
										</Radio>
										<p>{opt.count}</p>
										<div className="persentage">
											<div
												className={classnames(
													this.props.isChose === opt.id ? 'bar-chose' : 'persentage-bar'
												)}
												style={{
													width: `${opt.count / this.props.data.voter * 100}%`,
													transition: 'width 1000ms ease-in-out',
													minHeight: '10px'
												}}
											/>
										</div>
									</div>
								))}
						</RadioGroup>
					</Card>
					<Button
						className="submit-btn"
						type="primary"
						htmlType="submit"
						block
						loading={this.props.isVote}
						disabled={this.state.options === 0 || this.state.disable}
					>
						{this.props.isChose === undefined ? 'Vote' : 'Vote again'}
					</Button>
				</form>
			</div>
		);
	}
}
