import React from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import Search from "./Search";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  return (
    <div>
      <Search />
      {contactList.map((item) => (
        <ContactItem item={item} />
      ))}
    </div>
  );
};

export default ContactList;
