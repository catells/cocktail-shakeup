import React from "react";
import ReactDOM from "react-dom";
import { rendering } from "./renderingRecipe";
import "./Modal.css";

export function Modal({ open, children, onClose }) {
  if (!open) return null;

  return (
    <>
      <div id="overlay">
        <button id="closing" onClick={onClose}>
          <p>Click me to close!</p>
          {rendering()}
        </button>
        {children}
      </div>
    </>
  );
}

export const displayRecipe = () => {};
