import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log("Fetched data from API");
        const characters = response.data.results.filter(character => character.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(characters);
      });
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

    {/* Div for characters rendered from API */}
    <div className = "renderedcharacters">
      {data.map(data => {
        return (
          <section className="character-list">
          <img className = "image" src = {data.image}></img>
          <h3>Name: {data.name}</h3>
          <h3>Status: {data.status}</h3>
          <h3>Species: {data.species}</h3>
          </section>
        )
      })}
      </div>
      </div>
  );
}
