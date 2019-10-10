import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa";
import { Select } from 'dropdown-select';
import { GoLightBulb } from "react-icons/go";
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
class character extends Component {
    render() {
        let options = [{ label: 'label1', value: 'value1' }, { label: 'label2', value: 'value2' }]
        return (
            <div>
                <h2 className='heading bold mb-3'>Character Attributes</h2>
                <h4 className='mb-5'>Your character attributes give final definition to how the organization conducts itself. They provide further context for team members and help set expectations for stakeholders.</h4>
                <form className='form'>
                    <div className='form-group'>
                        <Select placeholder='Characteristic #1' options={options} labelKey="label" valueKey="value" />
                        <OverlayTrigger overlay={<Tooltip>Tooltip!</Tooltip>}><span className='textarea_tooltip' variant="primary"><GoLightBulb /></span></OverlayTrigger>
                    </div>
                    <div className='form-group'>
                        <Select placeholder='Characteristic #2' options={options} labelKey="label" valueKey="value" />
                    </div>
                    <div className='form-group'>
                        <Select placeholder='Characteristic #3' options={options} labelKey="label" valueKey="value" />
                    </div>
                    <div className='form-group'>
                        <Select placeholder='Characteristic #4' options={options} labelKey="label" valueKey="value" />
                    </div>
                    <div className='form-group'>
                        <Select placeholder='Characteristic #5' options={options} labelKey="label" valueKey="value" />
                    </div>
                    <div className='mt-3 mb-5 text-right'>
                        <NavLink to='/build/personality' className='float-left primary back_btn'> <FaAngleLeft /> Back</NavLink>
                        <NavLink to='/build/voice' className='btn_green m-0'>NEXT</NavLink>
                    </div>
                </form>
            </div>
        );
    }
}

export default character;