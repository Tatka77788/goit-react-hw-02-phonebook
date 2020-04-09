import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({handleSubmit, handleChange, name, number})=>(
    <form className={styles.form} onSubmit={handleSubmit}>
        <h3 className={styles.h3}>Name</h3>
        <input className={styles.input} type="text" name="name" onChange={handleChange} value={name}/>
        <h3 className={styles.h3}>Number</h3>
        <input className={styles.input} type="text" name="number" onChange={handleChange} value={number}/>
        <button className={styles.submit} type="submit">Add contact</button>
    </form>
);
export default ContactForm
