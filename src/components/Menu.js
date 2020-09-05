import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'

const MenuItemCard = ({dish}) => {
    return (
        <Link to={`/menu/${dish.name}`}>
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardImgOverlay className="ml-5">
                <CardTitle>
                <h4>{dish.name}</h4>
                </CardTitle>
            </CardImgOverlay>
          </Card>
        </Link>
    )
}


const Menu = ({dishes}) => {
    // the main menu with title as overlay
    const menu = dishes.map((dish) => {
        return(
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <MenuItemCard dish={dish}/>
            </div>
        );
    });

    return(
        <div className="Menu">
            <div className="container">
              <div className="row">
                <Breadcrumb>
                  <BreadcrumbItem>
                    <Link to="/">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>
                    Menu
                  </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                  <h3>Menu</h3>
                  <hr/>
                </div>
              </div>
              <div className="row">
                  {menu}
              </div>
            </div>
        </div>
    );
}

export default Menu;