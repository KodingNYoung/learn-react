import React from 'react';
import { Jumbotron } from 'reactstrap';

const Home = (props) => {
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
                <h4 className="text-center">Home</h4>
            </div>
        </>
    )
}



export default Home;