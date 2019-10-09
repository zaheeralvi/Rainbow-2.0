import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import { NavLink, Route, Redirect, Switch } from 'react-router-dom'

import './build.css'
import introduction from './introduction/introduction';
import foundation from './foundation/foundation';
import personality from './personality/personality';
import voice from './voice/voice';
import mission from './foundation/mission/mission';
import origin from './foundation/origin/origin';
import elevator from './foundation/elevator/elevator';
import organizational from './organizational/organizational';
import character from './personality/character/character';

class Build extends Component {

  render() {
    return (
      <section className='pt-3 build px-3'>
        <div className='container'>
          <div id="noanim-tab-exampl">
            <ul className='navbar no-border p-0 mb-3'>
              <Nav.Item>
                <NavLink to='/build/introduction'>Introduction</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/build/foundation">Our Foundation </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/build/personality">Our Personality </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/build/voice">Our Voice </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/build/look">Our Look </NavLink>
              </Nav.Item>
            </ul>
            <div className='col-sm-7 col-xs-12 p-0 my-5'>
              <Switch>
                <Route path='/build/introduction' component={introduction} />

                <Route exact path='/build/foundation' component={foundation} />
                <Route path='/build/foundation/mission' component={mission} />
                <Route path='/build/foundation/origin' component={origin} />
                <Route path='/build/foundation/elevator' component={elevator} />
                <Route path='/build/foundation/organizational' component={organizational} />


                <Route exact path='/build/personality' component={personality} />
                <Route path='/build/personality/character' component={character} />

                <Route path='/build/voice' component={voice} />
                <Route path='/build/look' component={voice} />
                <Route path='/build'>
                  <Redirect to='/build/introduction' />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Build;
