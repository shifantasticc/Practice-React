import { useState } from 'react';
import './Comment.css';
import CommentsForm from './CommentsForm';

export default function Comment() {
  const [comments, setComments] = useState([
    {
      username: '@sk',
      remarks: 'great job!',
      rating: 4,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  };

  return (
    <>
      <div>
        <h3>All Comments </h3>
        <CommentsForm addNewComment={addNewComment} />
        <br />
        <hr />
        <br />
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
            &nbsp;
            <span>(rating = {comment.rating})</span>
            <p>- {comment.username}</p>
          </div>
        ))}
      </div>
    </>
  );
}
