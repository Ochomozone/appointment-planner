import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({  
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  

  return (
    <form onSubmit={handleSubmit} >
    <ContactPicker 
      contacts={contacts} 
      onChange={ (e) => setContact(e.target.value)} 
      value={contact}
      
      />
    <label htmlFor='title'>Topic</label>
    <input 
      id='title' 
      value={title}
      onChange={ (e) => setTitle(e.target.value)} 
      type='text' 
      required
    />
  

  <label htmlFor='date'>Date</label>
    <input 
      id='date' 
      value={date}
      onChange={ (e) => setDate(e.target.value)} 
      type='date' 
      min={getTodayString()}
      required
    />

  <label htmlFor='time'>Time</label>
    <input 
      id='time' 
      value={time}
      onChange={ (e) => setTime(e.target.value)} 
      type='time' 
      required
    />

    <input type='submit' value='book' />

  </form>
  );
};
