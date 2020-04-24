/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <>
    <h2 className={styles.h2}>{title}</h2>
    {children}
  </>
);
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Section;
