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


// For Mobile
import L_m_one from '../../assets/images/L-m-one.png'
import L_m_two from '../../assets/images/L-m-2.png'
import M_m_one from '../../assets/images/M-m-one.png'
import R_m_one from '../../assets/images/R-m-one.png'
import R_m_two from '../../assets/images/R-m-two.png'

import B_m_one from '../../assets/images/B-m--one.png'
import B_m_two from '../../assets/images/B-m-two.png'
import B_m_three from '../../assets/images/B-m-three.png'
import B_m_four from '../../assets/images/B-m-four.png'
import B_m_five from '../../assets/images/B-m-five.png'
import B_m_six from '../../assets/images/B-m-new.png'

import './style.css'


function Header() {
    return (
        <>
            <div className='container-fluid deks_header' style={{ marginTop: '-5rem' }}>
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
                    <div className='col-lg-8 mid_side' >

                        <div className='row' >
                            <div className='col-lg-12 T-img'>
                                <div className='row text-center'>

                                    <div className='col-lg-4 col-md-6 col-sm-6 t_1'>
                                        <img src={T_one} alt="" style={{ width: '100%' }} />
                                    </div>

                                    <div className='col-lg-4 col-md col-sm empty'></div>
                                    <div className='col-lg-4 col-md-6 col-sm-6 t_2'>
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
                            <div className='col-lg-4 col-sm-6 b_1'>
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
                            <div className='col-lg-4 col-sm-6 b_2' style={{ marginTop: '8rem' }}>
                                <img src={B_three} alt="" style={{ width: '100%' }} />
                            </div>
                            <div className='col-lg-4 b_3' >
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


            {/* For Mobile */}
            <div className='container-fluid landing_mobile'>
                <div className='img_con' style={{ width: '100%', display: 'flex' }}>
                    <div className='L_m' style={{ width: '20%' }}>
                        <div className='m_img'>
                            <img src={L_m_one} alt="" />
                        </div>
                        <div className='m_img'>
                            <img src={L_m_two} alt="" />
                        </div>
                    </div>
                    <div className='M_m' style={{ width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className='m_img'>
                            <img src={M_m_one} alt="" />
                        </div>
                    </div>
                    <div className='R_m' style={{ width: '20%' }}>
                        <div className='m_img'>
                            <img src={R_m_one} alt="" />
                        </div>
                        <div className='m_img'>
                            <img src={R_m_two} alt="" />
                        </div>
                    </div>
                </div>
                <div className='m_text' style={{ width: '90%', textAlign: 'center', marginLeft: '2rem' }}>
                    <h1>The ultra modern creative connection.</h1>
                    <p>Forreels.io is the central hub for hiring creatives worldwide in the film and photography industry, find creative opportunities as a creative, build, organize and deliver your work so you that you create mind-blowing products on time, every time.</p>
                </div>
                <div className='img_con' style={{ width: '100%', display: 'flex' }}>
                    <div className='L_m' style={{ width: '20%', }}>
                        <div className='m_img'>
                            <img src={B_m_one} alt="" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div className='m_img'>
                            <img src={B_m_six} alt="" style={{ width: '100%', height: '100%' }} />
                        </div>
                    </div>
                    <div className='M_m' style={{ width: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '4rem', marginBottom: '4rem' }}>
                        <div className='m_img'>
                            <img src={B_m_two} alt="" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div>
                            <img src={B_m_three} alt="" style={{ width: '100%', height: '100%' }} />
                        </div>
                    </div>
                    <div className='R_m' style={{ width: '20%' }}>
                        <div className='m_img'>
                            <img src={B_m_four} alt="" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div className='m_img'>
                            <img src={B_m_five} alt="" style={{ width: '100%', height: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header