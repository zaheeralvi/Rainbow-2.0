import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import First from './first/first';
import Second from './second/second';

import './brand.css'

class Brand extends Component {

  render() {
    return (
      <div>
        <div className='body_content'>
          <div className='sidebar sidebar_list second'>
            <ul>
              <li><NavLink to={'/brand/first'}>Company Info</NavLink ></li>
              <li><NavLink to={'/brand/second'}>Our Foundation</NavLink ></li>
              <li><NavLink to={'/brand/personality'}>Our Personality</NavLink ></li>
              <li><NavLink to={'/brand/voice'}>Our Voice</NavLink ></li>
              <li><NavLink to={'/brand/look'}>Our Look</NavLink ></li>
            </ul>
          </div>
          <div className='content'>
            <Route exact path='/brand/first' component={First} />
            <Route exact path='/brand/second' component={Second} />
          </div>
        </div>
      </div>
    );
  }
}

export default Brand;
