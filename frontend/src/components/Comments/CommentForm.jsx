import React, { useState } from "react";
import { documentService } from "../../services/documentService";

const CommentForm = ({ documentId }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    documentService.addComment(documentId, { text });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
