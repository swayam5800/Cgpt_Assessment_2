import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RevisionHistory.css";

const RevisionHistory = ({ postId }) => {
  const [revisions, setRevisions] = useState([]);

  useEffect(() => {
    fetchRevisions();
  }, []);

  const fetchRevisions = () => {
    axios
      .get(`/api/post/${postId}/revisions`)
      .then((response) => {
        setRevisions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching revisions:", error);
      });
  };

  return (
    <div className="revision-history">
      <h3>Revision History</h3>
      <ul>
        {revisions.map((revision) => (
          <li key={revision.revision_id} className="revision-item">
            <p className="timestamp">{revision.created_at}</p>
            <button className="compare-button">Compare</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RevisionHistory;
