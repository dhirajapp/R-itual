import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              R-itual
            </Link>
          </div>
          <div>
            <Link to="/cart">
            <i class="fas fa-cart-plus">Cart</i>
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin"><i class="fas fa-user-plus">Sign In</i></Link>
            )}
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All right reserved Get to Know Us
        <blockquote>
Careers
Blog
About Amazon
Sustainability
Investor Relations
Amazon Devices
Amazon Tours
Make Money with Us
Sell products on Amazon
Sell apps on Amazon
Become an Affiliate
Advertise Your Products
Self-Publish with Us
Host an Amazon Hub
›See More Make Money with Us
Amazon Payment Products
Amazon Business Card
Shop with Points
Reload Your Balance
Amazon Currency Converter
Let Us Help You
Amazon and COVID-19
Your Account
Your Orders
Shipping Rates & Policies
Returns & Replacements
Manage Your Content and Devices
Amazon Assistant
Help 

</blockquote>
<span className="chatapp">
  <a href="https://RealTimeChatapp.dhirajapp.repl.co"  className={'fa fa-sms'} > Help ?</a>
      </span>
      <br/>
       <br/>
</footer>
      <br/>
       <br/>
      </div>
    </BrowserRouter>
  );
}

export default App;
 