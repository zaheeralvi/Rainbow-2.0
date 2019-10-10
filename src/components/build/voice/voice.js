import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { FaAngleLeft, FaPlus } from "react-icons/fa";
import { GoLightBulb } from "react-icons/go";
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import './voice.css'

class voice extends Component {
    render() {
        return (
            <div className='voice'>
                <h2 className='heading bold mb-3'>Part 3: Our Voice</h2>
                <h4 className='mb-5'>This sections describes how we communicate both internally and externally. This is an extention of your team’s personality and should be consistent.</h4>
                <form className='form'>
                    <h4 className='heading bold mb-3'>Keywords</h4>
                    <h4 className='mb-5'>This is an inventory of words that are used to describe your organization, your product and your team. They could be used in both internal and external communication.</h4>
                    <div className='form-group mb-3'>
                        <input type="text" className='form-control' />
                        <FaPlus className='addPlus' />
                        <span variant="primary">
                            <OverlayTrigger overlay={<Tooltip>Tooltip!</Tooltip>}><span className='textarea_tooltip' variant="primary"><GoLightBulb /></span></OverlayTrigger>
                        </span>
                    </div>
                    <div className='form-group'>
                        <div className='tag_container'></div>
                    </div>
                    <h4 className='heading bold mb-3'>Buzzwords</h4>
                    <h4 className='mb-5'>These are words that fit the brand but should not be over used at risk of watering down their impact.</h4>
                    <div className='form-group mb-3'>
                        <input type="text" className='form-control' />
                        <FaPlus className='addPlus' />
                        <span variant="primary">
                            <OverlayTrigger overlay={<Tooltip>Tooltip!</Tooltip>}><span className='textarea_tooltip' variant="primary"><GoLightBulb /></span></OverlayTrigger>
                        </span>
                    </div>
                    <div className='form-group'>
                        <div className='tag_container'></div>
                    </div>
                    <div className='mt-3 mb-5 text-right'>
                        <NavLink to='/build/personality/character' className='float-left primary back_btn'> <FaAngleLeft /> Back</NavLink>
                        <NavLink to='/build/look' className='btn_green m-0'>NEXT</NavLink>
                    </div>
                </form>
            </div>
        );
    }
}

export default voice;