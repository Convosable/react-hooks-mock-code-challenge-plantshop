import React from "react";
import PlantCard from "./PlantCard";

function PlantList({filtered}) {

 
  return (
    <ul className="cards">
      {filtered.map((plant) =>
      <PlantCard plant = {plant} key = {plant.id} />
      )}
    </ul>
  );
}

export default PlantList;
