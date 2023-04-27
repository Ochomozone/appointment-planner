import React from "react";

export const ContactForm =(props) => { 
  const handleNameChange = ({target}) => {
    const {value} =target;
    props.setName(value);
  };

  const handlePhoneChange = ({target}) => {
    const {value} =target;
    props.setPhone(value);
  };

  const handleEmailChange = ({target}) => {
    const {value} =target;
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
        pattern='[0][0-9]{9}' 
        value={props.phone} 
        onChange={handlePhoneChange} 
      />
      <input 
        type='text' 
        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        placeholder='Enter Email' 
        value={props.email} 
        onChange={handleEmailChange} 
      />
      <input type="submit" value="Add" />
    </form>
  );
};

