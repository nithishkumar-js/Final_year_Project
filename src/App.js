import React from 'react';
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import Widgets from './components/Widgets/Widgets';
import { useStateValue } from './StateProvider';


function App() {
  const [{ user }, dispatch] = useStateValue();
  
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body row">
            <div className="col-4">
            <Sidebar />
            </div>
            <div className="col-4">
            <Feed />
            </div>
            <div className="col-4">
            <Widgets />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
