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
import Signup2b from './authentication/register/signup-2b/signup-2b';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className='body_content'>

          {/* mention the route where you want sidebar */}
          <Route exact path='/' component={Sidebar} />
          <Route path='/build' component={Sidebar} />
          <Route path='/brand' component={Sidebar} />
          <Route path='/setting' component={Sidebar} />
          <Route path='/user' component={Sidebar} />
          {/* mention the route where you want sidebar */}

          <div className='content'>
            <Route exact path='/' component={Home} />
            <Route path='/build' component={Build} />
            <Route path='/brand' component={Brand} />
            <Route exact path='/setting' component={Setting} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/signup/a' component={Signup2a} />
            <Route exact path='/signup/b' component={Signup2b} />
            <Route path=''>
              <Redirect to='/' />
            </Route>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
