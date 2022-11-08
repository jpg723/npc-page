import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main';
import Forum from './components/Forum/Forum';
import Mypage from './components/Mypage';
import Pointcheck from './components/Pointcheck';
import Attendance from './components/Attendance';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: ""
    }
  }

  render() {
    return (
      <div className="app">
          <Header/>
            <Routes>
              <Route path="/" element={<Main/>}></Route>
              <Route path="/forum"  element={<Forum/>}></Route>
              <Route path="/mypage"  element={<Mypage/>}></Route>
              <Route path="/pointcheck"  element={<Pointcheck/>}></Route>
              <Route path="/attendance"  element={<Attendance/>}></Route>
            </Routes>
      </div>
    );
  }
}
export default App;
