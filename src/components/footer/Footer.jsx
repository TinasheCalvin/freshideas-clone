import { Instagram, Twitter } from '@mui/icons-material'
import {FaFacebookF} from 'react-icons/fa'
import React from 'react'
import './footer.scss'

function Footer() {
  return (
    <div className="footer">
        <div className="left">
            <img src="https://res.cloudinary.com/fresh-ideas/image/upload/v1599656065/Fresh-Ideas-alpha_pkqe0l.png" alt="logo" />
            <p className="copyright">&copy; 2022 freshideas</p>
        </div>
        <div className="right">
            <a href="https://www.facebook.com/freshideaszim/"><FaFacebookF className='icon react-icons'/></a>
            <a href="https://twitter.com/freshideaszw"><Twitter className='icon' /></a>
            <a href="https://instagram.com/freshideaszim"><Instagram className='icon' /></a>
        </div>
    </div>
  )
}

export default Footer