import React from "react";

export const ContactPicker = (props) => {
  const names = props.contacts.map( (contact) => {
    return <option value={contact.name} key={contact.name} >{contact.name}</option>
  });
  return (
    <select onChange={props.onChange} 
            required
            id='contact'
            value={props.value}
            name={props.name} 
    >
      <option value=''> 'No Contact Selected' </option>
      {names}
    </select>
  );
};
