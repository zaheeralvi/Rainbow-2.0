import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa";
import { GoLightBulb } from "react-icons/go";
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

class origin extends Component {
    render() {
        return (
            <div className=''>
                <h2 className='heading bold mb-3'>Origin Story</h2>
                <h4>Your Origin Story lets your customers and your stakeholders know where the company came from. This helps make a personal connection and builds affinity.</h4>
                <form className='form pt-5'>
                    <div className='form-group'>
                        <textarea placeholder='Your Origin Story' className='form-control' rows='5'></textarea>
                        <OverlayTrigger overlay={<Tooltip>Tooltip!</Tooltip>}><span className='textarea_tooltip' variant="primary"><GoLightBulb /></span></OverlayTrigger>
                    </div>
                    <div className='mt-3 mb-5 text-right'>
                        <NavLink to='/build/foundation/origin' className='float-left primary'> <FaAngleLeft /> Back</NavLink>
                        <NavLink to='/build/foundation/elevator' className='btn_green m-0'>Next</NavLink>
                    </div>
                </form>
            </div>
        );
    }
}

export default origin;