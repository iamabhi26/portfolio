import React from 'react'
import Header from '../Header'
import './index.css'

const Home = () => {
  return (
    <div>
        <Header />
        <div className='home-container'>
            <div className='intro-container'>
              <h1 className='role-heading'>Full Stack Developer</h1>
              <div>
                <h1 className='content-intro'>Hello, my name is Abhishek</h1>
                <p className='content-subtext'>An aspiring Full Stack Web Developer trained in both frontend and backend technologies and built a few projects using them. </p>
                <div className='buttons-container'>
                    <button type="button" className='project-button'>Projects</button>
                    <button type="button" className='linkedin-button'>LinkedIn</button>
                </div>
              </div>
            </div>
            <div className='image-container'>
              <img src="https://res.cloudinary.com/dwswlczpp/image/upload/v1704528213/pexels-artem-beliaikin-1832323-removebg-preview_sakvjq.png" alt="girl" className='girl-image' />
            </div>
        </div>
    </div>
  )
}

export default Home