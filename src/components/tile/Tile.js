import React from "react";

export const Tile = (props) =>  {
  const details = Object.values(props.description)
  

  return (
    <div className='tile-container'>
      <p className='tile-title'>{props.name}</p>
      {details.map(item => <p className='tile' >{item}</p> )}
      {/* <p className='tile' >{details}</p> */}
    </div>
     );
};