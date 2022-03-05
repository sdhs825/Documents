import React from "react";

export const LangSelect = (props) => {
  return (
    <>
      <div className="dropdown d-inline" style={props.style}>
        <select
          onChange={(e) => props.set(e.target.value)}
          className="btn btn-lg"
          aria-label="Default select example"
        >
          <option key="none" value="none" defaultValue>
            {props.type}
          </option>
          {props.options.map((opt) => (
            <option key={opt.value} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
