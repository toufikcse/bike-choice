import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import initializeAthentication from './Firebase/firebase.init';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import About from './components/About/About';
import Explorebike from './components/ExploreBikes/Explorebike';
import Order from './components/Order/Order';
import Dashboardhome from './components/Dashboard/Dashboardhome/Dashboardhome';
initializeAthentication();

function App() {


  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/explorebike">
              <Explorebike></Explorebike>
            </Route>

            <PrivateRoute path="/bike/:bikeId">
              <Order></Order>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <Dashboardhome></Dashboardhome>
            </PrivateRoute>

            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
