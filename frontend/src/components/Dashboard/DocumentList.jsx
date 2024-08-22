import React, { useEffect, useState } from "react";
import { documentService } from "../../services/documentService";

const DocumentList = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    documentService.getDocuments().then(setDocuments);
  }, []);

  return (
    <div>
      <h2>Your Documents</h2>
      <ul>
        {documents.map((doc) => (
          <li key={doc.id}>{doc.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
