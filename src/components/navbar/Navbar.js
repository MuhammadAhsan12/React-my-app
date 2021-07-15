import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { MenuItems } from './MenuItems'
import Login from '../navbar/Login'


export default class Navbar extends Component {

    state = {
        clicked: false,
    }

    handleClicked = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    render() {
        return (
            <div>
                <nav className='navbar'>

                    <div className='navbar-container'>
                        <Link to='/' className='navbar-logo'>
                            P<FontAwesomeIcon icon={faShoppingCart} />S
                        </Link>
                    </div>

                    <div className='ManuIcon' onClick={this.handleClicked}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>

                    <div>
                        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                            {MenuItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link className={item.cName} to={item.to}>
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <Login/>
                </nav>
            </div>
        )
    }
}
