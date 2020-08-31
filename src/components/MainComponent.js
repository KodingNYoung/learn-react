import React, {Component} from 'react';
import Home from './Home';
import Header from './Header';
import Menu from './Menu'
// import Dishdetail from './DishdetailComponent';
import Footer from './Footer';
import E404 from './404';
import {dishes} from '../Db'
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
    constructor (props) {
        super(props);

        this.state = {
            dishes: dishes,
        }
    }

    render () {
        const MenuPage = ()=> <Menu dishes ={this.state.dishes}/>;
        
        return (
            <div>
                <Header />      
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home}/>
                    <Route exact path="/menu" component={MenuPage}/>
                    <Route path="/404" component={E404}/>

                    <Redirect to="/404"/>
                </Switch>


                {/* <Dishdetail 
                    dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}
                    />  */}
                <Footer />
            </div>
        );
    }
}

export default Main;
