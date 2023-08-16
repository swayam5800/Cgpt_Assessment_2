import React, { useState } from "react";
import UserProfile from "./UserProfile";
import CreateList from "./CreateList";
import UserLists from "./UserLists";
import ListManagement from "./ListManagement";
import AddPostToList from "./AddPostToList";
import SharingOptions from "./SharingOptions";

const Dashboard = ({ user }) => {
  const [selectedList, setSelectedList] = useState(null);

  const handleCreateList = (listName) => {
    // Create a new list and update the user's lists
  };

  const handleSelectList = (list) => {
    setSelectedList(list);
  };

  const handleUpdateList = (updatedList) => {
    // Update the selected list
  };

  const handleAddPostToList = (postId) => {
    // Add the selected post to the selected list
  };

  const handleRemovePostFromList = (postId) => {
    // Remove the post from the selected list
  };

  return (
    <div className="dashboard">
      <UserProfile user={user} />
      <CreateList onCreateList={handleCreateList} />
      <div className="lists-container">
        <UserLists lists={user.lists} onSelectList={handleSelectList} />
        {selectedList && (
          <div>
            <ListManagement
              list={selectedList}
              onUpdateList={handleUpdateList}
              onRemovePost={handleRemovePostFromList}
            />
            <AddPostToList
              posts={user.posts} // Assuming user.posts contains all available posts
              onAddPost={handleAddPostToList}
            />
            <SharingOptions list={selectedList} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
