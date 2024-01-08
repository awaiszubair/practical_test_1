import React from 'react'
import logo1 from '../../assets/logos/logo1.png'
import fb from '../../assets/logos/Facebook 1.png'
import tw from '../../assets/logos/Twitter 1.png'
import ins from '../../assets/logos/icons8-instagram.png'
import yt from '../../assets/logos/youtube (1) 1.png'
import './style.css'


function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row' style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
                    <div className='col-lg-9'>
                        <ul>
                            <li><img src={logo1} alt="" style={{ height: '20px' }} /></li>
                            <li>© 2023 Forreels. All rights reserved</li>
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>Cookie preferences</li>
                            <li>Do not sell or share my personal information</li>
                        </ul>
                    </div>
                    <div className='col-lg-3'>
                        <ul>
                            <li><img src={ins} alt="" /></li>
                            <li><img src={yt} alt="" /></li>
                            <li><img src={fb} alt="" /></li>
                            <li><img src={tw} alt="" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer