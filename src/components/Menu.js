import React, { Component } from 'react';
import Dish from './Dish';
import SelectedDish from './SelectedDish';

class Menu extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    dishSelect = (dish) => {
        this.setState({
            selectedDish: dish,
        })
    }

    renderDishDetails = (dish) => {
        if (dish != null) {
            return (
                <SelectedDish
                dish={dish}
                />
            )
        }else {
            return (
                <div></div>
            )
        }
    }

    render () {
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 mt-3">
                    <Dish 
                    onClick={() => this.dishSelect(dish)} 
                    dish={dish}/>
                </div>
            );
        });

        return(
            <div className="Menu">
                <div className="container">
                    <div className="row">
                        {menu}
                    </div>
                    <div className="row">
                        {this.renderDishDetails(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
