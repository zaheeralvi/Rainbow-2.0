import React from 'react';
import './signup.css'
import {NavLink} from 'react-router-dom'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';

class Signup extends React.Component {
    constructor(props){
        super(props)
        this.state={
            email: 'zaheermalik284@gmail.com',
            password: 'pass123'
        }
    }
    signUpHandler = e => {
        e.preventDefault();
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
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
                    <h2 className='heading'>Create Your Account</h2>
                    <h4>Get started building your best brand</h4>
                    <div className='form'>
                        <div className='form-group'>
                            <label className='label'>First Name</label>
                            <input type="text" className='form-control' name='company' />
                        </div>
                        <div className='form-group'>
                            <label className='label'>Last Name</label>
                            <input type="text" className='form-control' name='company' />
                        </div>
                        <div className='form-group'>
                            <label className='label'>Email Address</label>
                            <input type="email" className='form-control' name='company' />
                        </div>
                        <div className='form-group'>
                            <label className='label'>Password</label>
                            <input type="password" className='form-control' name='company' />
                        </div>
                        <div className='form-group'>
                            <button className='btn_green' onClick={this.signUpHandler}>Next</button>
                        </div>
                        <p className='primary'>By siging up, you agree to Patter’s <NavLink className='primary' to=''><u>Terms of Service and Privacy Policy.</u></NavLink></p>
                        <p className='primary'>Already have an account? <NavLink className='primary' to='/login'><strong><u>Log In </u></strong></NavLink></p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Signup;