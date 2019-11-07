import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa";
import { Select } from 'dropdown-select';
import { GoLightBulb } from "react-icons/go";
import Popup from '../../../shared/modal/modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';

class organizational extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            brandData: '',
            val1: '',
            val2: '',
            val3: '',
            val4: '',
            val5: '',
            options: [],
            url: 'http://ec2-34-198-96-172.compute-1.amazonaws.com//PatterService1/'
        }
    }

    componentDidMount = async () => {
        try {
            await Axios.get(this.state.url + `getCompanyBrandElement?companyID=${1}&BrandElementID=3`).then(res => {
                console.log(res)
                let vals = []
                res.data.CompanyBrandElementValues.forEach((v, i) => {
                    vals.push(v.Value.ValuesID)
                })
                this.setState({
                    brandData: res.data,
                    vals: vals,
                })
            })
        } catch (err) {
            toast.error(err.message)
        }

        await Axios.get(this.state.url + `getValues`).then(res => {
            console.log(res)
            this.setState({
                options: res.data,
            })
        })
        try {

        } catch (error) {
            toast.error(error.message)
        }

    }

    handleClose = () => {
        this.setState({
            show: false,
        })
    };
    handleShow = () => {
        this.setState({
            show: true,
        })
    };

    showValue=(v)=>{
        console.log(v)
    }

    chnageHandler = (stVar, val) => {
        console.log(val)
        this.setState({
            [stVar]: val
        })
    }

    render() {
        const { show } = this.state;
        return (
            <div className=''>
                <h2 className='heading bold mb-3'>Organizational Values</h2>
                <h4 className='mb-5'>Possibly one of the most important aspects of your brand are your values. These are the select group of concepts that drive the way your company will operate in good times and especiall in tough times.</h4>
                <form className='form'>
                    <div className='form-group'>
                        <Select placeholder='Value #1' onChange={(val)=>this.showValue(val)} options={this.state.options} value={this.val1} labelKey="ValuesName" valueKey="ValuesID" onChange={(val) => this.chnageHandler('val1', val)} />
                        <span className='textarea_tooltip' onClick={this.handleShow} ><GoLightBulb /></span>
                    </div>
                    <div className='form-group'>
                        <Select placeholder='Value #2' options={this.state.options} labelKey="ValuesName" value={this.val2} valueKey="ValuesID" onChange={(val) => this.chnageHandler('val2', val)} />
                    </div>
                    <div className='form-group'>
                        <Select placeholder='Value #3' options={this.state.options} labelKey="ValuesName" value={this.val3} valueKey="ValuesID" onChange={(val) => this.chnageHandler('val3', val)} />
                    </div>
                    <div className='form-group'>
                        <Select placeholder='Value #4' options={this.state.options} labelKey="ValuesName" value={this.val4} valueKey="ValuesID" onChange={(val) => this.chnageHandler('val4', val)} />
                    </div>
                    <div className='form-group'>
                        <Select placeholder='Value #5' options={this.state.options} labelKey="ValuesName" value={this.val5} valueKey="ValuesID" onChange={(val) => this.chnageHandler('val5', val)} />
                    </div>
                    <div className='mt-3 mb-5 text-right'>
                        <NavLink to='/build/foundation/organizational' className='float-left primary back_btn'> <FaAngleLeft /> Back</NavLink>
                        <NavLink to='/build/personality' className='btn_green m-0'>NEXT</NavLink>
                    </div>
                </form>
                <Popup show={show} hide={this.handleClose} />
            </div>
        );
    }
}

export default organizational;