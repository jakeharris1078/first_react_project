import './AddNewStatus.css';
import { useState } from 'react';
import NewStatusButton from './NewStatusButton';

const AddNewStatus = function (props) {
  const [statusText, setStatusText] = useState('');
  let inputText;

  const changeHandler = function (e) {
    inputText = e.target.value;
    setStatusText(inputText);
  };

  return (
    <div className="container">
      <p>Add a new status</p>
      <textarea
        placeholder="type a status here"
        className="textarea"
        onChange={changeHandler}
        value={statusText}
      ></textarea>
      <NewStatusButton
        setStatusList={props.setStatusList}
        statusList={props.statusList}
        status={statusText}
        setStatusText={setStatusText}
      />
    </div>
  );
};

export default AddNewStatus;
