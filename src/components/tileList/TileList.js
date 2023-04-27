import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ list }) => {
  if (!list) {
    return <p>Nothing to show</p>; 
  }

  const tiles = list.map(({ name, ...rest }, index) => (
    <Tile name={name} description={rest}  key={index} />
  ));

  return <div>{tiles}</div>;
};
