import React from 'react';
import styles from './Section.module.css';

const Section = ({title, children}) => (
    <>
    <h2 className={styles.h2}>{title}</h2>
    {children}
    </>
);

export default Section