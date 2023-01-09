import React from 'react';
import PropTypes from 'prop-types';

import ContactItem from 'components/ContactItem/ContactItem';
import styles from '../ContactList/ContactList.module.css';

export default function ContactList({
  contacts,
  filter,
  onClickDeleteContact,
}) {
  const filteredContacts = contacts.filter(contact => {
    return contact.name
      .toLowerCase()
      .trim()
      .includes(filter.toLowerCase().trim());
  });

  return (
    <>
      <h1 className={styles.title}>Contacts</h1>
      <ul className={styles.list}>
        {filteredContacts.map(contact => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onClickDeleteContact={onClickDeleteContact}
          />
        ))}
      </ul>
    </>
  );
}

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  onClickDeleteContact: PropTypes.func,
};
