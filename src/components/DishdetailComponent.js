import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
    }
    
    renderDish(dish) {
        if (dish != null) {
            return(
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg top width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle><h4>{dish.name}</h4></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if (comments != null) {
            const cmt = comments.map((comment) => {
                return (
                    <li key={comment.id} >
                        <p> {comment.comment} </p>
                        <p> -- {comment.author}, &nbsp; {comment.date}</p>
                    </li>
                )
            })
            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4> Comments </h4>
                    <ul className='list-unstyled'>
                        {cmt}
                    </ul>
                </div>
            )
        }
        else {
            return (
                <div></div>
            );
        }
    }
              

    render() {
        const dish = this.props.dish;
        return (
            <div className="row">
                {this.renderDish(dish)}
                {this.renderComments(dish.comments)}
            </div>
        );
    }
}

export default Dishdetail;