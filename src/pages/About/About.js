import React from 'react'
import './About.css'
import image from '../../assets/images/about 2.jpg'

const About = () => {
  return (
    <>
      <div id='About' className="about">
        <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                <img src={image} alt='profile_pic' />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                <h1>About Me</h1>
                <p>
                    I'm <strong>Himanshu Srivastava</strong>, a tech enthusiast and IT student at Dr. A.P.J Abdul Kalam Technical University. My academic journey has fueled my passion for Full Stack Web Development, and I've delved into the realms of data structures and algorithms. 💻
                    <br />
                    Armed with hands-on experience in web development, I'm poised to embark on an entry-level position in Software Development. Eager to contribute to a dynamic organization, I bring a blend of enthusiasm, dedication, and a hunger for continuous growth. 🌐
                    <br />
                    Let's explore the possibilities of collaboration and innovation together.
                </p>
            </div>
        </div>
      </div>

      
    </>
  )
}

export default About
