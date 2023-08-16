import React from "react";

const UserLists = ({ lists, onSelectList }) => {
  return (
    <div>
      <h3>Your Lists</h3>
      <ul>
        {lists.map((list) => (
          <li key={list.id} onClick={() => onSelectList(list)}>
            {list.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserLists;
