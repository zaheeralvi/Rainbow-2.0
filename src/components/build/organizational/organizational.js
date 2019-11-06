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
        this.state={
            show: false, 
            brandData: '',
            options:[],
            url: 'http://ec2-34-198-96-172.compute-1.amazonaws.com//PatterService1/getCompanyBrandElement?'
        }
    }

    componentDidMount = async () => {
        try {
            await Axios.get(this.state.url+`companyID=${1}&BrandElementID=3`).then(res => {
                console.log(res)
                let vals=[]
                let opt=[]
                res.data.CompanyBrandElementValues.forEach((v,i)=> { 
                    opt.push(v.Value)
                    vals.push(v.Value.ValuesID)
                 }) 
                this.setState({ 
                    brandData: res.data, 
                    vals: vals,
                    options: opt,
                })
            })
        } catch (err) {
            toast.error(err.message)
        }
        console.log(this.state.vals)
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
    
    render() {
        const {show} = this.state;
        return (
            <div className=''>
                <h2 className='heading bold mb-3'>Organizational Values</h2>
                <h4 className='mb-5'>Possibly one of the most important aspects of your brand are your values. These are the select group of concepts that drive the way your company will operate in good times and especiall in tough times.</h4>
                <form className='form'>
                    <div className='form-group'>
                        <Select placeholder='Value #1' options={this.state.options[0]} Value='6' labelKey="ValuesName" valueKey="ValuesID" />
                        <span className='textarea_tooltip' onClick={this.handleShow} ><GoLightBulb /></span>
                    </div>
                    <div className='form-group'>
                        <Select placeholder='Value #2' options={this.state.options[1]} labelKey="ValuesName" valueKey="ValuesID" />
                    </div>
                    <div className='form-group'>
                        <Select placeholder='Value #3' options={this.state.options[2]} labelKey="ValuesName" valueKey="ValuesID" />
                    </div>
                    <div className='form-group'>
                        <Select placeholder='Value #4' options={this.state.options[3]} labelKey="ValuesName" valueKey="ValuesID" />
                    </div>
                    <div className='form-group'>
                        <Select placeholder='Value #5' options={this.state.options[4]} labelKey="ValuesName" valueKey="ValuesID" />
                    </div>
                    <div className='mt-3 mb-5 text-right'>
                        <NavLink to='/build/foundation/organizational' className='float-left primary back_btn'> <FaAngleLeft /> Back</NavLink>
                        <NavLink to='/build/personality' className='btn_green m-0'>NEXT</NavLink>
                    </div>
                </form>
                <Popup show={show} hide={this.handleClose}/>
            </div>
        );
    }
}

export default organizational;