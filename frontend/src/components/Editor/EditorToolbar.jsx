import React from "react";

const EditorToolbar = () => {
  return (
    <div id="toolbar">
      <select className="ql-font">
        <option value="sans-serif" selected>
          Sans-Serif
        </option>
        <option value="serif">Serif</option>
        <option value="monospace">Monospace</option>
      </select>
      <select className="ql-size">
        <option value="small"></option>
        <option value="large"></option>
        <option value="huge"></option>
      </select>
      <button className="ql-bold"></button>
      <button className="ql-italic"></button>
      <button className="ql-underline"></button>
      <button className="ql-strike"></button>
    </div>
  );
};

export default EditorToolbar;
