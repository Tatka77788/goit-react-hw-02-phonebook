import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Section from "../src/components/Section/Section";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";

const INITIALL_STATE = {
  contacts: [
    {
      id: "6b2b6280-28a2-4540-b798-c728e616b081",
      name: "Rosie Simpson",
      number: "459-12-56",
    },
    {
      id: "9eabec56-273c-497c-8785-e05d8f57949a",
      name: "Hermione Kline",
      number: "443-89-12",
    },
    {
      id: "1f3f0d57-3e62-4e6f-9a18-4e97d9200717",
      name: "Eden Clements",
      number: "645-17-79",
    },
    {
      id: "65b5bbb4-f3d9-4fc3-a12e-7231271b3296",
      name: "Annie Copeland",
      number: "227-91-26",
    },
  ],
  name: "",
  number: "",
  filter: "",
};

class App extends Component {
  state = { ...INITIALL_STATE };

  checkForMatch = () => {
    return this.state.contacts.some(
      (contact) => contact.name === this.state.name
    );
  };

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };

    const isMatch = this.checkForMatch();

    if (isMatch) { alert(`${this.state.name} is already in contacts.`);
     
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
        name: "",
        number: "",
      }));
    }
  };

  handleDelete = (e) =>
    this.setState({
      contacts: this.state.contacts.filter((el) => el.id !== e.target.id),
    });

  getFilterValue = (e) => this.setState({ filter: e.target.value });

  getFilteredContacts = (filter, contacts) => {
    if (this.state.contacts.length >= 2) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return this.state.contacts;
    }
  };
  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts(filter, contacts);
    return (
      <>
        <Section title={"Phonebook"}>
          <ContactForm
            name={this.state.name}
            number={this.state.number}
            handleSubmit={this.handleFormSubmit}
            handleChange={this.handleFormChange}
          />
        </Section>
        <Section title={"Contacts"}>
          <Filter handleChangeFilter={this.getFilterValue} />
          <ContactList
            contactList={filteredContacts}
            handleChange={this.handleDelete}
          />
        </Section>
      </>
    );
  }
}

export default App;
