import React from "react";
import RevisionHistory from "./RevisionHistory";
import "./Blog.css";
import ShareButton from "./ShareButton";

const Blog = ({ post }) => {
  return (
    <div className="blog-card">
      <h3 className="blog-title">{post.title}</h3>
      <div className="blog-details">
        <div className="blog-stat">
          <i className="fas fa-thumbs-up"></i> Likes: {post.likes}
        </div>
        <div className="blog-stat">
          <i className="fas fa-comment"></i> Comments: {post.comments}
        </div>
        <div className="blog-stat">
          <i className="fas fa-eye"></i> Views: {post.views}
        </div>
        <RevisionHistory postId={post.id} />
      </div>
      <ShareButton postTitle={post.title}></ShareButton>
    </div>
  );
};

export default Blog;
