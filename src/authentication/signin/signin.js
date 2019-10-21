import React from 'react';
import './signin.css'
import {NavLink} from 'react-router-dom'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';

class Signin extends React.Component {
    constructor(props){
        super(props)
        this.state={
            email: 'zaheer@gmail.com',
            password: 'pass123'
        }
    }
    signInHandler = e => {
        e.preventDefault();
        firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(res => {
              console.log(res)
            // if (res.user) Auth.setLoggedIn(true);
          })
          .catch(e => {
           console.log(e)
          });
      };
    render() {
        return (
            <section className='setting_block pt-5 pl-5'>
                <div className='container'>
                    <h2 className='heading'>Log In To Your Account</h2>
                    <div className='form'>
                        <div className='form-group'>
                            <label className='label'>Email</label>
                            <input type="email" className='form-control' name='company' />
                        </div>
                        <div className='form-group'>
                            <label className='label'>Password</label>
                            <input type="password" className='form-control' name='company' />
                        </div>
                        <div className='form-group'>
                            <button className='btn_green' onClick={this.signInHandler}>Log in</button>
                        </div>
                        <p className='primary'>Do not have an account yet? <NavLink className='primary' to='/signup'><strong><u>Sign Up </u></strong></NavLink></p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Signin;