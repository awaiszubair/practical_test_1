import React from 'react'
import '../style.css'
import './style.css'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Section2 from '../Section2/Section2'
import Footer from '../Footer/Footer'


function Main() {
    return (
        <div className='main'>
            <Navbar />
            <Header />
            <Section2 />

            <Footer />
        </div>
    )
}

export default Main