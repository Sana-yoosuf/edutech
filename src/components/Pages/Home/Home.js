import React from 'react'
import './Home.css'
// import meta from '../../../assets/img/meta.jpeg'
import inaugration from '../../../assets/imgs/inaug.png'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import Courses from '../Courses/Courses'
import Community from '../Community/Community'
import Plans from '../Plans/Plans'

function Home() {

  const handleClick=()=>{
    window.open('https://www.youtube.com/shorts/Bl8Hxr9EVLE','_blank')
  }
  const handleClick1=()=>{
    window.open('https://www.youtube.com/shorts/oplBSGyk8-I','_blank')
  }



  return (
    <>
    
    <section>
      <div className="container">
        <div className="home_container">
          <div className="home_content">
            <h2 className='section_title'>Unleash the Power of your Creativity!!!!</h2>
            <p>Gain Valuable Experience with our<br></br> Digital Marketing Job Training Program with Internship</p>
            
            <div className="home_btn">
              <button className='register_btn' onClick={handleClick}>Get Started</button>
              <button className='register_btn' onClick={handleClick1}>Watch Now</button>
            </div>

          </div>
          <div className="home_image">
            <div className="home-img-wrapper">
              <div className="box-01">

                <div className="box-img">
                  <img src={inaugration} alt='' />
                </div>
              </div>

             
            </div>

          </div>

        </div>
      </div>

    </section>
    <Courses/>
    <Community/>
    <Plans/>
    </>
  )
}

export default Home