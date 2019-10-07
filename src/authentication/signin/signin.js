import React from 'react';
import './signin.css'
import {NavLink} from 'react-router-dom'

class Signin extends React.Component {
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
                            <button className='btn_green'>Log in</button>
                        </div>
                        <p className='primary'>Do not have an account yet? <NavLink className='primary' to=''><strong><u>Sign Up </u></strong></NavLink></p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Signin;