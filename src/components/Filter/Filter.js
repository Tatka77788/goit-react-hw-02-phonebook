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

Filter.propTypes = {
	handleChangeFilter: PropTypes.func.isRequired,
};
export default Filter;
