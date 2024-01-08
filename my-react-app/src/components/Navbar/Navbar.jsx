import React from 'react'
import '../style.css'
import './style.css'
import logo1 from '../../assets/logos/logo1.png'

function Navbar() {
    return (
        <div className='nav'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-2 logo1'><img src={logo1} alt="" /></div>
                    <div className='col-lg-7 text-center menus'>
                        <ul>
                            <li>Legacy</li>
                            <li>SuperProducer</li>
                            <li>What's New</li>
                            <li>Customers</li>
                            <li>Marketplace</li>
                            <li>Creatives</li>
                        </ul>
                    </div>
                    <div className='col-lg-3 register_own'>
                        <ul>
                            <li className='signin_link'>Sing In</li>
                            <li><button className='signup_button'>Sign Up</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;