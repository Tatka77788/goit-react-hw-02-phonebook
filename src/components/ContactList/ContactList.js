import React from "react";
import ContactListItem from "./ContactListItem";
import { v4 as uuidv4 } from "uuid";

const ContactList = ({ contactList, handleChange }) => {
  return (
    <ul>
      {contactList.map((el) => (
        <ContactListItem
          key={uuidv4()}
          contactListItem={el}
          handleChange={handleChange}
        />
      ))}
    </ul>
  );
};
export default ContactList;
