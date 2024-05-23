import React from 'react'
import { Link } from 'react-router-dom'
import {FaPhone,FaLocationArrow} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const Footer = () => {
  return (
    <div>
        <footer className='container foot'>
             <div className='content'>
                <div>
                    <img src="/logo.png" alt="logo"  className='logo-img '/>
                </div>
                <div className='links m-4'>
                    <h4>
                        Quick Links
                    </h4>
                    <ul>
                        <Link to={'/'}>Home
                        </Link>
                        <Link to={'/appointment'}>Appointment</Link>
                        <Link to={'/about'}>About</Link>
                    </ul>
                </div>
                <div>
                    <h4>Hours</h4>
                    <p>Open from monday to saturday from 9:00 AM to 10:00 PM </p>
                </div>
            </div>
            <div>
                <h4>Contact</h4>
                <div>
                    <FaPhone/>
                    <span>9999999999</span>
                </div>
                <div>
                    <MdEmail/>
                    <span>Pcare@gmail.com</span>
                </div>

                <div>
                    <FaLocationArrow/>
                    <span>Hyderabad,India</span>
                </div>

            </div>
        </footer>
    </div>
  )
}

export default Footer