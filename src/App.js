import logo from './logo.svg';
import './App.css';

import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Header from './components/Home/Shared/Header/Header';
import Services from './components/Services/Services';
import AuthProvider from './contexts/AuthProvider';
import Joining from './components/Joining/Joining/Joining';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AddUser from './components/AddUser/AddUser';
import ManageOrder from './components/ManageOrder/ManageOrder';
import UpdateUser from './components/UpdateUser/UpdateUser';
import Footer from './components/Footer/Footer';


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
            <Route path="/users/add">
              <AddUser></AddUser>
            </Route>
            <Route path="/order">
              <ManageOrder></ManageOrder>
            </Route>
            <Route path="/users/update/:id">
              <UpdateUser></UpdateUser>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/join/:serviceId">
              <Joining></Joining>

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
