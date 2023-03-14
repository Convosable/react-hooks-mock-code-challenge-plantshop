import React, {useState} from "react";

function NewPlantForm({plantList, handleAddPlant}) {

  const [plant, setPlant] = useState({
    id: '',
    name: '',
    image: '',
    price: ''
  })

  function handleChange(e) {
    setPlant({
      ...plant,
      [e.target.name] : e.target.value
    })
  }

  function handleSubmit(e) {
    const newPlantData = {
      id: plantList.length + 1,
      name: plant.name,
      image: plant.image,
      price: plant.price,
    }
    e.preventDefault();
    console.log(plant)

    fetch(`http://localhost:6001/plants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlantData)
    })
    .then(r => r.json())
    .then(newPlant => handleAddPlant(newPlant))
    setPlant({
      id: '',
      name: '',
      image: '',
      price: ''
    })
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input  value = {plant.name} onChange = {handleChange} type="text" name="name" placeholder="Plant name" />
        <input  value = {plant.image} onChange = {handleChange} type="text" name="image" placeholder="Image URL" />
        <input  value = {plant.price} onChange = {handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
