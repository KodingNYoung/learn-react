import React, {Component} from 'react';
import Header from './Header';
import Menu from './Menu'
import Dishdetail from './DishdetailComponent';
import Footer from './Footer';
import {dishes} from '../Db'

class Main extends  Component{
    constructor (props) {
        super(props);

        this.state = {
        dishes: dishes,
        selectedDish: null
        }

    }

    dishSelect = (dishID) => {
        this.setState({
            selectedDish: dishID,
        })
    }


    render () {
    return (
        <div>
            <Header />        
            <Menu dishes ={this.state.dishes} onClick = {(dishID) => this.dishSelect(dishID)}/>
            <Dishdetail 
                dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}
                /> 
            <Footer />
        </div>
    );
    }
}

export default Main;
