import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler,Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import {logo} from "assets/images/logo.png"


class Header extends Component {  
  constructor (props) {
    super(props)

    this.state = {
        isNavOpen: false,
    }
  }

  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return(
      <>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img src="assets/images/logo.png" alt="logo" height="30" width="41"/>
              <span>Food Menu App</span>
            </NavbarBrand>
            
            <NavbarToggler onClick={this.toggleNav} /> 

            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                      <span className="fa fa-home fa-lg"></span>
                      <span>Home</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/about">
                  <span className="fa fa-info fa-lg"></span> 
                  <span>About</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                      <span className="fa fa-list fa-lg"></span> 
                      <span>Menu</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contact">
                      <span className="fa fa-address-card fa-lg"></span> 
                      <span>Contact</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>

          </div>
        </Navbar>
      </>
    )
  }
}

export default Header;