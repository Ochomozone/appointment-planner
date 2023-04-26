import React from "react";

export const ContactForm =(props) => { 
  const handleNameChange = ({target}) => {
    const [name, value] =target;
    props.setName(value);
  };

  const handlePhoneChange = ({target}) => {
    const [name, value] =target;
    props.setPhone(value);
  };

  const handleEmailChange = ({target}) => {
    const [name, value] =target;
    props.setEmail(value);
  };

  return (

    <form onSubmit={props.handleSubmit}>
      <input type='text' label='Name' placeholder='Enter Name' value={props.name} onChange={handleNameChange} />
      <input type='text' label='Phone' placeholder='Enter Phone' pattern='/^(?:\+?\d{1,3}|\b0)\s?\d{3}\s?\d{3}\s?\d{3}$/' value={props.phone} onChange={handlePhoneChange} />
      <input type='text' label='Email' placeholder='Enter Email' value={props.email} onChange={handleEmailChange} />
    </form>
  );
};

