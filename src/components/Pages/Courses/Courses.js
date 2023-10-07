import React from 'react'
import './Courses.css'
import office1 from '../../../assets/imgs/office1.jpg'


function Courses() {
    const courseData = [
        // title: "AI DEVOLOPMENT",
        // desc: 'Master AI Devolopment',
        // img: ai,

        {
            title: "DIGITAL MARKETING",
            desc: 'Digital Marketing Job Training Program with Internship',
            img: office1,
            features: [
                'Work directly with national & international clients',
                ' Participate in job-oriented workshops',
                'Personal mentor',
                'Get practical exposure through direct client interactions',
                'Receive a Government-approved cretificate'
            ]
        },


    ];

    return (
        <div className="container course-container">
            <div className="course-top">
                <h2 className='section_title'>About Our Course</h2>
                <p >Digital Marketing Course with Cerificate</p>
                <div className="course-wrapper">
                    {
                        courseData.map((course, index) => (
                            <div className="course-item" key={index}>
                                <span className='course-icon'>
                                    <img src={course.img} alt />
                                </span>
                                <div className="course-content">
                                    <h4>{course.title}</h4>
                                    <p>{course.desc}</p>
                                    <span className='feature'>
                                        <ul>
                                            {course.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </span>

                                </div>

                            </div>
                        ))
                    }

                </div>


            </div>
        </div>

    )
}

export default Courses