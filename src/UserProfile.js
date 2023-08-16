import React from "react";
import "./UserProfile.css"; // Import your custom CSS file for styling

const UserProfile = ({ user }) => {
  const { username, firstName, lastName, displayPic, followedAuthors } = user;

  return (
    <div className="user-profile">
      <div className="profile-header">
        <div className="profile-image">
          {displayPic ? (
            <img src={displayPic} alt="Profile" />
          ) : (
            <div className="initials">
              {firstName.charAt(0).toUpperCase()}
              {lastName.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="profile-info">
          <h2>{username}</h2>
          <p>{`${firstName} ${lastName}`}</p>
        </div>
      </div>
      <div className="followed-authors">
        <h3>Followed Authors</h3>
        <ul>
          {followedAuthors.map((author) => (
            <li key={author.id}>
              <img
                src={author.displayPic || "default-display-pic.jpg"} // Use a default image if displayPic is not available
                alt={author.username}
              />
              <span>{author.username}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
