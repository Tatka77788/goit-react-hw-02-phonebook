/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';

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
  // eslint-disable-next-line react/forbid-prop-types
  contactList: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
};
export default ContactList;