import React from 'react'
import "./Menu.css"
import { FcAbout, FcComboChart, FcCustomerSupport, FcFlowChart, FcHome, FcReading } from "react-icons/fc";
import { SiCodeproject } from "react-icons/si";
import { GrAchievement } from "react-icons/gr";

const Menu = ({toggle}) => {
  return (

    <>

    {toggle ?(     
        <>
        <div className='navbar-profile-pic'>
            <img src='https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw' alt='profile'/>
        </div>

        <div className='nav-items'>
          <div className='nav-item'>
            <div className='nav-links'>
              <FcHome/>
              Home
            </div>
            <div className='nav-links'>
              <FcAbout />
              About
            </div>
            <div className='nav-links'>
              <FcComboChart />
              Work Experience
            </div>
            <div className='nav-links'>
              <FcFlowChart />
              Tech Stack
            </div>
            <div className='nav-links'>
              <FcReading />
              Education
            </div>
            <div className='nav-links'>
            <SiCodeproject />
              Projects
            </div>
            <div className='nav-links'>
              <GrAchievement/>
              Achievement
            </div>
            <div className='nav-links'>
            <FcCustomerSupport />
              Contact 
            </div>
          </div>
        </div>

        </>
    ):(
        <>
          <div className='nav-item nav-item-collapse'>
            <div className='nav-links'>
              <FcHome title='Home'/>
              
            </div>
            <div className='nav-links'>
              <FcAbout title='About'/>
              
            </div>
            <div className='nav-links'>
              <FcComboChart title='Work Experience' />
              
            </div>
            <div className='nav-links'>
              <FcFlowChart title='Tech Stack' />
              
            </div>
            <div className='nav-links'>
              <FcReading title='Education' />
              
            </div>
            <div className='nav-links'>
            <SiCodeproject title='Project'/>
              
            </div>
            <div className='nav-links'>
              <GrAchievement title='Achievement'/>
              
            </div>
            <div className='nav-links'>
            <FcCustomerSupport title='Contact'/>
              
            </div>
          </div>
        </>
    )    
    }
        
        
    </>

  )
}

export default Menu
