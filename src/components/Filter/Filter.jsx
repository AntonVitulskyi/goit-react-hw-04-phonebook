import styles from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';

export default function Filter({ onFilterChange }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Find contacts by name</h2>
      <input
        type="text"
        onChange={onFilterChange}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </div>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func,
};
