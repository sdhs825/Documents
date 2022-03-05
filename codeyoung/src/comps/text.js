import React from "react";

export const TextPad = (props) => {
  return (
    <div className="mb-3">
      <label
        className="form-label"
        style={{ margin: "20px", fontSize: "30px" }}
      >
        {props.label}
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="5"
        onInput={(e) => props.set(e.target.value)
        }
        value={props.val}
      ></textarea>
    </div>
  );
};
