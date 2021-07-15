import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Manu/Home'
import Product from './components/Manu/Product'
import Services from './components/Manu/Services'
import ContactUs from './components/Manu/ContactUs'
import SignUp from './components/Manu/SignUp'
import Footer from './components/Footer/Footer'
import {useState} from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route exact path="/Product" component={Product} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
