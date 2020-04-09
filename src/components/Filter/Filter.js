import React from 'react';
import styles from './Filter.module.css';

const Filter = ({handleChangeFilter}) =>(
    <>
    <div className={styles.search}>
        <p className={styles.paragraph}>Find contact by name</p>
        <input type="text" onChange={handleChangeFilter}/>
    </div>
    </>
);
export default Filter