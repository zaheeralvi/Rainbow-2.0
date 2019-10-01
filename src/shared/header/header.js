import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import './header.css'
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            main: 0,
        }

    }

    currentKey(key) {
        this.setState({ main: key })
    }


    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg">
                    <div className='logo'>
                        <NavLink to={'/home'}>
                            <img src='/images/logo.png' alt='logo' />
                        </NavLink>
                    </div>
                    <div className='right_nav'>
                        <ul>
                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Account
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Setting</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">User</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className='m-0'>
                                <Dropdown className='userItem'>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Aroun <img src='/images/user.png' alt='user' />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Sign Out</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                    <div className='mobile_menu'>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic"></Dropdown.Toggle>
                            <Dropdown.Menu onChange={() => this.currentKey(0)}>
                                <p className='lvl1 custom_lvl' onClick={() => this.currentKey(1)}>Aaron</p>
                                {this.state.main === 1 ? <div>
                                    <NavLink to='' className='lvl3 custom_lvl'>Profile</NavLink>
                                    <NavLink to='' className='lvl3 custom_lvl'>SIGN OUT</NavLink>
                                </div>
                                    : null
                                }
                                <p className='lvl1 custom_lvl' onClick={() => this.currentKey(2)}>Account</p>
                                {this.state.main === 2 ? <div>
                                    <NavLink to='' className='lvl3 custom_lvl'>Setting</NavLink>
                                    <NavLink to='' className='lvl3 custom_lvl'>User</NavLink>
                                </div>
                                    : null
                                }
                                <NavLink to='/home' className='lvl2 custom_lvl'>Home</NavLink>
                                <NavLink to='/build' className='lvl2 custom_lvl'>Build</NavLink>
                                <p className='lvl2 custom_lvl' onClick={() => this.currentKey(5)}>Our Brand</p>
                                {this.state.main === 5 ? <div>
                                    <NavLink to='/brand/first' className='lvl3 custom_lvl'>Company Info</NavLink>
                                    <NavLink to='/brand/second' className='lvl3 custom_lvl'>Our Foundations</NavLink>
                                    {/* <NavLink to='' className='lvl3 custom_lvl'>Our Personality</NavLink>
                                    <NavLink to='' className='lvl3 custom_lvl'>Our Voice</NavLink>
                                    <NavLink to='' className='lvl3 custom_lvl'>Our Look</NavLink> */}
                                </div>
                                    : null
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;
