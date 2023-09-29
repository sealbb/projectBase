import React, { Component, useState } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home"
import Profile from "./pages/Profile"

import "./App.css"
import Login from './pages/Login';

class App extends Component {
  render() {
  return (
    <>
      <Router>
      
        <Routes>
                <Route exact path='/' element={< Home />}></Route>
                {/* <Route exact path='/home' element={< Home />}></Route> */}
                <Route exact path='profile/:id' element={< Profile />}></Route>
        </Routes>
    </Router>
    </>
  )
}
}
export default App
