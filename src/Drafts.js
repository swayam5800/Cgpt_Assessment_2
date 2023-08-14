import React from "react";

const Drafts = () => {
  const drafts = getDraftsFromLocalStorage();

  const handleDeleteDraft = (draftId) => {
    // Remove the draft from localStorage and update state
    deleteDraftFromLocalStorage(draftId);
  };

  return (
    <div>
      <h2>Saved Drafts</h2>
      {drafts.length === 0 ? (
        <p>No drafts saved.</p>
      ) : (
        drafts.map((draft) => (
          <div key={draft.id} className="draft">
            <h3>Draft {draft.id}</h3>
            <p>{draft.content}</p>
            <button onClick={() => handleDeleteDraft(draft.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

// Function to retrieve drafts from localStorage
const getDraftsFromLocalStorage = () => {
  const drafts = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("draft")) {
      drafts.push({ id: key, content: localStorage.getItem(key) });
    }
  }
  return drafts;
};

// Function to delete a draft from localStorage
const deleteDraftFromLocalStorage = (draftId) => {
  localStorage.removeItem(draftId);
};

export default Drafts;
