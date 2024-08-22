// src/pages/DashboardPage.jsx
import React, { useEffect, useState } from "react";
import { fetchDocuments } from "../services/apiService";

const DashboardPage = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const loadDocuments = async () => {
      try {
        const response = await fetchDocuments();
        setDocuments(response.data);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };
    loadDocuments();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {documents.map((doc) => (
          <li key={doc.id}>{doc.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;
