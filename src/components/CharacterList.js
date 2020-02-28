import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log("FETCHED DATA");
        const characters = response.data.results.filter(character => character.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(characters);
      });
  }, [query]);

  return (
    <div>
      {data.map(data => {
        return (
          <section className="character-list">
          <h3>Name: {data.name}</h3>
          <h3>Status: {data.status}</h3>
          <h3>Species: {data.species}</h3>
          </section>
        )
      })}
      </div>
  );
}
