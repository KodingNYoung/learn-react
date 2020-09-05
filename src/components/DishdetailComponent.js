import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
const Dishdetail = ({dish, comments}) => {
    console.log(dish, comments);
    // the dish, with the title and description below the image
    const RenderDish = ({dish}) => {
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
    const RenderComments = (dish) => {
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
            <div className="container">
              <div className="row">
                <Breadcrumb>
                  <BreadcrumbItem>
                    <Link to="/menu">Menu</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>
                    {dish.name}
                  </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                  <h3>{dish.name}</h3>
                  <hr/>
                </div>
              </div>
              <div className="row">
                  <div className="col-12 col-md-5 m-1">
                      <RenderDish dish={dish} />
                  </div>
                  <div className="col-12 col-md-5 m-1">
                      <h4>Comments</h4>
                      <ul className="list-unstyled">
                          <RenderComments comments={comments} />
                      </ul>
                  </div>
              </div>
            </div>
            :<div></div>
    )  
}

export default Dishdetail;