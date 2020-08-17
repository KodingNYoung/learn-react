import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Dish extends Component {
    render () {
        return (
            <Card onClick = {this.props.onClick}>
                <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                <CardImgOverlay className="ml-5">
                    <CardTitle>{this.props.dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        )
    }
}

export default Dish;