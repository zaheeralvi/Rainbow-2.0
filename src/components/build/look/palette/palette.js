import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa";
import { GoLightBulb } from "react-icons/go";
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import './palette.css'

class palette extends Component {
    render() {
        return (
            <div className='palette'>
                <h2 className='heading bold mb-3'>Color Palette</h2>
                <h4 className='mb-3'>Your use of color is critical to maintaining consistency across your brand and visual channels. These colors should represent the brand elements already described and should be used correctly in all applications.</h4>
                <h4 className='mb-5'>All entries should be in HEX value.</h4>
                <form className='form'>
                    <div className='form-group'>
                        <input type="text" className='form-control color' placeholder='Color #1' />
                        <input type="text" className='form-control percentage' placeholder='%' />
                        <OverlayTrigger overlay={<Tooltip>Tooltip!</Tooltip>}><span className='textarea_tooltip' variant="primary"><GoLightBulb /></span></OverlayTrigger>
                    </div>
                    <div className='form-group'>
                        <input type="text" className='form-control color' placeholder='Color #2' />
                        <input type="text" className='form-control percentage' placeholder='%' />
                    </div>
                    <div className='form-group'>
                        <input type="text" className='form-control color' placeholder='Color #3' />
                        <input type="text" className='form-control percentage' placeholder='%' />
                    </div>
                    <div className='form-group'>
                        <input type="text" className='form-control color' placeholder='Color #4' />
                        <input type="text" className='form-control percentage' placeholder='%' />
                    </div>
                    <div className='form-group'>
                        <input type="text" className='form-control color' placeholder='Color #5' />
                        <input type="text" className='form-control percentage' placeholder='%' />
                    </div>
                    <div className='form-group'>
                        <textarea className='textarea form-control'></textarea>
                    </div>
                    <div className='mt-3 mb-5 text-right'>
                        <NavLink to='/build/look/palette' className='float-left primary back_btn'> <FaAngleLeft /> Back</NavLink>
                        <NavLink to='/build/complete' className='btn_green m-0'>NEXT</NavLink>
                    </div>
                </form>
            </div>
        );
    }
}

export default palette;