import './StatusBox.css';
import LikeBar from './LikeBar';
import { useState } from 'react';

function StatusBox(props) {
  let status = props.statusText;

  const [style, setStyle] = useState({});

  const hideClickHandler = function (e) {
    e.preventDefault();
    setStyle({ display: 'none' });
  };

  return (
    <div className="statusbox" style={style}>
      {status}
      <div className="wrapper">
        <LikeBar />
        <button onClick={hideClickHandler} className="two">
          Hide this status
        </button>
      </div>
    </div>
  );
}

export default StatusBox;
