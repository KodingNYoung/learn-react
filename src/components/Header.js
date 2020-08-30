import React, { Component } from 'react';
import {Navbar, NavbarBrand, Jumbotron} from 'reactstrap';

class Header extends Component {
    constructor () {
        super()
    }


    render() {
        return(
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">
                            <span>Food Menu  App</span>
                        </NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-md-6">
                                <h1>Restuarant of Con Fusion</h1>
                                <p>We take inspiration from the best cuisines in the world, and create a unique fusion experience. Our  lipsmacking creations will tickle your culinary senses</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        )
    }
}

export default Header;