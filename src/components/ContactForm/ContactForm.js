import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

const ContactForm = ({ handleSubmit, handleChange, name, number }) => (
  <form className={styles.form} onSubmit={handleSubmit}>
    <h3 className={styles.h3}>Name</h3>
    <input
      className={styles.input}
      type="text"
      name="name"
      onChange={handleChange}
      value={name}
    />
    <h3 className={styles.h3}>Number</h3>
    <input
      className={styles.input}
      type="text"
      name="number"
      onChange={handleChange}
      value={number}
    />
    <button className={styles.submit} type="submit">
      Add contact
    </button>
  </form>
);

ContactForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
export default ContactForm;
