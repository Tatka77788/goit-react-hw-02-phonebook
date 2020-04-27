import React, { Component } from 'react';
import shortid from 'shortid';
import Section from './components/Section/Section';
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

  handleFormSubmit = e => {
    e.preventDefault();

    const { name, number } = e.target.elements;
    const { contacts } = this.state;
    const newContact = {
      id: shortid.generate(),
      name: name.defaultValue,
      number: number.defaultValue,
    };

    if (contacts.find(contact => contact.name === name.defaultValue)) {
      // eslint-disable-next-line no-alert
      alert(`${name.defaultValue} is already in contacts.`);
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

  changeFilterValue = e => this.setState({ filter: e.target.value });

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts(filter, contacts);
    return (
      <>
        <Section title="Phonebook">
          <ContactForm handleSubmit={this.handleFormSubmit} />
        </Section>
        {contacts.length > 0 && (
          <Section title="Contacts">
            {contacts.length > 1 && (
              <Filter
                filter={filter}
                handleChangeFilter={this.changeFilterValue}
              />
            )}
            <ContactList
              contactList={filteredContacts}
              handleRemove={this.handleDelete}
            />
          </Section>
        )}
      </>
    );
  }
}

export default App;
