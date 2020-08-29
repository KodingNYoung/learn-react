import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './Menu'
import Dishdetail from './DishdetailComponent';
import {dishes} from '../Db'

class Main extends  Component{
    constructor (props) {
        super(props);

        this.state = {
        dishes: dishes,
        selectedDish: null
        }

        // console.log("constructing");
    }

    dishSelect = (dishID) => {
        // console.log(dishID)
        this.setState({
            selectedDish: dishID,
        })
    }

    // componentDidMount () {
    //     console.log("component has actually mounted")
    // }

    render () {
        // console.log("mounting component")
    return (
        <div>
        <Navbar dark color="primary">
            <div className="container">
            <NavbarBrand href="/">
                <span>Food Menu  App</span>
            </NavbarBrand>
            </div>
        </Navbar>
        <Menu dishes ={this.state.dishes} onClick = {(dishID) => this.dishSelect(dishID)}/>
        <Dishdetail 
            dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}
            /> 
        </div>
    );
    }
}

export default Main;
