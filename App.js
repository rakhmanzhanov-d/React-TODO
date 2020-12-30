import React, { Component } from "react";

import CreateToDo from "./CreateToDo";
import DisplayToDo from "./DisplayToDo";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			done: 0,
			left: 0,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.crossLine = this.crossLine.bind(this);
	}

	componentDidMount() {
		console.log("component did mount");
	}

	crossLine(event) {
		const element = event.target.parentNode.childNodes[0];
		element.classList.toggle("crossed-line");
		if (element.classList.contains("crossed-line")) {
			this.setState(() => {
				return {
					done: this.state.done + 1,
					left: this.state.left - 1,
				};
			});
		} else {
			this.setState(() => {
				return {
					done: this.state.done - 1,
					left: this.state.left + 1,
				};
			});
		}
	}

	handleSubmit(newToDoItem) {
		this.setState((prevState) => {
			return {
				todos: prevState.todos.concat(newToDoItem),
				left: this.state.left + 1,
			};
		});
		console.log(this.state);
	}

	render() {
		return [
			<div className="counter">
				<div className="done">DONE: {this.state.done}</div>
				<div className="left">LEFT: {this.state.left}</div>
			</div>,
			<div className="todo-list">
				<CreateToDo onSubmit={this.handleSubmit} />,
				{this.state.todos.map((el) => {
					if (el.content !== "") {
						return (
							<DisplayToDo
								content={el.content}
								comleted={el.completed}
								onCheck={this.crossLine}
							/>
						);
					}
				})}
			</div>,
		];
	}
}
