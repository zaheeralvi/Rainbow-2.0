import React, { Component } from 'react';
import { Select } from 'dropdown-select';
import { GoLightBulb } from "react-icons/go";
import Popup from '../../../shared/modal/modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';

class foundation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      options: [],
      val1: '',
      val2: '',
      val3: '',
      val4: '',
      val5: '',

      organizationalData:null,
      CompanyOrganizationalValueIDs:[],

      elevatorData: null,
      elevatorDescDepartmentID: 0,
      elevatorDesc: '',

      missionData: null,
      missionDescDepartmentID: 0,
      missionDesc: '',

      originData: null,
      originDescDepartmentID: 0,
      originDesc: '',

      url: 'http://ec2-34-198-96-172.compute-1.amazonaws.com//PatterService1/'
    }
  }

  componentDidMount = async () => {
    try {
      // Elevator
      await Axios.get(this.state.url + `getCompanyBrandElement?companyID=${JSON.parse(localStorage.user).Company.CompanyID}&BrandElementID=1`).then(res => {
        console.log(res)
        this.setState({ elevatorData: res.data, elevatorDesc: res.data.Value })
        if (res.data.Department != undefined) {
          this.setState({ elevatorDescDepartmentID: res.data.Department.DepartmentID })
        }
      })

      // Origin
      await Axios.get(this.state.url + `getCompanyBrandElement?companyID=${JSON.parse(localStorage.user).Company.CompanyID}&BrandElementID=2`).then(res => {
        console.log(res)
        this.setState({ originData: res.data, originDesc: res.data.Value })
        if (res.data.Department != undefined) {
          this.setState({ originDescDepartmentID: res.data.Department.DepartmentID })
        }
      })

      // Mission
      await Axios.get(this.state.url + `getCompanyBrandElement?companyID=${JSON.parse(localStorage.user).Company.CompanyID}&BrandElementID=4`).then(res => {
        console.log(res)
        this.setState({ missionData: res.data, missionDesc: res.data.Value })
        if (res.data.Department != undefined) {
          this.setState({ missionDescDepartmentID: res.data.Department.DepartmentID })
        }
      })

      // getValues
      await Axios.get(this.state.url + `getValues`).then(res => {
        console.log(res)
        this.setState({
          options: res.data,
        })
      })

      // Organizational
      await Axios.get(this.state.url + `getCompanyBrandElement?companyID=${JSON.parse(localStorage.user).Company.CompanyID}&BrandElementID=3`).then(res => {
        console.log(res)
        res.data.CompanyBrandElementValues.forEach((v, i) => {
            let vars = `val${i + 1}`
            this.setState({ [vars]: v.Value,CompanyOrganizationalValueIDs:[...this.state.CompanyOrganizationalValueIDs,v.CompanyBrandElementValuesID] })
        })
        this.setState({
            organizationalData: res.data,
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

  changeHandler = (stVar, val) => {
    this.setState({
      [stVar]: val
    })
  }

  render() {
    const { show } = this.state;
    return (
      <div className='p-3'>
        <div className='container'>
          <h2 className='heading bold mb-3'>Our Foundation</h2>
          <h4 className='mb-5'>These are the brand elements in which the entire organization is built upon.</h4>
          <form className='form'>
            <div className='form-group'>
              <label className='label'>Mission/ Purpose</label>
              <textarea className='form-control textarea' value={this.state.missionDesc} onChange={($event) => this.setState({ missionDesc: $event.target.value })} ></textarea>
              <span className='textarea_tooltip mt-4 pt-2' onClick={this.handleShow} ><GoLightBulb /></span>
            </div>
            <div className='form-group'>
              <label className='label'>Origin Story</label>
              <textarea className='form-control textarea' value={this.state.originDesc} onChange={($event) => this.setState({ originDesc: $event.target.value })} ></textarea>
              <span className='textarea_tooltip mt-4 pt-2' onClick={this.handleShow} ><GoLightBulb /></span>
            </div>
            <div className='form-group'>
              <label className='label'>Elevator Pitch</label>
              <textarea className='form-control textarea' value={this.state.elevatorDesc} onChange={($event) => this.setState({ elevatorDesc: $event.target.value })} ></textarea>
              <span className='textarea_tooltip mt-4 pt-2' onClick={this.handleShow} ><GoLightBulb /></span>
            </div>
            <div className='form-group'>
              <label className='label'>Organizational Values</label>
              <Select placeholder='Humility' labelKey="ValuesName" valueKey="ValuesID" options={this.state.options} value={this.state.val1} onChange={(val) => this.changeHandler('val1', val)} />
              <span className='textarea_tooltip mt-4 pt-2' onClick={this.handleShow} ><GoLightBulb /></span>
            </div>
            <div className='form-group'>
              <Select placeholder='Empathy' labelKey="ValuesName" valueKey="ValuesID" options={this.state.options} value={this.state.val2} onChange={(val) => this.changeHandler('val2', val)} />
            </div>
            <div className='form-group'>
              <Select placeholder='Collaboration' labelKey="ValuesName" valueKey="ValuesID" options={this.state.options} value={this.state.val3} onChange={(val) => this.changeHandler('val3', val)} />
            </div>
            <div className='form-group'>
              <Select placeholder='Persistence' labelKey="ValuesName" valueKey="ValuesID" options={this.state.options} value={this.state.val4} onChange={(val) => this.changeHandler('val4', val)} />
            </div>
            <div className='form-group'>
              <Select placeholder='Speed' labelKey="ValuesName" valueKey="ValuesID" options={this.state.options} value={this.state.val5} onChange={(val) => this.changeHandler('val5', val)} />
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

export default foundation;
