import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

const Dishdetail = ({dish}) => {
    
    // the dish, with the title and description below the image
    const renderDish = (dish) => {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText> {dish.description}</CardText>
                </CardBody>
            </Card>
        )
    } 

    // the comment by the side of the extra details
    const renderComments = (dish) => {
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

    return (
        dish !== undefined ? 
            <div className="container row">
                <div className="col-12 col-md-5 m-1">
                    {renderDish(dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {renderComments(dish)}
                    </ul>
                </div>
            </div>
            :<div></div>
    )  
}

export default Dishdetail;