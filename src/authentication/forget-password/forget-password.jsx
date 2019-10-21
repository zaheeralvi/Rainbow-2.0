import React from 'react';
import {NavLink} from 'react-router-dom'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';

class ForgetPassword extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email: 'zaheermalik284@gmail.com',
        }
    }
    HandleResetpassword=()=> {
        var auth = firebase.auth();
        auth.sendPasswordResetEmail(this.state.email).then(function() {
            console.log('Reset link is sent on you email address')
          }).catch(function(error) {
            // An error happened.
          });
    }
    render(){
        return(
            <section className='setting_block pt-5 pl-5'>
                <div className='container'>
                    <h2 className='heading'>Recover Your Password</h2>
                    <h4 className='text-body mb-4'>Enter your email address below and we will send you <br/>instructions to reset your password.</h4>
                    <div className='form'>
                        <div className='form-group'>
                            <label className='label'>Email</label>
                            <input type="email" className='form-control' name='company' />
                        </div>
                        <div className='form-group'>
                            <button className='btn_green' onClick={this.HandleResetpassword}>SUBMIT</button>
                        </div>
                        <p className='primary'>Do not have an account yet? <NavLink className='primary' to=''><strong><u>Sign Up </u></strong></NavLink></p>
                    </div>
                </div>
            </section>
        )
    }
}

export default ForgetPassword;