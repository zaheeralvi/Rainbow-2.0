import React, { Component } from 'react';
import {Route, Redirect,Switch} from 'react-router-dom';
import First from '../components/brand/first/first';
import Second from '../components/brand/second/second';

class MyBrandRouting extends Component{
    render(){
        return(
            <Switch>
                <Route exact path='/brand/first' component={First} />
                <Route exact path='/brand/second' component={Second} />
                <Route path='**'>
                    <Redirect to='/brand'/>
                </Route>
            </Switch>
        );
    }
}

export default MyBrandRouting;