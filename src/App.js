import React, { Component } from 'react';
import shortid from 'shortid';
import Section from '../src/components/Section/Section';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';

class App extends Component {
	state = {
		contacts: [
			{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
			{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
		],
		filter: '',
	};

	checkForMatch = () => {
		return this.state.contacts.some(
			contact => contact.name === this.state.name
		);
	};

	handleFormChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleFormSubmit = e => {
		e.preventDefault();

		const { name, number } = e.target.elements;

		const newContact = {
			id: shortid.generate(),
			name: name.defaultValue,
			number: number.defaultValue,
		};

		const isMatch = this.checkForMatch();

		if (isMatch) {
			alert(`${this.state.name} is already in contacts.`);
		} else {
			this.setState(prevState => ({
				contacts: [...prevState.contacts, newContact],
				name: '',
				number: '',
			}));
		}
	};

	handleDelete = e =>
		this.setState({
			contacts: this.state.contacts.filter(el => el.id !== e.target.id),
		});

	getFilterValue = e => this.setState({ filter: e.target.value });

	getFilteredContacts = () => {
		const { contacts, filter } = this.state;
		return contacts.filter(item =>
			item.name.toLowerCase().includes(filter.toLowerCase())
		);
	};

	render() {
		const { contacts, filter } = this.state;
		const filteredContacts = this.getFilteredContacts(filter, contacts);
		return (
			<>
				<Section title={'Phonebook'}>
					<ContactForm
						name={this.state.name}
						number={this.state.number}
						handleSubmit={this.handleFormSubmit}
						handleRemovee={this.handleFormChange}
					/>
				</Section>
				<Section title={'Contacts'}>
					<Filter
						length={contacts.length}
						filter={filter}
						handleChangeFilter={this.getFilterValue}
					/>
					<ContactList
						contactList={filteredContacts}
						handleRemove={this.handleDelete}
					/>
				</Section>
			</>
		);
	}
}

export default App;
