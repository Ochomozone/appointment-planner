import React from "react";

export const Tile = (props) =>  {
  const details = Object.values(props.description)
  

  return (
    <div className='tile-container'>
      <p className='tile-title'>{props.name}</p>
      {details.map((item, index) => (
        <p className='tile' key={index}>{item}</p>
      ))}
    </div>
  );
};
