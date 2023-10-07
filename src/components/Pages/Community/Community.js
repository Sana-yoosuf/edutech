import React from 'react'
import './Community.css'
import office from '../../../assets/imgs/office.jpg'

function Community() {
    const handleClick=()=>{
        window.open('https://chat.whatsapp.com/H1qQZ2iv%y0x5XE4dog0b')
    }
  return (
    <div className='container'>
        <div className='start-wrapper'>
            <div className='start-img'>
                <img src={office} alt=''/>
            </div>
            <div className='start-content'>
                <h2 className='section-title'>Join Our Free Tech Community</h2>
                <p>Unlock the power of knowledge and innovation by joining our vibrant and free whatsapp tech community</p>
                <button className='register_btn' onClick={handleClick}>Join Now</button>

            </div>
        </div>
    </div>
  )
}

export default Community