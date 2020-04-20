import React from 'react';
import ContactListItem from './ContactListItem';
//import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';

const ContactList = ({ contactList, handleRemove }) => {
	return (
		<ul>
			{contactList.map(el => (
				<ContactListItem
					key={el.id}
					contactListItem={el}
					handleRemove={handleRemove}
				/>
			))}
		</ul>
	);
};

ContactList.propTypes = {
	contactList: PropTypes.array.isRequired,
	handleRemove: PropTypes.func.isRequired,
};
export default ContactList;
