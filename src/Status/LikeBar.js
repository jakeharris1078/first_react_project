import React, { useState } from 'react';
import './LikeBar.css';

function LikeBar() {
  let liked = '👍';
  let defaultLike = 'Click here to leave a 👍';

  const [leaveLike, setLeaveLike] = useState(defaultLike);

  const likeHandler = function (e) {
    e.preventDefault();
    if (leaveLike === defaultLike) {
      setLeaveLike(liked);
    } else setLeaveLike(defaultLike);
  };

  return (
    <div className="likebar">
      <hr />
      <p className="liketext">
        <button className="buttonLink" onClick={likeHandler}>
          <p>{leaveLike}</p>
        </button>
      </p>
    </div>
  );
}

export default LikeBar;
