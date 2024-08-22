import React, { useState } from "react";
import RichTextEditor from "../components/Editor/RichTextEditor";
import EditorToolbar from "../components/Editor/EditorToolbar";

const EditorPage = () => {
  const [content, setContent] = useState("");

  return (
    <div>
      <EditorToolbar />
      <RichTextEditor value={content} onChange={setContent} />
    </div>
  );
};

export default EditorPage;
