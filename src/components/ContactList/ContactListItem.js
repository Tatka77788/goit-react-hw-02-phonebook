/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactListItem = ({ contactListItem, handleRemove }) => {
  const { id, name, number } = contactListItem;
  return (
    <li className={styles.list}>
      <p className={styles.paragraph}>
        {name}:<span>{number}</span>
      </p>
      <button
        className={styles.button}
        type="button"
        id={id}
        onClick={handleRemove}
      >
        Delete
      </button>
    </li>
  );
};
ContactListItem.propTypes = {
  contactListItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
