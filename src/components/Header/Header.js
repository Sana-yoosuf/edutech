import React, { useState } from 'react'
import logo from '../../assets/imgs/wm logo-01.jpg'
import './Header.css'
import { Link } from 'react-router-dom'


function Header() {
   

    const nav_title = [{
        path: '/', display: 'Home'
    },
    {
        path: '/services', display: 'Services'
    },
    {
        path: '/courses', display: 'Courses'
    },
    {
        path: '/aboutus', display: 'Aboutus'
    }
    ]

    return (
        <header className='header'>
            <div className="container">
                <div className="nav_container">
                    <div className="logo">
                        <div className="logo-img">
                            <img src={logo} alt />
                        </div>
                        <h1>Watermelon Ads & Digital Academy</h1>
                    </div>
                    <div className="navigation">
                        <ul className='menu'>
                            {nav_title.map((item) => (
                                <li className='nav_item'><Link to={item.path}>{item.display}</Link></li>
                            ))
                            }

                        </ul>
                    </div>
                </div>
            </div>


           

        </header>
    )
}

export default Header

