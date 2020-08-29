import React, { Component } from 'react';
import Dishdetail from './DishdetailComponent';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    // change the state when a dish is selected
    dishSelect = (dish) => {
        this.setState({
            selectedDish: dish,
        })
    }

 

    render () {
        // the main menu with title as overlay
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.dishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return(
            <div className="Menu">
                <div className="container">
                    <div className="row">
                        {menu}
                    </div>
                    {/* the extra details */}
                    {/* {this.renderDishDetails(this.state.selectedDish)} */}
                    <Dishdetail dish= {this.state.selectedDish}/>
                </div>
            </div>
        );
    }
}

export default Menu;