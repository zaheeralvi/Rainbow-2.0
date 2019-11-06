import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa";
import { GoLightBulb } from "react-icons/go";
import Popup from '../../../../shared/modal/modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';


class mission extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            brandData: '',
            BrandElementDescription: '',
            url: 'http://ec2-34-198-96-172.compute-1.amazonaws.com//PatterService1/getCompanyBrandElement?'
        }
    }

    componentDidMount = async () => {
        try {
            await Axios.get(this.state.url+`companyID=${1}&BrandElementID=2`).then(res => {
                console.log(res)
                this.setState({ brandData: res.data ,BrandElementDescription:res.data.BrandElement.BrandElementDescription})
            })
        } catch (err) {
            toast.error(err.message)
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

    render() {
        const { show } = this.state;
        return (
            <div className=''>
                <h2 className='heading bold mb-3'>Mission/ Purpose</h2>
                <h4>Your Mission or Purpose is a short statement that explains why your organization exists and paints a picture of what it hopes to achieve.</h4>
                <form className='form pt-5'>
                    <div className='form-group'>
                        <textarea placeholder='Your Mission/ Purpose' className='form-control' rows='5' value={this.state.BrandElementDescription} ></textarea>
                        <span className='textarea_tooltip' onClick={this.handleShow}><GoLightBulb /></span>
                    </div>
                    <div className='mt-3 mb-5 text-right'>
                        <NavLink to='/build/foundation' className='float-left primary back_btn'> <FaAngleLeft /> Back</NavLink>
                        <NavLink to='/build/foundation/origin' className='btn_green m-0'>Next</NavLink>
                    </div>
                </form>
                <Popup show={show} hide={this.handleClose} />
            </div>
        );
    }
}

export default mission;