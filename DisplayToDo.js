import React from "react";

export default class DisplayToDo extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="todo">
				<h3>{this.props.content}</h3>
				<input
					type="checkbox"
					checked={this.props.completed}
					onClick={this.props.onCheck}
				/>
			</div>
		);
	}
}
