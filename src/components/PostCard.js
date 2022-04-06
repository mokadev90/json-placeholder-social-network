import React from 'react';

export const PostCard = ({ name, userId, id, title, body }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};
