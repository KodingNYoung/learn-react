import React from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">
            <img src={logo} alt="logo"/>
            <span>React app</span>
          </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
