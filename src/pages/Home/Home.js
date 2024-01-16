import React from 'react'
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/Himanshu_CV.pdf'
import "./Home.css"
const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h1>Hi I'm a</h1>
          <h2>
          <Typewriter
            options={{
              strings: ['React Developer !', 
                        'Full Stack Developer !',
                        'DSA bhi thode thode aati hai !'],
              autoStart: true,
              loop: true,
            }}
          />
          </h2>
          <div className="home-buttons">
            <button className='btn btn-hire'>Hire Me</button>
            <a className='btn btn-cv' href={Resume} download="HimanshuCV.pdf">My Resume</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
