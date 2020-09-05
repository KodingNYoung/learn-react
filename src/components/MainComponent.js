import React, {Component} from 'react';
import Home from './Home';
import Menu from './Menu'
import Contact from './Contact'
import Header from './Header';
import Dishdetail from './DishdetailComponent';
import Footer from './Footer';
import E404 from './404';
import {dishes} from '../shared/Db'
import {comments} from '../shared/comments'
import {leaders} from '../shared/leaders'
import {promotions} from '../shared/promotions'
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
  constructor (props) {
    super(props);

    this.state = {
      dishes: dishes,
      comments: comments,
      leaders: leaders,
      promotions: promotions
    }
  }

  render () {
    // console.log(dishes, leaders, promotions)
      const MenuPage = ()=> <Menu dishes ={this.state.dishes}/>;
      
      const HomePage = () =>{
        return (
          <Home 
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}

          leader = {this.state.leaders.filter((leader) => leader.featured)[0]}

          promo = {this.state.promotions.filter((promo) => promo.featured)[0]}
          />
        )
      }

      const DishPage = ({match}) => {
        const selectedDish = this.state.dishes.filter(dish => dish.name === match.params.name)[0];
        const dishComments = this.state.comments.filter(comment => comment.dishId === selectedDish.id);

        return (
          <Dishdetail 
          dish={selectedDish}
          comments = {dishComments}
          />
        )
      }
      return (
          <div>
              <Header />      
              <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/home" component={HomePage}/>
                  <Route exact path="/menu" 
                  component={MenuPage}/>
                  <Route path="/menu/:name" component={DishPage} />
                  <Route path="/contact" component={Contact} />
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
