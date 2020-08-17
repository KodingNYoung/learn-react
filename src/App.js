import React, {Component} from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/Menu'
import {dishes} from './Db'

class App extends  Component{
  constructor (props) {
    super(props);

    this.state = {
      dishes: dishes
    }
  }

  render () {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">
              <img src={logo} alt="logo"/>
              <span>React app</span>
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes ={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
