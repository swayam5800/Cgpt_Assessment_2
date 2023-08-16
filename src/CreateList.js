import React, { useState } from "react";

const CreateList = ({ onCreateList }) => {
  const [listName, setListName] = useState("");

  const handleCreateList = () => {
    if (listName.trim() !== "") {
      onCreateList(listName);
      setListName("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter list name"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
      />
      <button onClick={handleCreateList}>Create List</button>
    </div>
  );
};

export default CreateList;
