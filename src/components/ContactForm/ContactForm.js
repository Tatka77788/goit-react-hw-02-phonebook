import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import inputId from '../../util/shortid';

export default class ContactFrom extends Component {
	state = { name: '', number: '' };

	static propTypes = {
		handleSubmit: PropTypes.func.isRequired,
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	reset = e => {
		e.preventDefault();
		this.props.handleSubmit(e);
		this.setState({ name: '', number: '' });
	};

	render() {
		const { name, number } = this.state;
		return (
			<form className={styles.form} onSubmit={this.reset}>
				<h3 className={styles.h3} htmlFor={inputId.name}>
					Name{' '}
				</h3>
				<input
					type="text"
					value={name}
					onChange={this.handleChange}
					id={inputId.name}
					name="name"
					className={styles.input}
				/>

				<h3 className={styles.h3} htmlFor={inputId.number}>
					Number
				</h3>
				<input
					type="text"
					value={number}
					onChange={this.handleChange}
					id={inputId.number}
					name="number"
					className={styles.input}
				/>
				<button type="submit" className={styles.submit}>
					Add contact
				</button>
			</form>
		);
	}
}
