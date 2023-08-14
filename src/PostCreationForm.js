import React, { useState } from "react";
import axios from "axios";

const PostCreationForm = ({ user }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDraft, setIsDraft] = useState(false);

  const handleSaveDraft = () => {
    const postData = {
      title,
      content,
      isDraft: true, // Set the post as a draft
    };

    axios
      .post("/api/create-post", postData, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        // Handle success, e.g., show a notification to the user
        console.log("Post saved as draft");
      })
      .catch((error) => {
        console.error("Error saving draft:", error);
      });
  };

  const handlePublishPost = () => {
    const postData = {
      title,
      content,
      isDraft: false, // Set the post as not a draft (publish)
    };

    axios
      .post("/api/create-post", postData, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((response) => {
        // Handle success, e.g., show a notification to the user
        console.log("Post published");
      })
      .catch((error) => {
        console.error("Error publishing post:", error);
      });
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={isDraft}
          onChange={() => setIsDraft(!isDraft)}
        />
        Save as Draft
      </label>
      <button onClick={handleSaveDraft}>Save Draft</button>
      <button onClick={handlePublishPost}>Publish</button>
    </div>
  );
};

export default PostCreationForm;
