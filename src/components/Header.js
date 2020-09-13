import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler,Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import {logo} from "assets/images/logo.png"


class Header extends Component {  
  constructor (props) {
    super(props)

    this.state = {
      isNavOpen: false,
      isModalOpen: true
    }
  }

  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  onLogin = (e) => {
    this.toggleModal();
    alert(`Logged in! Username: ${this.username.value}, Password: ${this.password.value}, Remember me: ${this.remember.checked}`);
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
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-sign-in"></span>
                    Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input type="text" className="username" id="username" innerRef= {input => this.username = input}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="password" className="password" id="password" innerRef= {input => this.password = input}/>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" name="remember" innerRef= {input => this.remember = input}/>
                Remember me
              </FormGroup>
              <Button type="submit" className="bg-primary" value="submit"> Login</Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    )
  }
}

export default Header;