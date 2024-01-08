import React from 'react'
import './style.css'

function Section2() {
    return (
        <div className='section2'>
            <div className='main_2'>
                <div className='s_text'>
                    <h1>Join the private <br /> exclusive access</h1>
                </div>
                <div className='mail_box'>
                    <input type="text" placeholder='example@gmail.com' className='mail_input' />
                    <button className='mail_btn'>
                        <span style={{ color: 'white' }}>Subscribe</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Section2