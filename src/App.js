import { useState } from 'react';
import './App.css';
import StatusBox from './Status/StatusBox';
import AddNewStatus from './Status/AddNewStatus';

function App(props) {
  const [statusList, setStatusList] = useState([
    <StatusBox key={'dummy'} statusText={'happy monday'} />,
  ]);

  return (
    <div className="App">
      <header>Status Place</header>
      <hr />
      <AddNewStatus statusList={statusList} setStatusList={setStatusList} />
      {statusList}
    </div>
  );
}

export default App;
