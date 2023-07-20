import './NewStatusButton.css';
import StatusBox from './StatusBox';

function NewStatusButton(props) {
  const statusSubmitHandler = function (e) {
    if (props.status.length > 0) {
      e.preventDefault();

      props.setStatusList((prevState) => [
        ...prevState,
        <StatusBox statusText={props.status} key={props.statusList.length} />,
      ]);

      props.setStatusText('');
    } else {
      alert('Input some text');
    }
  };

  return (
    <button
      onClick={statusSubmitHandler}
      className="newstatus-btn"
      type="submit"
    >
      Submit
    </button>
  );
}

export default NewStatusButton;
