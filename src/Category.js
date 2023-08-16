import React from "react";
import "./Category.css";
import ShareButton from "./ShareButton";

const Category = ({ name, articles }) => {
  return (
    <div className="category">
      <h2 className="category-title">{name}</h2>
      <div className="articles">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <h3 className="article-title">{article.title}</h3>
            <p className="article-content">{article.content}</p>
            <div className="article-details">
              <p className="article-author">Author: {article.author}</p>
              <p className="article-reading-time">
                Reading Time: {article.readingTime}
              </p>
              <ShareButton postTitle={article.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
