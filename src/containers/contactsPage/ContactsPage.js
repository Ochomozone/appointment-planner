import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */


  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicated, setDuplicated] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicated) {
      props.newContact(name, phone, email)
        
          setName('');
          setPhone('');
          setEmail('');
        console.log('New contact prop successfully received');
    } else { alert ('Contact is duplicated')}
   
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  const match = props.contacts.find( (element) => {
    return element.email === email;
  });
  if (match !== undefined) {
    setDuplicated(true);
  }

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm  name={name} 
                      setName={setName}
                      email={email} 
                      setEmail={setEmail} 
                      phone={phone} 
                      setPhone={setPhone}
                      handleSubmit={handleSubmit}
                      />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={props.contacts}/>
      </section>
    </div>
  );
};
