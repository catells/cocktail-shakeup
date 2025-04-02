import React from "react";
import "./SearchBar.css";

export const SearchResult = ({ results }) => {
  const data = results;
  console.log("test", data);
  return (
    <div className="result-list">
      {data.map((result, index) => {
        return <ul key={index}> {result.strMeal} </ul>;
      })}
    </div>
  );
};
