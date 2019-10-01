import React, { Component } from 'react';
import {Route, Redirect,Switch} from 'react-router-dom';
import Home from '../components/home/home';
import Brand from '../components/brand/brand';

class MyRouting extends Component{
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/brand' component={Brand} />
                {/* <Route path='**'>
                    <Redirect to='/'/>
                </Route> */}
            </Switch>
        );
    }
}

export default MyRouting;