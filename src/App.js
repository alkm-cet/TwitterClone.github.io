import './App.css';
import LeftBar from './leftSide/LeftBar';
import Main from './rightSide/Main';
import Header from './rightSide/Header';
import RightBar from './rightSide/RightBar';
import OnLoadPage from './onLoadPage/OnLoadPage';
import { useState } from 'react';

function App() {
  
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="App">
      <OnLoadPage
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword} />
      <LeftBar
        username={username} />
      <Main
        username={username} />
      <Header />
      <RightBar />
    </div>
  );
}

export default App;
