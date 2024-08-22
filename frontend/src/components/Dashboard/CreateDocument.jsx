import React, { useState } from "react";
import { documentService } from "../../services/documentService";

const CreateDocument = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    documentService.createDocument({ title });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Document Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Create Document</button>
    </form>
  );
};

export default CreateDocument;
