import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import RecomentedVideo from './RecomentedVideo';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
    <Header />
      <Switch>
        <Route path="/search/:searchTerm">
          <div className="app__page">
            <Sidebar />
            <SearchPage />
          </div>
        </Route>
        <Route path="/">
            <div className="app__page">
            <Sidebar />
            <RecomentedVideo />
            </div>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
