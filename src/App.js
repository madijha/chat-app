import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import splash from "./containers/splash";
import home from "./containers/home";
import about from "./containers/about";
import login from "./containers/login";
import register from "./containers/register";
import main from "./containers/main";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={splash} />
          <Route path="/home" exact component={home} />
          <Route path="/about" exact component={about} />
          <Route path="/login" exact component={login} />
          <Route path="/register" exact component={register} />
          <Route path="/main" exact component={main} />
        </div>
      </BrowserRouter>
    )
  }
}
