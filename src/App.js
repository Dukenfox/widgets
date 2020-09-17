import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
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

export default () => {
  return (
    <div className="parent">
      <Search classname="searchbar" />
    </div>
  );
};
