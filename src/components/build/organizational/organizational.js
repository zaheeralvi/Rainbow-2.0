import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa";
import { Select } from 'dropdown-select';
import { GoLightBulb } from "react-icons/go";
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

class organizational extends Component {
    render() {
        let options = [{ label: 'label1', value: 'value1' }, { label: 'label2', value: 'value2' }]
        return (
            <div className=''>
                <h2 className='heading bold mb-3'>Organizational Values</h2>
                <h4 className='mb-5'>Possibly one of the most important aspects of your brand are your values. These are the select group of concepts that drive the way your company will operate in good times and especiall in tough times.</h4>
                <form className='form'>
                    <div className='form-group'>
                        <Select placeholder='Value #1' options={options} labelKey="label" valueKey="value" />
                        <OverlayTrigger overlay={<Tooltip>Tooltip!</Tooltip>}><span className='textarea_tooltip' variant="primary"><GoLightBulb /></span></OverlayTrigger>
                    </div>
                    <div className='form-group'>
                        <Select placeholder='Value #2' options={options} labelKey="label" valueKey="value" />
                    </div>
                    <div className='form-group'>
                        <Select placeholder='Value #3' options={options} labelKey="label" valueKey="value" />
                    </div>
                    <div className='form-group'>
                        <Select placeholder='Value #4' options={options} labelKey="label" valueKey="value" />
                    </div>
                    <div className='form-group'>
                        <Select placeholder='Value #5' options={options} labelKey="label" valueKey="value" />
                    </div>
                    <div className='mt-3 mb-5 text-right'>
                        <NavLink to='/build/introduction/elevator' className='float-left primary'> <FaAngleLeft /> Back</NavLink>
                        <NavLink to='/build/foundation/mission' className='btn_green m-0'>NEXT</NavLink>
                    </div>
                </form>
            </div>
        );
    }
}

export default organizational;