// const App = () => {
//   return (
//     <div className="App">
//       <Routes>
//         //every route will go here
//         <Route path="/" element={<homePage />} />
//         <Route path="/main" element={<mainPage />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

import { SearchResult } from "./components/SearchResultLists";
import { SearchBar } from "./components/dropdownFetch.jsx";
import React, { useState, useEffect } from "react";
import { picking } from "./components/gettingRecipeName";
import { Modal } from "./components/recipeModal";
import "./components/Modal.css";
import "./App.css";

function App() {
  const [meals, setMeals] = useState([]);
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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

  const handleClick = () => {
    {
      picking();
    }
  };

  return (
    <div>
      {/* !!! header !!! */}
      <header>Cocktail Shakeup</header>
      {/* search bar */}
      <div className="search-bar">
        <SearchBar setResults={setResults} />
        <SearchResult results={results} />
      </div>
      {/* main page meals shown */}
      <ul id="meals" onClick={handleClick}>
        {meals.map((meal, id) => (
          <il key={id}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="photos"
            />
            <p>{meal.strMeal}</p>
          </il>
        ))}
      </ul>
      {/* modal */}
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
      <div id="Modal"></div>
    </div>
  );
}

export default App;
