import React from 'react';
import PropTypes from 'prop-types';

import styles from '../ContactItem/ContactItem.module.css';

export default function ContactItem({
  name,
  number,
  id,
  onClickDeleteContact,
}) {
  return (
    <li className={styles.item}>
      <p className={styles.name}>{name}:</p>
      <p className={styles.number}>{number}</p>
      <button className={styles.button} id={id} onClick={onClickDeleteContact}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onClickDeleteContact: PropTypes.func,
};
