import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import './footer.css'

function Footer(){
  return(
    <div className="footer-outer-container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <FacebookIcon/>
          <InstagramIcon/>
          <YouTubeIcon/>
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relation</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="service_code">
            <p>
            ServiceCode
            </p>
        </div>
        <div className="copy_write">
            &copy; 1997-2024 Netflix,Inc
        </div>
      </div>
    </div>
  )
}


export default Footer