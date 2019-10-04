import React, { Component } from 'react';
import Header from './shared/header/header';
import { NavLink, Route, Redirect } from 'react-router-dom';
import './App.css'
import Home from './components/home/home';
import Brand from './components/brand/brand';
import Build from './components/build/build';
import Setting from './components/user/setting/setting';
import Signup from './authentication/register/signup/signup';
import Signup2a from './authentication/register/signup-2a/signup-2a';
import Sidebar from './shared/sidebar';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className='body_content'>
          <Route exact path='/home' component={Sidebar} />
          <Route path='/build' component={Sidebar} />
          <Route path='/brand' component={Sidebar} />
          <Route path='/setting' component={Sidebar} />
          <div className='content'>
            <Route exact path='/home' component={Home} />
            <Route path='/build' component={Build} />
            <Route path='/brand' component={Brand} />
            <Route path='/setting' component={Setting} />
            <Route path='/user' component={Signup} />
            <Route path='/user/1' component={Signup2a} />
            <Route path=''>
              <Redirect to='/home' />
            </Route>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
