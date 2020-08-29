import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class Dishdetail extends Component {

    // the dish, with the title and description below the image
    renderDish = (dish) => {
        return (
            <Card>
                <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText> {dish.description}</CardText>
                </CardBody>
            </Card>
        )
    } 

    // the comment by the side of the extra details
    renderComments = (dish) => {
        const {comments} = dish;

        return comments.map((comment) => {
            // convert the date to locale string to display the month, day and year nicely
            const date = new Date(comment.date).toLocaleDateString(undefined, {year: "numeric", month: "long", day: "numeric"});

            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p> -- {comment.author}, {date}</p>
                </li>
            )
        })
    }

    render () {
        const {dish} = this.props;

        if (dish !== null){
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {this.renderComments(dish)}
                        </ul>
                    </div>
                </div>
            )
        } else {
            return <div></div>; 
        }

        
    }
}

export default Dishdetail;