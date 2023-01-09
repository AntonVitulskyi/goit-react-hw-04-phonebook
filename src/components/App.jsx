import { Component } from 'react';

import Container from './Container/Container';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  getContactsFromStorage() {
    if (JSON.parse(localStorage.getItem('contacts') === null)) {
      return [
        { name: 'John Wick', number: '777-77-77', id: '1' },
        { name: 'Wait for me', number: '937-99-92', id: '2' },
      ];
    } else {
      return JSON.parse(localStorage.getItem('contacts'));
    }
  }

  componentDidMount() {
    this.setState({ contacts: this.getContactsFromStorage() });
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onSubmit = newContact => {
    this.setState(prevState => {
      if (
        prevState.contacts.some(contact => {
          return contact.name === newContact.name;
        })
      ) {
        return alert(`${newContact.name} is already in contacts!`);
      }
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  onFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  onClickDeleteContact = event => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== event.target.id
        ),
      };
    });
  };

  render() {
    return (
      <>
        <Container>
          <ContactForm onSubmit={this.onSubmit} />
          <Filter onFilterChange={this.onFilterChange} />
          <ContactList
            onClickDeleteContact={this.onClickDeleteContact}
            filter={this.state.filter}
            contacts={this.state.contacts}
          />
        </Container>
      </>
    );
  }
}
