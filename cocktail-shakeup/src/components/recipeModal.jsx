import React from "react";
import ReactDOM from "react-dom";
import { ModalRendering } from "./renderingRecipe";
import { CocktailPreferenceMenuProvider } from "../CocktailPreferenceMenuProvider.jsx";
import { CocktailContainer } from "../CocktailContainer.jsx";
import "./Modal.css";

export function Modal({ open, children, onClose, mealPrep }) {
  if (!open) return null;

  return (
    <>
      <div id="overlay">
        <button id="closing" onClick={onClose}>
          <p>Click me to close!</p>
          <div id="recipeInfo">
            <ModalRendering mealprep={mealPrep}></ModalRendering>
          </div>
          <div id="drinkInfo">
            <CocktailPreferenceMenuProvider>
              <CocktailContainer />
            </CocktailPreferenceMenuProvider>
          </div>
        </button>
        {children}
      </div>
    </>
  );
}

export const displayRecipe = () => {};
