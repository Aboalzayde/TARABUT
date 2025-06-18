import React from 'react';
import "./Footer.css";
// import logo from '../../public/TarabutLogo.png';
// import linkedinIcon from '../../public/linkedin.png';
// import instagramIcon from '../../public/instagram.png';

function Footer() {
  return (
    <div className='FooterBackground'>
      <div className='FooterContainer'>

        {/* Top Section */}
        <div className='FooterTop'>
          <div className='LogoContainer'>
            {/* <span className='LogoName'>TARABUT</span> */}
            <img src='../../public/Logo.png' alt="Tarabut Logo" className='Logo' />
          </div>
          <div className='ExternalLinks'>
            <div className='LinkedIn'>
                <img src="../../public/LinkedIn.png" alt="" />
            </div>
            <div className='Instagram'>
                <img src="../../public/Instagram.png" alt="" />
            </div>

          </div>
        </div>

        {/* Center Section */}
        <div className='FooterCenter'>
          <div className='Column'>
            <h3>Solutions</h3>
            <span>BaaS</span>
            <span>Data</span>
            <span>Embedded Finance</span>
            <span>POS Financing</span>
            <span>Auto Financing</span>
            <span>Payments</span>
          </div>

          <div className='Column'>
            <h3>Developers</h3>
            <span>Portal Login</span>
            <span>Documentation</span>

            <h3>Who We Serve</h3>
            <span>Who We Serve</span>
          </div>

          <div className='Column'>
            <h3 >Our Imapct</h3>
            <span className='Highlight'>COMPANY</span>
            <span>About Us</span>
            <span>Join the Team</span>
            <span className='Highlight'>RESOURCES</span>
            <span>News & Blogs</span>
            <span>Responsible Innovation</span>
            <span>Security Centre</span>
            <span>Privacy Policy</span>
            <span>Cookie Notice</span>
            <span>Complaints Guide</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='FooterBottom'>
          <div className='FooterInfo'>
            <span className='Info'>
              Tarabut Gateway W.L.L. is regulated by the Central Bank of Bahrain as Account Information Service Provider and Payment Initiation Service Provider (AISP / PISP).
            </span>
            <span className='Info'>
              Tarabut Gateway for Information Technology (LLC) is permitted by the Saudi Central Bank to test its innovative services under the Regulatory Sandbox environment. For more information, please click
            </span>
          </div>
          <hr />
          <div className='CopyRight'>Copyright 2025 © Tarabut</div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
