import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';


function Footer() {
	return (
		<div className='footer-container'>
			<div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to='/'>Home</Link>
          </div>
          <div class='footer-link-items'>
            <a href='https://opensea.io/deloused' target="_blank">
              OpenSea
            </a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <a href='https://www.etsy.com/shop/JJCLV' target="_blank">
              <i class="fa fa-etsy" aria-hidden="true"></i>tsy
            </a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to='/pieces'>the pieces</Link>
          </div>
        </div>
      </div>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              deloused 👁️
            </Link>
          </div>
          <small class='website-rights'>
            <a href="http://nfnto.xyz" target="_blank">nfnto</a> 2021 - ∞
          </small>
          <div class='social-icons'>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
          </div>
        </div>
      </section>
		</div>
	)
}

export default Footer