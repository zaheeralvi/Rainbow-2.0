import React, { Component } from 'react';
import './home.css'
import Modal from 'react-bootstrap/Modal'
import Popup from '../../shared/modal/modal';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state={
            show: false, 
            setShow: false
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
        const {show} = this.state;
        return (
            <div className="home_page">
                <h1>Welcome to <span className='line_through'>Rainbow Finder</span> Patter</h1>
                <button className='btn_green' onClick={this.handleShow}>Launch demo modal</button>
                <Popup show={show} hide={this.handleClose}/>
            </div>
        )
    }
}

export default Home;
