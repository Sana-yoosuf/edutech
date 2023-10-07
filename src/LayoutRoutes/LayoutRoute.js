
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../components/Pages/Home/Home'
import Plans from '../components/Pages/Plans/Plans'
import Courses from '../components/Pages/Courses/Courses'
import Aboutus from '../components/Pages/Aboutus/Aboutus'
import Contact from '../components/Pages/Contact/Contact'
import Program from '../components/Pages/Program/Program'

function LayoutRoute() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Plans />} />
                <Route path='/courses' element={<Courses />} />
                <Route path='/aboutus' element={<Aboutus />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/program' element={<Program/>}/>


            </Routes>
            <Footer />
        </Router>
    )
}

export default LayoutRoute