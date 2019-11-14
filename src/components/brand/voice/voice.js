import React, { Component } from 'react';
import { FaPlus } from "react-icons/fa";
import { GoLightBulb } from "react-icons/go";
import './voice.css'
import Popup from '../../../shared/modal/modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';

class voice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            keywordInput: '',
            buzzwordInput: '',
            Keywords: null,
            KeywordsValue: [],
            Buzzwords: null,
            BuzzwordsValue: [],
            url: 'http://ec2-34-198-96-172.compute-1.amazonaws.com//PatterService1/'
        }
    }

    componentDidMount = async () => {
        try {

            // getKeyWords Data
            await Axios.get(this.state.url + `getCompanyBrandElement?companyID=${JSON.parse(localStorage.user).Company.CompanyID}&BrandElementID=10`).then(res => {
                console.log(res.data)
                if (res.data.Value !== '') {
                    this.setState({ KeywordsValue: res.data.Value.split(',') })
                }
                this.setState({ Keywords: res.data })
            })

            // getbuzzwords Data
            await Axios.get(this.state.url + `getCompanyBrandElement?companyID=${JSON.parse(localStorage.user).Company.CompanyID}&BrandElementID=11`).then(res => {
                console.log(res.data)
                if (res.data.Value !== '') {
                    this.setState({ BuzzwordsValue: res.data.Value.split(',') })
                }
                this.setState({ Buzzwords: res.data })
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

    addKeyword = () => {
        this.setState({
            KeywordsValue: [...this.state.KeywordsValue, this.state.keywordInput],
            keywordInput: ''
        })
    }

    addBuzzwords = () => {
        this.setState({
            BuzzwordsValue: [...this.state.BuzzwordsValue, this.state.buzzwordInput],
            buzzwordInput: ''
        })
    }

    removekeyword = (val) => {
        this.setState({
            KeywordsValue: this.state.KeywordsValue.filter(k => k != val)
        })
    }

    removeBuzzword = (val) => {
        this.setState({
            BuzzwordsValue: this.state.BuzzwordsValue.filter(k => k != val)
        })
    }

    render() {
        const { show } = this.state;
        return (
            <div className='brand voice p-3'>
                <div className='container'>
                    <form className='form'>
                        <h2 className='heading bold mb-3'>Our Voice</h2>
                        <h4 className='mb-4'>These are the brand elements in which the entire organization is built upon.</h4>
                        <div className='form-group mb-3'>
                            <label className='label'>Keywords</label>
                            <input type="text" placeholder='Enter Keyword' className='form-control' value={this.state.keywordInput} onChange={(e) => this.setState({ keywordInput: e.target.value })} />
                            <FaPlus className='addPlus pointer' onClick={this.addKeyword} />
                            <span className='textarea_tooltip' onClick={this.handleShow} ><GoLightBulb /></span>
                        </div>
                        <div className='form-group'>
                            <div className='tag_container'>
                                {
                                    this.state.KeywordsValue.map((item, index) => <div key={index + item} className='note_msg'><span>{item}</span><span className='remove' onClick={() => this.removekeyword(item)} >✖</span></div>)
                                }
                            </div>
                        </div>
                        <div className='form-group mb-3'>
                            <label className='label'>Buzzwords</label>
                            <input type="text" placeholder='Enter Buzzword' className='form-control' value={this.state.buzzwordInput} onChange={(e) => this.setState({ buzzwordInput: e.target.value })} />
                            <FaPlus className='addPlus pointer' onClick={this.addBuzzwords} />
                            <span className='textarea_tooltip' onClick={this.handleShow} ><GoLightBulb /></span>
                        </div>
                        <div className='form-group'>
                            <div className='tag_container'>
                                {
                                    this.state.BuzzwordsValue.map((item, index) => <div key={index + item} className='note_msg'><span>{item}</span><span className='remove' onClick={() => this.removeBuzzword(item)} >✖</span></div>)
                                }
                            </div>
                        </div>
                        <div className='mt-3 mb-5'>
                            <button className='btn_green'>Save</button>
                            <button className='btn_white'>Cancel</button>
                        </div>
                    </form>
                </div>
                <Popup show={show} hide={this.handleClose} />
            </div>
        );
    }
}

export default voice;