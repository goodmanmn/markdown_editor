import React from "react";
import Markdown from "react-markdown";

const Preview = ({ markdown }) => {
  return (
    <div id="preview">
      <Markdown>{markdown}</Markdown>
    </div>
  );
};

export default Preview;
