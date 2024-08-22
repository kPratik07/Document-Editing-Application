import React from "react";
import CommentForm from "./CommentForm";

const CommentList = ({ comments, documentId }) => {
  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
      <CommentForm documentId={documentId} />
    </div>
  );
};

export default CommentList;
