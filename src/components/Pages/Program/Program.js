import React from 'react'
import './Program.css'

import speech from '../../../assets/imgs/speech1.png'

function Aboutus() {
  return (
    <div className='container'>
      <div className="about-us-container">
        <div className='team-member'>
          <h2>Our Strength</h2>
          <div className='member-card'>
            <img className='member-image' src={speech} alt='franchise certificate' />
          </div>
        </div>
        <div className='about-us-description'>
          <h1 className='about-us-heading'>Our Program</h1>
          <p>We’re a part of the dynamic digital world that influences our life daily. Our focus is on bringing value and a positive culture to the digital sphere! With all the socializing tools available on the web, we’re deep into cultivating a good business and social culture in this world. The change is now on your fingertips!
            To be the best advertising company to provide customized and innovative concepts and campaigns which hit the target around the globe. 
            
          </p>
          <h1 className='about-us-heading'>Who are we?</h1>
          <p>We were honoured to receive the prestigious 'Pride of Kerala Awards 2023', which recognised excellence, hard work, and innovation.</p>
          <p>We are ateam of young professionals with great passion for branding, advertising & digital marketing at your service! The watermelon way is a promise of nourishment for your brand!</p>
        </div>
      </div>


    </div>
  )
}

export default Aboutus



