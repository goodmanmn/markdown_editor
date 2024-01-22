import React from "react";

function Edit({ markdown, handleChange }) {
  return (
    <div>
      <textarea
        name="edit_area"
        id="editor"
        cols="30"
        rows="15"
        value={markdown}
        onChange={e => handleChange(e.target.value)}></textarea>
    </div>
  );
}

export default Edit;
