import React, { useEffect, useState } from "react";
import axios from "axios";
import GetStatus from "./GetStatus";

export default function CharacterList() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loadStatus, setLoadStatus] = useState(false);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log("Fetched data from API");
        const characters = response.data.results.filter(character => character.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(characters);
        setLoadStatus(true);
      })
      .catch(error => {
        console.log("Error fetching data", error);
        setLoadStatus(false);
      })
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (

    // Div for entire page
  <div className = "characterspage">

    {/* Search form section */}
    <section className="search-form">
     <form className = "search">
       <input type = "text" onChange = {handleInputChange} value = {query} name = "name" tabIndex = "0" placeholder = "Search by name" autoComplete = "off" />
     </form>
    </section>

    {/* API Status */}
    <div className = "statusbar">
    <GetStatus loaded = {loadStatus}/>
    </div>

    {/* Div for characters rendered from API */}
    <div className = "renderedcharacters">
      {data.map(data => {
        return (
          <section className="character-list">
          <img className = "image" src = {data.image} alt="character"></img>
          <h3>{data.name}</h3>
          <h3>Status: {data.status}</h3>
          <h3>Species: {data.species}</h3>
          </section>
        )
      })}
      </div>
      </div>
  );
}
