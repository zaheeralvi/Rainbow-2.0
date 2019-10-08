import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa";
import { GoLightBulb } from "react-icons/go";
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

class mission extends Component {
    render() {
        return (
            <div className=''>
                <h2 className='heading bold mb-3'>Mission/ Purpose</h2>
                <h4>Your Mission or Purpose is a short statement that explains why your organization exists and paints a picture of what it hopes to achieve.</h4>
                <form className='form pt-5'>
                    <div className='form-group'>
                        <textarea placeholder='Your Mission/ Purpose' className='form-control' rows='5'></textarea>
                        <OverlayTrigger overlay={<Tooltip>Tooltip!</Tooltip>}><span className='textarea_tooltip' variant="primary"><GoLightBulb /></span></OverlayTrigger>
                    </div>
                    <div className='mt-3 mb-5 text-right'>
                        <NavLink to='/build/foundation' className='float-left primary'> <FaAngleLeft /> Back</NavLink>
                        <NavLink to='/build/foundation/origin' className='btn_green m-0'>Next</NavLink>
                    </div>
                </form>
            </div>
        );
    }
}

export default mission;