import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if(window.innerWidth <= 960) {
			setButton(false)
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton)



	return (
		<>
			<nav className='navbar'>
				<div className='navbar-container'>
					<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
						deloused 👁️
					</Link>
					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link to='/pieces' className='nav-links' onClick={closeMobileMenu}>
								the pieces
							</Link>
						</li>
						<li className='nav-item'>
							<a href='https://www.etsy.com/shop/JJCLV' target="_blank" className='nav-links' onClick={closeMobileMenu}>
								<i class="fa fa-etsy" aria-hidden="true"></i>tsy
							</a>
						</li>
						<li>
              <a href="https://opensea.io/deloused" className='nav-links-mobile' target="_blank" onClick={closeMobileMenu}>OpenSea</a>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>OpenSea</Button>}
				</div>
			</nav>
		</>
	)
}

export default Navbar