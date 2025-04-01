import { SearchResult } from "../components/SearchResultLists";
import { SearchBar } from "../components/dropdownFetch.jsx";
import React, { useState, useEffect } from "react";
import "../App.css";

function mainPage() {
  const [meals, setMeals] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Fetch failed. ${response.status} ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        if (data != 0) {
          setMeals(data.meals);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main>
      <div className="search-bar">
        <SearchBar setResults={setResults} />
        <SearchResult results={results} />
      </div>
      <ul id="meals">
        {meals.map((meal, id) => (
          <ul key={id}>
            <img src={meal.strMealThumb} alt={meal.strMeal} id="photos" />
            <p>{meal.strMeal}</p>
          </ul>
        ))}
      </ul>
    </main>
  );
}

export default mainPage;
