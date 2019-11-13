import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa";
import { GoLightBulb } from "react-icons/go";
import './palette.css'
import Popup from '../../../../shared/modal/modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';


class palette extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            palette: null,
            color0: '',
            color1: '',
            color2: '',
            color3: '',
            color4: '',
            percentage0: '',
            percentage1: '',
            percentage2: '',
            percentage3: '',
            percentage4: '',
            CompanyBrandElementColorPaletteID: [],
            url: 'http://ec2-34-198-96-172.compute-1.amazonaws.com//PatterService1/'
        }
    }

    componentDidMount = async () => {
        try {
            await Axios.get(this.state.url + `getCompanyBrandElement?companyID=${JSON.parse(localStorage.user).Company.CompanyID}&BrandElementID=5`).then(res => {
                this.setState({ palette: res.data })

                res.data.CompanyBrandElementColorPalette.forEach((v, i) => {
                    let color = `color${i}`
                    let percentage = `percentage${i}`
                    this.setState({
                        [color]: v.ColorValue,
                        [percentage]: v.Percentage,
                        CompanyBrandElementColorPaletteID: [...this.state.CompanyBrandElementColorPaletteID, v.CompanyBrandElementColorPaletteID]
                    })
                })
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

    handleSubmit = async (e) => {
        e.preventDefault();
        // /build/complete
        let data = [
            {
                "CompanyColorPaletteID": this.state.CompanyBrandElementColorPaletteID[0],
                "ColorValue": this.state.color0,
                "Percentage": this.state.percentage0
            },
            {
                "CompanyColorPaletteID": this.state.CompanyBrandElementColorPaletteID[1],
                "ColorValue": this.state.color1,
                "Percentage": this.state.percentage1
            },
            {
                "CompanyColorPaletteID": this.state.CompanyBrandElementColorPaletteID[2],
                "ColorValue": this.state.color2,
                "Percentage": this.state.percentage2
            },
            {
                "CompanyColorPaletteID": this.state.CompanyBrandElementColorPaletteID[3],
                "ColorValue": this.state.color3,
                "Percentage": this.state.percentage3
            },
            {
                "CompanyColorPaletteID": this.state.CompanyBrandElementColorPaletteID[4],
                "ColorValue": this.state.color4,
                "Percentage": this.state.percentage4
            }
        ]

        console.log(data)

        try {
            await Axios.post(this.state.url + `updateColorPalettes`, data).then(res => {
                console.log(res.data)
            })

        } catch (error) {
            toast.error(error.message)
        }
    }

    render() {
        const { show } = this.state;
        return (
            <div className='palette'>
                <ToastContainer />
                <h2 className='heading bold mb-3'>Color Palette</h2>
                <h4 className='mb-3'>Your use of color is critical to maintaining consistency across your brand and visual channels. These colors should represent the brand elements already described and should be used correctly in all applications.</h4>
                <h4 className='mb-5'>All entries should be in HEX value.</h4>
                <form className='form' onSubmit={($event) => this.handleSubmit($event)} noValidate>
                    <div className='form-group'>
                        <input type="text" className='form-control color' value={this.state.color0} placeholder='Color #1' onChange={(e) => this.setState({ color0: e.target.value })} />
                        <input type="number" className='form-control percentage' value={this.state.percentage0} placeholder='%' onChange={(e) => this.setState({ percentage0: e.target.value })} />
                        <span className='textarea_tooltip' onClick={this.handleShow} ><GoLightBulb /></span>
                    </div>
                    <div className='form-group'>
                        <input type="text" className='form-control color' value={this.state.color1} placeholder='Color #2' onChange={(e) => this.setState({ color1: e.target.value })} />
                        <input type="number" className='form-control percentage' value={this.state.percentage1} placeholder='%' onChange={(e) => this.setState({ percentage1: e.target.value })} />
                    </div>
                    <div className='form-group'>
                        <input type="text" className='form-control color' value={this.state.color2} placeholder='Color #3' onChange={(e) => this.setState({ color2: e.target.value })} />
                        <input type="number" className='form-control percentage' value={this.state.percentage2} placeholder='%' onChange={(e) => this.setState({ percentage2: e.target.value })} />
                    </div>
                    <div className='form-group'>
                        <input type="text" className='form-control color' value={this.state.color3} placeholder='Color #4' onChange={(e) => this.setState({ color3: e.target.value })} />
                        <input type="number" className='form-control percentage' value={this.state.percentage3} placeholder='%' onChange={(e) => this.setState({ percentage3: e.target.value })} />
                    </div>
                    <div className='form-group'>
                        <input type="text" className='form-control color' value={this.state.color4} placeholder='Color #5' onChange={(e) => this.setState({ color4: e.target.value })} />
                        <input type="number" className='form-control percentage' value={this.state.percentage4} placeholder='%' onChange={(e) => this.setState({ percentage4: e.target.value })} />
                    </div>
                    <div className='form-group flex mb-5'>
                        <div className='color_palette'>
                            <span className='color_1'></span>
                            <span className='color_2'></span>
                            <span className='color_3'></span>
                            <span className='color_4'></span>
                            <span className='color_5'></span>
                        </div>
                    </div>
                    <div className='mt-3 mb-5 text-right'>
                        <NavLink to='/build/look/palette' className='float-left primary back_btn'> <FaAngleLeft /> Back</NavLink>
                        <button type='submit' className='btn_green m-0'>NEXT</button>
                    </div>
                </form>
                <Popup show={show} hide={this.handleClose} />
            </div>
        );
    }
}

export default palette;