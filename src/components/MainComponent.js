import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import Header from './Header';
import Dishdetail from './DishdetailComponent';
import Footer from './Footer';
import E404 from './404';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Main extends Component {
  render() {
    const MenuPage = () => <Menu dishes={this.props.dishes} />;

    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          promo={this.props.promotions.filter((promo) => promo.featured)[0]}
        />
      );
    };

    const DishPage = ({ match }) => {
      const selectedDish = this.props.dishes.filter(
        (dish) => dish.name === match.params.name
      )[0];
      const dishComments = this.props.comments.filter(
        (comment) => comment.dishId === selectedDish.id
      );

      return <Dishdetail dish={selectedDish} comments={dishComments} />;
    };
    const AboutPage = () => {
      return <About leaders={this.props.leaders} />;
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/home' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route exact path='/menu' component={MenuPage} />
          <Route path='/menu/:name' component={DishPage} />
          <Route path='/contact' component={Contact} />
          <Route path='/404' component={E404} />

          <Redirect to='/404' />
        </Switch>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions,
  };
};
export default withRouter(connect(mapStateToProps)(Main));
