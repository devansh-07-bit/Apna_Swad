import React from 'react'
import './Footer.css'
import logo33 from '../assets/logo33.png';

function Footer() {
  return (
    <>
    <div>

    <footer class="footer">
        <div class="footer-content">
            
            <div class="footer-section">
                <div class="logo">
                     <img src={logo33} alt="Website logo"  className='logo'/>
                </div>
                <div class="country-select">
                    <select>
                        <option>India</option>
                     
                    </select>
                    <select>
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                </div>
            </div>

            
            <div class="footer-section">
                <h4>ABOUT</h4>
                <ul>
                    <li><a href="#">Who We Are</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Work With Us</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>

            
            <div class="footer-section">
                <h4>FOR FOODIES</h4>
                <ul>
                    <li><a href="#">Code of Conduct</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Blogger Help</a></li>
                    <li><a href="#">Mobile Apps</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <div class="app-buttons">
                    <a href="#" class="app-button">
                        <img src="/api/placeholder/140/40" alt="App Store"/>
                    </a>
                    <a href="#" class="app-button">
                        <img src="/api/placeholder/140/40" alt="Play Store"/>
                    </a>
                </div>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>

        
        <div class="footer-bottom">
            <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies.</p>
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
    </footer>
    </div>
    </>
  )
}

export default Footer