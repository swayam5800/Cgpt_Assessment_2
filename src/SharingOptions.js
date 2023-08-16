import React from "react";

const SharingOptions = ({ list }) => {
  return (
    <div>
      <h3>Sharing Options</h3>
      <p>Share this list with others using the link: {list.shareLink}</p>
    </div>
  );
};

export default SharingOptions;
