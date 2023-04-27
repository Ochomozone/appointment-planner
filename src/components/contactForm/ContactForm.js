import React from "react";

export const ContactForm =(props) => { 
  const handleNameChange = ({target}) => {
    const {name, value} =target;
    props.setName(value);
  };

  const handlePhoneChange = ({target}) => {
    const {name, value} =target;
    props.setPhone(value);
  };

  const handleEmailChange = ({target}) => {
    const {name, value} =target;
    props.setEmail(value);
  };

  return (

    <form onSubmit={props.handleSubmit}>
      <input 
        type='text'  
        label='Enter Name:' 
        placeholder='Enter Name' 
        value={props.name} 
        onChange={handleNameChange} 
      />
      <input 
        type='text' 
        placeholder='Enter Phone' 
        // pattern='^(+254|0)([7][0-9]|[1][0-1]){1}[0-9]{1}[0-9]{6}$' 
        value={props.phone} 
        onChange={handlePhoneChange} 
      />
      <input 
        type='text' 
        placeholder='Enter Email' 
        value={props.email} 
        onChange={handleEmailChange} 
      />
      <input type="submit" value="Add" />
    </form>
  );
};

