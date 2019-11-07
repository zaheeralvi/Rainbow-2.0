import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa";
import { Select } from 'dropdown-select';
import SimpleReactValidator from 'simple-react-validator';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './foundation.css';
import Axios from 'axios';

class foundation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            verticals: [],
            CompanyTypes: [],
            getStages: [],
            getEmployeeRanges: [],
            comapanyName: '',
            product: '',
            country: '',
            city: '',
            selectedVerticals: { VerticalDescription: '' },
            selectedCompanyTypes: { CompanyTypeDescription: '' },
            selectedGetStages: { StageDescription: '' },
            selectedGetEmployeeRanges: { EmployeeRangeDescription: '' },
            url: 'http://ec2-34-198-96-172.compute-1.amazonaws.com//PatterService1/'
        }
        this.validator = new SimpleReactValidator({
            messages: {
                default: 'This field is Required.'
            },
        });
    }

    componentDidMount = () => {
        this.getVerticals();
        this.getCompanyTypes();
        this.getStages();
        this.getEmployeeRanges();
    }

    getVerticals = async () => {
        try {
            await Axios.get(this.state.url + 'getVerticals').then(res => {
                console.log(res)
                this.setState({ verticals: res.data })
            })
        } catch (err) {
            toast.error(err.message)
        }
    }

    getCompanyTypes = async () => {
        try {
            await Axios.get(this.state.url + 'getCompanyTypes').then(res => {
                console.log(res)
                this.setState({ CompanyTypes: res.data })
            })
        } catch (err) {
            toast.error(err.message)
        }
    }

    getEmployeeRanges = async () => {
        try {
            await Axios.get(this.state.url + 'getEmployeeRanges').then(res => {
                console.log(res)
                this.setState({ getEmployeeRanges: res.data })
            })
        } catch (err) {
            toast.error(err.message)
        }
    }

    getStages = async () => {
        try {
            await Axios.get(this.state.url + 'getStages').then(res => {
                console.log(res)
                this.setState({ getStages: res.data })
            })
        } catch (err) {
            toast.error(err.message)
        }
    }


    chnageHandler = (stVar, val) => {
        this.setState({
            [stVar]: val
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validator.allValid()) {
            let data={
                comapanyName:this.state.comapanyName,
                product:this.state.product,
                country:this.state.country,
                city:this.state.city,

            }
            console.log(data)
            toast.success('Great, Integrate Api')
        } else {
            toast.error('All fields are Required')
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    render() {
        return (
            <div className=''>
                <ToastContainer />
                <h2 className='heading bold mb-3'>Part 1: Our Foundation</h2>
                <h4 className='mb-5'>Every great brand is build on top of a strong foundation. These are the big picture elements that help guide the company from the top down.</h4>
                <form className='form' onSubmit={($event) => this.handleSubmit($event)} noValidate>
                    <div className='form-group'>
                        <input type="text" name='comapanyName' className='form-control' placeholder='Company Name (or DBA Name)' onChange={(e) => this.setState({ comapanyName: e.target.value })} />
                        <label className='error'>{this.validator.message('comapanyName', this.state.comapanyName, 'required')}</label>
                    </div>
                    <div className='form-group'>
                        <input type="text" className='form-control' name='product' placeholder='Product Name (if different)' onChange={(e) => this.setState({ product: e.target.value })} />
                        <label className='error'>{this.validator.message('product', this.state.product, 'required')}</label>
                    </div>
                    <div className='form-group'>
                        <Select placeholder='Vertical (Industry)' name='selectedVerticals' value={this.state.selectedVerticals} autoComplete='true' options={this.state.verticals} labelKey="VerticalDescription" valueKey="VerticalID" onChange={(val) => this.chnageHandler('selectedVerticals', val)} />
                        <label className='error'>{this.validator.message('selectedVerticals', this.state.selectedVerticals.VerticalID, 'required')}</label>
                    </div>
                    <div className='form-group'>
                        <Select placeholder='Company Type' value={this.state.selectedCompanyTypes} autoComplete='true' options={this.state.CompanyTypes} labelKey="CompanyTypeDescription" valueKey="CompanyTypeID" onChange={(val) => this.chnageHandler('selectedCompanyTypes', val)} />
                        <label className='error'>{this.validator.message('selectedCompanyTypes', this.state.selectedCompanyTypes.CompanyTypeID, 'required')}</label>
                    </div>
                    <div className='form-group'>
                        <Select placeholder='Stage' value={this.state.selectedGetStages} autoComplete='true' options={this.state.getStages} labelKey="StageDescription" valueKey="StageID" onChange={(val) => this.chnageHandler('selectedGetStages', val)} />
                        <label className='error'>{this.validator.message('selectedGetStages', this.state.selectedGetStages.StageID, 'required')}</label>
                    </div>
                    <div className='form-group'>
                        <input type="text" className='form-control' name='country' placeholder='Country' onChange={(e) => this.setState({ country: e.target.value })} />
                        <label className='error'>{this.validator.message('country', this.state.country, 'required')}</label>
                    </div>
                    <div className='form-group'>
                        <input type="text" className='form-control' name='city' placeholder='City' onChange={(e) => this.setState({ city: e.target.value })} />
                        <label className='error'>{this.validator.message('city', this.state.city, 'required')}</label>
                    </div>
                    <div className='form-group'>
                        <Select placeholder='5-10' value={this.state.selectedGetEmployeeRanges} autoComplete='true' options={this.state.getEmployeeRanges} labelKey="EmployeeRangeDescription" valueKey="EmployeeRangeID" onChange={(val) => this.chnageHandler('selectedGetEmployeeRanges', val)} />
                        <label className='error'>{this.validator.message('selectedGetEmployeeRanges', this.state.selectedGetEmployeeRanges.EmployeeRangeID, 'required')}</label>
                    </div>
                    <div className='mt-3 mb-5 text-right'>
                        <NavLink to='/build/introduction' className='float-left primary back_btn'> <FaAngleLeft /> Back</NavLink>
                        <button type='submit' className='btn_green m-0'>NEXT</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default foundation;