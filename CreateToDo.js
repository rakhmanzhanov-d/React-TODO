import React from "react";
import PropTypes from "prop-types";
import { Component } from "react";

export default class CreateToDo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: "",
			completed: false,
		};
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleTextChange(event) {
		this.content = event.target.value;
		this.setState(() => ({ content: this.content }));
	}

	handleSubmit() {
		if (this.props.onSubmit) {
			const newPost = {
				content: this.state.content,
				completed: this.state.completed,
				id: Date.now(),
				date: Date.now(),
			};
			this.props.onSubmit(newPost);
			this.setState(() => {
				return {
					content: "",
					completed: true,
				};
			});
		}
		console.log(this.state.content);
	}

	render() {
		return [
			<h1>Create To-Do</h1>,
			<div className="create-todo">
				<input
					type="text"
					placeholder="What needs to be done"
					onChange={this.handleTextChange}
					value={this.state.content}
				/>
				<input
					className="btn btn-primary"
					type="button"
					onClick={this.handleSubmit}
					value="CREATE"
				/>
			</div>,
		];
	}
}
