import React, { useState } from "react";
import fetchData from "./fetchSearch";
import "./searchbar.css";

export const SearchBar = ({ setResults }) => {
  //to figure out what user has entered
  const [input, setInput] = useState("");

  const handleChange = async (value) => {
    setInput(value);
    const [result, error] = await fetchData(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    );
    // console.log("jandle", result);
    setResults(result.meals || []);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [result, error] = await fetchData(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    );
    console.log(result);
    setResults(result);
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search your food"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
    </form>
  );
};

// made sure we are using a controlled form, using the fetch data function that
//handles errors and hdcks your types, returns a tupil (gives back erro and dat),
//we weren't lifting our state !!, and we werent usong a set result so that it wou;d go to the search result component
