import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

//import components
import myAccount from './components/myAccount';
import myOrders from './components/myOrders';
import myPosts from './components/myPosts';
import PostItem from './components/post_item';
import PageNotFound from './components/pageNotFound';

class App extends Component{
  render(){
    return <div>Home</div>
  }
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <header>
        <Link to="/">Home</Link><br/>
        <Link to="/account">My Account</Link><br/>
        <Link to="/order">My Order </Link><br/>
        <Link to="/posts">My Posts</Link><br/>
        <hr/>
      </header>
      <Route exact path="/" component={App}></Route>
      <Route exact path="*" component={PageNotFound}></Route>
      <Route exact path="/account" component={myAccount}></Route>
      <Route exact path="/order" component={myOrders}></Route>
      <Route exact path="/posts" component={myPosts}></Route>
      <Route exact path="/posts/:id" component={PostItem}></Route>
     
    </div>
  </BrowserRouter>
  ,document.querySelector("#root"));