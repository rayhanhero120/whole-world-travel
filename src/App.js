import logo from './logo.svg';
import './App.css';

import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Header from './components/Home/Shared/Header/Header';
import Services from './components/Services/Services';
import AuthProvider from './contexts/AuthProvider';
import PlaceOrder from './components/PlaceOrder/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

import ManageOrder from './components/ManageOrder/ManageOrder';
import UpdateUser from './components/UpdateUser/UpdateUser';
import Footer from './components/Footer/Footer';
import MyOrders from './components/MyOrders/MyOrders';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/service">
              <Services></Services>
            </Route>
            <privateRoute path="/users/add">
              <MyOrders></MyOrders>
            </privateRoute>
            <privateRoute path="/order">
              <ManageOrder></ManageOrder>
            </privateRoute>
            <Route path="/users/update/:id">
              <UpdateUser></UpdateUser>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/placeOrder/:serviceId">
              <PlaceOrder></PlaceOrder>

            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
