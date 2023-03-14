import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage() {

const [plantList, setPlantList] = useState([])
const [search, setSearch] = useState('')

const filtered = plantList.filter((plant => plant.name.toLowerCase().includes(search.toLowerCase())));


function handleAddPlant(newPlant) {
  setPlantList([...plantList, newPlant])
}

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
    .then(r => r.json())
    .then(plants => {
      setPlantList(plants)
    })
  },[])

  return (
    <main>
      <NewPlantForm handleAddPlant = {handleAddPlant} plantList = {plantList}/>
      <Search search = {search} setSearch = {setSearch}/>
      <PlantList filtered = {filtered} plantList = {plantList}/>
    </main>
  );
}

export default PlantPage;
