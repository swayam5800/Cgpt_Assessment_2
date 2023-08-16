import React, { useState } from "react";

const AddPostToList = ({ posts, onAddPost }) => {
  const [selectedPost, setSelectedPost] = useState("");

  const handleAddPost = () => {
    if (selectedPost) {
      onAddPost(selectedPost);
      setSelectedPost("");
    }
  };

  return (
    <div>
      <select
        value={selectedPost}
        onChange={(e) => setSelectedPost(e.target.value)}
      >
        <option value="">Select a post</option>
        {posts.map((post) => (
          <option key={post.id} value={post.id}>
            {post.title}
          </option>
        ))}
      </select>
      <button onClick={handleAddPost}>Add to List</button>
    </div>
  );
};

export default AddPostToList;
