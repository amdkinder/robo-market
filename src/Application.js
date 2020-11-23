import React from "react";
import { Navbar } from './MainPage/Navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { FooterSide } from "./MainPage/SiteFooter";
import HomePage from "./MainPage/HomePage";
import { HomeScreen } from "./screens/HomeScreen";
import { ProductScreen } from "./screens/ProductScreen";
import { Login } from "./components/Login";
import { AppPlastic } from './screens/AppPlastic'
import { Container } from 'react-bootstrap'
import { Robots } from './screens/Robots'
import { Arduino } from './screens/Arduino'
import { Sensors } from './screens/Sensors'
import { Mators } from './screens/Mators'
import { CartScreen } from "./screens/CartScreen";




export function Application() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Container py={5}>
            <Route path="/maxsulotlar" exact component={HomeScreen} />
            <Route path="/product/:id" exact component={ProductScreen} />
            <Route path="/login" component={Login} />
            <Route path='/cart/:id?' component={CartScreen} />
            <Route path='/robotlar' component={Robots} />
            <Route path='/plastic' component={AppPlastic} />
            <Route path='/arduino' component={Arduino} />
            <Route path='/sensorlar' component={Sensors} />
            <Route path='/matorlar' component={Mators} />
          </Container>
        </Switch>
        <FooterSide />
      </div>
    </Router>
  );

}
