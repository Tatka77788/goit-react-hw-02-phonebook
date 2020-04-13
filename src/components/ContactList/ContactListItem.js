import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactListItem = ({ contactListItem, handleChange }) => {
  const { id, name, number } = contactListItem;
  return (
    <li className={styles.list}>
      <p className={styles.paragraph}>
        {name}: <span>{number}</span>
      </p>
      <button
        className={styles.button}
        type="button"
        id={id}
        onClick={handleChange}
      >
        Delete
      </button>
    </li>
  );
};
ContactListItem.propTypes = {
  contactListItem: PropTypes.arrayOf(
    PropTypes.exact({
      number: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactListItem;
