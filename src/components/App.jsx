import { useEffect } from 'react';
import { useState } from 'react';

import Container from './Container/Container';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

const App = () => {
  const getContactsFromStorage = () => {
     if (JSON.parse(localStorage.getItem('contacts') === null)) {
       return [
         { name: 'John Wick', number: '777-77-77', id: '1' },
         { name: 'Wait for me', number: '937-99-92', id: '2' },
       ];
     } else {
 
       return JSON.parse(localStorage.getItem('contacts'));
     }
   }
   
  const [contacts, setContacts] = useState(getContactsFromStorage)
  const [filter, setFilter] = useState('')


  useEffect(() => {
    if(!contacts) return;
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

 const onSubmit = newContact => {
      if (contacts.some(contact => {
          return contact.name === newContact.name;
        })
      ) {
        return alert(`${newContact.name} is already in contacts!`);
      }
      return setContacts(prevState => [...prevState, newContact])  ;
  };

 const onFilterChange = event => {
  setFilter(event.target.value)
  };

 const onClickDeleteContact = event => {
      return setContacts( contacts.filter(
        contact => contact.id !== event.target.id
      ))
  };

    return (
      <>
        <Container>
          <ContactForm onSubmit={onSubmit} />
          <Filter onFilterChange={onFilterChange} />
          <ContactList
            onClickDeleteContact={onClickDeleteContact}
            filter={filter}
            contacts={contacts}
          />
        </Container>
      </>
    );
  
}

export {App};