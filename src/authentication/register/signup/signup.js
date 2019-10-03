import React from 'react';
import './signup.css'
import {NavLink} from 'react-router-dom'

class Signup extends React.Component {
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
                            <button className='btn_green'>Next</button>
                        </div>
                        <p className='secondary'>By siging up, you agree to Patter’s <NavLink className='secondary' to=''><u>Terms of Service and Privacy Policy.</u></NavLink></p>
                        <p className='secondary'>Already have an account? <NavLink className='secondary' to=''><strong><u>Log In </u></strong></NavLink></p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Signup;