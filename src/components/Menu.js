import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const MenuItemCard = ({dish, onClick}) => {
    return (
        <Card onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardImgOverlay className="ml-5">
                <CardTitle>
                <h4>{dish.name}</h4>
                </CardTitle>
            </CardImgOverlay>
        </Card>
    )
}


const Menu = ({dishes, onClick}) => {
    // the main menu with title as overlay
    const menu = dishes.map((dish) => {
        return(
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <MenuItemCard dish={dish} onClick={onClick}/>
            </div>
        );
    });

    return(
        <div className="Menu">
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        </div>
    );
}

export default Menu;