import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class SelectedDish extends Component {
    render () {
        const dish = this.props.dish;
        return (
            <Card onClick = {this.props.onClick}>
                <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText> {dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }
}

export default SelectedDish;