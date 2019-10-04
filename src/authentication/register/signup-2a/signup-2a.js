import React from 'react';
import './signup-2a.css'
import {NavLink} from 'react-router-dom'

class Signup2a extends React.Component {
    render() {
        return (
            <section className='setting_block pt-5 pl-5'>
                <div className='container'>
                    <h2 className='heading'>Your Email Address Is Linked</h2>
                    <h4>The email address that you’ve entered has been linked to the account: </h4>
                    <h3 className='primary'>House Edge Digital</h3>
                    <p>Is this correct?</p>
                    <div className='form'>
                        <div className='form-group'>
                            <button className='btn_green'>Yes</button>
                            <button className='btn_white'>No</button>
                        </div>
                        <p className='secondary'>Already have an account? <NavLink className='secondary' to=''><strong><u>Log In </u></strong></NavLink></p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Signup2a;