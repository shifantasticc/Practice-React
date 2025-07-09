// ACTIVITY CREATE LIKE BUTTON USING STATE!!!
import { useState } from 'react';

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [clicks, setClicks] = useState(0);

  let toggleLike = () => {
    setIsLiked(!isLiked);
    setClicks(clicks + 1);
  };

  let likeStyle = { color: 'red' };

  return (
    <div>
      <h4>Clicks : {clicks}</h4>
      <button onClick={toggleLike}>
        Like! &nbsp;
        {isLiked ? (
          <i className="fa-solid fa-heart" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </button>
    </div>
  );
}
