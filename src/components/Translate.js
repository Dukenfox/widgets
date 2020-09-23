import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar,",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div className="translate">
      <div className="ui form">
        <div className="ui field">
          <label className="ui label">Enter Field</label>
          <input
            className="ui input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <div className="ui form">
        <Dropdown
          label="Select A Language"
          selected={language}
          onSelectedChange={setLanguage}
          options={options}
        />
      </div>
      <div className="ui form">
        <div className="ui field">
          <label className="ui label"> Output </label>
          <Convert
            text={text}
            language={language}
            className="ui raised segment"
          />
        </div>
      </div>
    </div>
  );
};

export default Translate;
