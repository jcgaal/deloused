import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';


function Footer() {
	return (
		<div className='footer-container'>
			<div className='footer-links'>
        <div className='footer-link-wrapper'>
          <Link to='/'>Home</Link>
          <a href='https://opensea.io/collection/deloused' target="_blank" rel="noreferrer">
            OpenSea
          </a>
          <a href='https://www.etsy.com/shop/JJCLV' target="_blank" rel="noreferrer">
            <i className="fa fa-etsy" aria-hidden="true"></i>tsy
          </a>
          <Link to='/the-gallery'>the pieces</Link>
        </div>
      </div>

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              deloused 👁️
            </Link>
          </div>
          <small className='website-rights'>
            <a href="http://nfnto.xyz" target="_blank" rel="noreferrer">nfnto</a> 2021 - ∞
          </small>
          <div className='social-icons'>
            <Link
              className='social-icon-link instagram'
              to='https://www.instagram.com/delousedxyz/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='https://www.youtube.com/channel/UCrxRfPdf0eKIeSUOmfE3c-w'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='https://twitter.com/delousedxyz'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
          </div>
        </div>
      </section>
		</div>
	)
}

export default Footer