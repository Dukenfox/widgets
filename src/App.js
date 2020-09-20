import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import "./App.css";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use react?",
    content: "React is a favorite JS libaray among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use react using components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "Green",
  },
  {
    label: "The Color Blue",
    value: "Blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="parent">
      <button
        className="ui button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
          className="child"
        />
      ) : null}
    </div>
  );
};
