import Edit from "./Edit";
import Preview from "./Preview";
import { useState } from "react";

function App() {
  const [markdown, setMarkdown] =
    useState(`# Welcome to another Markdown editor! (this is a heading)
  ## A place to practice using Markdown (this is a sub-heading)
  ### (another sub-heading)
  #### (so on and so forth)
  
  Markdown can make formatting HTML a breeze!
  
  As seen above, # with a space at the beginning of a line makes a header, 
  additional ones make sub-headings!
  
  Additionally, horizontal breaks can be used with:
  
  ---
  or
  ___
  or
  ***
  
  Paragraphs can be made with putting a space between lines \
  And line breaks can be used by putting a \\ at the end of a line.
  Otherwise, it'll remain on the same line.
  
  You can show \`inline code\` with backticks or three backticks at the beginning 
  and end of text to show a code block such as
  \`\`\`
  const answer = 42;
  \`\`\` 
  
  You can add emphasis in different ways such as:\
  *italic* or _italic_\
  **bold** or __bold__\
  ***or both using a combination of the above!***\
  
  Lists, ordered or not, are initiated in more or less the same way .
  * list item
  - list item
    * indented list item
      - indented list item
  1. ordered list items
  2. behave
     1. the same way
     * in many combinations
       1. try them out!
       5. (doesn't even need to sequential numbers)
  
  > Block quotes use '>'\\
  > Blank lines still need a 
  >
  > to join lines of a quote

  > or else it looks odd.
  
  They are even more ways to utilize Markdown, [click here](https://www.markdownguide.org/basic-syntax/) to find out more!
  
  This editor brought to you by learning through:

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`);
  const handleChange = input => {
    setMarkdown(input);
  };

  return (
    <div className="App">
      <p className="editor-header">Editor</p>
      <Edit markdown={markdown} handleChange={handleChange} />
      <p className="preview-header">Preview</p>
      <Preview markdown={markdown} />
    </div>
  );
}

export default App;
