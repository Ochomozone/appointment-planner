import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duplicate, setDuplicate] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    if (!duplicate) {
      props.newAppointment(title, contact, date, time)
        
          setTitle('');
          setContact('');
          setDate('');
          setTime('');
        
    } else { alert ('Appointment already exists')}
   
  };

  const match = props.appointments.find( (element) => {
    return element.title === title;
  });
  if (match !== undefined) {
    setDuplicate(true);
  }
   
 

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          title={title} 
          setTitle={setTitle} 
          contact={contact} 
          setContact={setContact} 
          date={date} 
          setDate={setDate} 
          time={time} 
          setTime={setTime} 
          handleSubmit={handleSubmit}
          contacts={props.contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={props.appointments}/>
      </section>
    </div>
  );
};