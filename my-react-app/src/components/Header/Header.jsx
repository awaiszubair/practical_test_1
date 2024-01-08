import React from 'react'
import L_one from '../../assets/images/L-one.png'
import L_two from '../../assets/images/L-two.png'
import L_three from '../../assets/images/L-three.png'
import L_four from '../../assets/images/L-four.png'
import T_one from '../../assets/images/T-one.png'
import T_two from '../../assets/images/T-two.png'

import R_one from '../../assets/images/R-one.png'
import R_two from '../../assets/images/R-two.png'
import R_three from '../../assets/images/R-three.png'
import R_four from '../../assets/images/R-four.png'

import B_one from '../../assets/images/B-one.png'
import B_two from '../../assets/images/B-two.png'
import B_three from '../../assets/images/B-three.png'
import B_four from '../../assets/images/B-four.png'
import B_five from '../../assets/images/B-five.png'


import './style.css'


function Header() {
    return (
        <div className='container-fluid' style={{ marginTop: '-5rem' }}>
            <div className='row '>
                <div className='col-lg-2 animate__fadeInUp left_side_img' >
                    <div className='l-one l-img'>
                        <img src={L_one} alt="" />
                    </div>
                    <div className='l-two animate__fadeInUp l-img'>
                        <img src={L_two} alt="" />
                    </div>
                    <div className='l-three animate__fadeInUp l-img'>
                        <img src={L_three} alt="" />
                    </div><div className='l-four'>
                        <img src={L_four} alt="" />
                    </div>
                </div>
                <div className='col-lg-8 ' >

                    <div className='row' >
                        <div className='col-lg-12 T-img'>
                            <div className='row text-center'>
                                <div className='col-lg-4'>
                                    <img src={T_one} alt="" style={{ width: '100%' }} />
                                </div>
                                <div className='col-lg-4'></div>
                                <div className='col-lg-4'>
                                    <img src={T_two} alt="" style={{ width: '100%' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row' >
                        <div className='col-lg-12'>
                            <div className='my_text animate__fadeInLeft text-center'>
                                <h1>The Ultra Modern Creative Connections</h1>
                                <p>Forreels.io is the central hub for <span style={{ color: 'red' }}>hiring creatives worldwide</span> in the <span className='e-text'>film and photography industry </span> , find <span className='e-text'> creative opportunities </span> as a creative, <span className='e-text'> build </span>, organize and deliver your work so you that you <span className='e-text'> create mind-blowing products </span> on time, every time.</p>
                            </div>
                            <div className='my_button'>
                                <p> Sign Up</p>
                            </div>
                        </div>
                    </div>

                    <div className='row' style={{ marginTop: '3rem' }}>
                        <div className='col-lg-4'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <img src={B_one} alt="" style={{ width: '100%' }} />
                                </div>
                            </div>
                            <div className='row' style={{ marginTop: '3.5rem' }}>
                                <div className='col-lg-12'>
                                    <img src={B_two} alt="" style={{ width: '100%' }} />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4' style={{ marginTop: '8rem' }}>
                            <img src={B_three} alt="" style={{ width: '100%' }} />
                        </div>
                        <div className='col-lg-4'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <img src={B_four} alt="" style={{ width: '100%' }} />
                                </div>
                            </div>
                            <div className='row' style={{ marginTop: '3.5rem' }}>
                                <div className='col-lg-12'>
                                    <img src={B_five} alt="" style={{ width: '100%' }} />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='col-lg-2 text-end left_side_img' >
                    <div className='l-one animate__fadeInDown l-img'>
                        <img src={R_one} alt="" />
                    </div>
                    <div className='l-two animate__fadeInDown l-img'>
                        <img src={R_two} alt="" />
                    </div>
                    <div className='l-three animate__fadeInDown l-img'>
                        <img src={R_three} alt="" />
                    </div><div className='l-four animate__fadeInDown'>
                        <img src={R_four} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header