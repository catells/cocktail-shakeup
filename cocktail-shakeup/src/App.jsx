import { SearchResult } from "./components/SearchResultLists";
import { SearchBar } from "./components/dropdownFetch.jsx";
import React, { useState, useEffect } from "react";
import { CocktailPreferenceMenuProvider } from "./CocktailPreferenceMenuProvider.jsx";
import { CocktailPreferenceMenu } from "./CocktailPreferenceMenu.jsx";
import { CocktailContainer } from "./CocktailContainer.jsx";
import { Modal } from "./components/recipeModal";
import { getRecipe } from "./components/recipeSearch-fetch";
import "./components/Modal.css";
import "./App.css";

function App() {
  const [meals, setMeals] = useState([]);
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [mealPrep, setMealPrep] = useState({});

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

  const handleClick = async (e) => {
    const img = e.target.closest(".photos");
    const name = e.target.closest(".search-result");

    if (img) {
      const foodName = img.getAttribute("alt");
      console.log(foodName);
      const mealPrepData = await getRecipe(foodName);
      setMealPrep(mealPrepData);
      setIsOpen(true);
    } else if (name) {
      console.log(name.textContent);
      const mealName = name.textContent;
      const mealPrepData = await getRecipe(mealName);
      setMealPrep(mealPrepData);
      setIsOpen(true);
    }
  };

  return (
    <div>
      {/* !!! header !!! */}
      <header>Cocktail Shakeup</header>
      {/* search bar */}
      <div className="search-bar" onClick={handleClick}>
        <SearchBar setResults={setResults} />
        <SearchResult results={results} />
      </div>
      {/* preference menu shown */}
      <CocktailPreferenceMenuProvider>
        <CocktailPreferenceMenu />
      </CocktailPreferenceMenuProvider>
      {/* main page meals shown */}
      <ul id="meals" onClick={handleClick}>
        {meals.map((meal, id) => (
          <li key={id}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="photos"
            />
            <p>{meal.strMeal}</p>
            <>
              <CocktailPreferenceMenuProvider>
                <CocktailContainer />
              </CocktailPreferenceMenuProvider>
            </>
          </li>
        ))}
      </ul>
      {/* modal */}
      <Modal
        id="modal"
        mealPrep={mealPrep}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      ></Modal>
    </div>
  );
}

export default App;
