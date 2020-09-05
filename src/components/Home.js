import React from 'react';
import { Jumbotron, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const Home = (props) => {
  console.log(props)
  return (
    <>  
      <Jumbotron>
              <div className="container">
                  <div className="row row-header">
                      <div className="col-12 col-md-6">
                          <h1>Con Fusion Restuarant </h1>
                          <p>We take inspiration from the best cuisines in the world, and create a unique fusion experience. Our  lipsmacking creations will tickle your culinary senses</p>
                      </div>
                  </div>
              </div>
          </Jumbotron>

      <div className="container">
        <div className="row align-items-start">
          <div className="col-12 col-md m-1">
            <RenderCard item={props.dish} />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard item={props.promo} />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard item={props.leader} />
          </div>
        </div>
      </div>
      </>
  )
}

const RenderCard = ({item}) => {
  console.log(item.designation)
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>

        {item.designation? 
        <CardSubtitle>{item.designation}</CardSubtitle> :
         null}

          <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  )
}

export default Home;