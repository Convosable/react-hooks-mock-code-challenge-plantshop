import React, {useState} from "react";

function PlantCard( {plant}) {

  const [instock, setInstock] = useState(true);

  const {name, image, price} = plant

  function handleStock() {
    setInstock(instock => !instock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {instock ? (
        <button onClick = {handleStock} className="primary">In Stock</button>
      ) : (
        <button onClick = {handleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
