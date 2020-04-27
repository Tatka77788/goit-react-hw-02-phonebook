import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import inputId from '../../util/shortid';

const Filter = ({ filter, handleChangeFilter }) => {
  return (
    <label className={styles.paragraph} htmlFor={inputId.filter}>
      Find contact by name
      <input
        type="text"
        onChange={handleChangeFilter}
        value={filter}
        name="filter"
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};
export default Filter;
