import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import inputId from '../../util/shortid';

const Filter = ({ length, filter, handleChangeFilter }) => {
	return (
		<>
			{length > 1 && (
				<div className={styles.search}>
					<p className={styles.paragraph} htmlFor={inputId.filter}>
						Find contact by name
					</p>
					<input
						type="text"
						onChange={handleChangeFilter}
						value={filter}
						name="filter"
					/>
				</div>
			)}
		</>
	);
};

/*const Filter = ({ length, filter, handleChange }) => {
  return (
    <>
      {length > 1 && (
        <label className={Styles.findContact} htmlFor={inputId.filter}>
          Find contacts by name
          <input
            type="text"
            id={inputId.filter}
            value={filter}
            onChange={handleChange}
            name="filter"
          />
        </label>
      )}
    </>
  );
};*/

Filter.propTypes = {
	handleChangeFilter: PropTypes.func.isRequired,
};
export default Filter;
