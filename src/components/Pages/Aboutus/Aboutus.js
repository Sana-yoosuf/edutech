import React from 'react'
import './Aboutus.css'
import franch from '../../../assets/imgs/franchise.png'

function Aboutus() {
  return (
    <div className='container'>
        <div className="about-us-container">
            <div className='team-member'>
                <h2>Our Team</h2>
                <div className='member-card'>
                    <img className='member-image' src={franch} alt='franchise certificate' />
                    <h3 className='member-name'>Muhammed Afsar & Nourine Noushad</h3>
                    <p className='member-role'>Franchise Partner</p>
                </div>
            </div>
            <div className='about-us-description'>
                <h1 className='about-us-heading'>About Us</h1>
                <p>Watermelon Digital Academy is a Thrissur based digital marketing institute providing
                     state-of-the-art digital marketing training programs. Garnering over a decade of 
                     industry experience our team of trainers impart fundamental to advanced skills, 
                     trends and developments in the world of digital marketing. With clients from 
                     across the world, we provide globally competent on-job training. 
                     Our students continue to get placements with remarkable salaries in companies
                      within and outside the country.
                </p>
            </div>
        </div>


    </div>
  )
}

export default Aboutus