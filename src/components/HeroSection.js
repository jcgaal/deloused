import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';
import { ReactComponent as DelousedLogo } from './img/logo-vector.svg';

function HeroSection() {
	return (
		<>
		<div className='hero-container'>
			<video src='/videos/deloused-video.mp4' autoPlay loop muted />
			<DelousedLogo className='main-logo'/>
			<h1>Sound Becomes Light</h1>
			<p>10 songs uniquely illustrated</p>
			<p>by 2 friends, while decoding</p>
			<p>their favorite album</p>
			<p>20 pieces in total</p>
			<div className='hero-btns'>
				<a href='https://opensea.io/collection/deloused' target='blank' rel="noreferrer" className="btns btn--outline btn--large">
					VIEW ON OPENSEA
				</a>
				<a href='/the-gallery'  className="btns btn--primary btn--large">
					VISIT THE GALLERY <i className='far fa-play-circle' />
				</a>
			</div>
			<div className='featured-images'>
				<img src='/images/hero-section/jjclv-05.png' className='f-img f-img_01' alt='' />
				<img src='/images/hero-section/jcgaal-06.jpg' className='f-img f-img_02' alt='' />
				<img src='/images/hero-section/jjclv-08.png' className='f-img f-img_03' alt='' />
				<img src='/images/hero-section/jjclv-01.png' className='f-img f-img_04' alt='' />
				<img src='/images/hero-section/jcgaal-03.jpg' className='f-img f-img_05' alt='' />
				<img src='/images/hero-section/jcgaal-09.jpg' className='f-img f-img_06' alt='' />
			</div>
		</div>

		<div id='pieces' className='the-pieces'>
			<h2>what are the pieces?</h2>
			<div className='text-wrap'>
				<p>The pieces are 2 unique Major Arana-like series of illustrations corresponding to each song of ^the album. The Light Major Arcana creatd by <a href="https://www.instagram.com/jjclv/" target="_blank" rel="noreferrer">JuanJo Calva</a> & The Dark Major Arcana produced by <a href="https://twitter.com/jcgaal_" target="_blank" rel="noreferrer">JC Gaal</a>. There is a total of 20 pieces that unravel the tragic story of a human striving to escape this reality.</p>
			</div>
			<div className="showcase-container">
				<div className="main-showcase">
					<ul className='showcase-column'>
						<li className='item-image'>
							<figure className='item-pic-wrap'>
		            <img src='/images/full-jcgaal.jpg' alt="by JC Gaal" className='main-showcase-img'  />
		            <figcaption className='img-caption'>"Deloused", by JC Gaal.</figcaption>
		          </figure>
		        </li>
	         	<li className='item-image'>
		          <figure className='item-pic-wrap'>
		            <img src='/images/full-jjclv.jpg' alt="by JuanJo Calva" className='main-showcase-img'  />
		            <figcaption className='img-caption'>"Deloused", by Juanjo Calva.</figcaption>
		          </figure>
		        </li>
	        </ul>
				</div>
			</div>
			<div className='text-wrap'>
				<div className='hero-btns text-center'>
					<a href='https://www.etsy.com/shop/JJCLV' target='blank' rel="noreferrer" className="btns btn--primary btn--large">
						visit our <i className="fa fa-etsy" aria-hidden="true"></i>tsy
					</a>
					<a href='/the-gallery' className="btns btn--outline btn--large">
						view all the pieces
					</a>
				</div>
			</div>
		</div>

		<div id='story' className='the-story '>
			<div className='text-wrap hover-displayable'>
				<h2>the story</h2>
				<h3 className='highlights'>In 2003, the debut album by our favorite band dropped</h3>
				<p>This album, through music and prose, narrates the tale of a troubled artist, who through an injection of rat poison attempted to leave this world at once, only to be awakened in another realm much diferent from this reality: The Comatorium.</p>
				<p>This new paradigm presents itself to the protagonist as a of complex saga paved with challenges, which will demand prowess beyond his human form and limitations, thus making him transcend his own anthropoid form.</p>
				<p>With profound allegorical descriptions and a masterful use of sophisticated rhetorical devices, the authors of the story leave to the listeners the task of filling in the gaps and helping construct the narrative informed by their life experiences, as dull or as exciting as those may be.</p>
				<h3 className='highlights'>and that is what we did...</h3>
			</div>
			<img className='deloused-cover' src='/images/de-loused-art.jpg' alt="De-Loused in the Comatorium" />
			<div className='text-wrap'>
				<div className='hero-btns text-center'>
					<a href='/the-gallery' className="btns btn--outline btn--large">
						visit the  gallery
					</a>
					<a href='https://www.etsy.com/shop/JJCLV' target='blank' rel="noreferrer" className="btns btn--primary btn--large">
						view on <i className="fa fa-etsy" aria-hidden="true"></i>tsy
					</a>
				</div>
			</div>
		</div>


		<div id='project' className='the-project'>
			<h2>the project</h2>
			<div className='text-wrap'>
				<p>Meet the wretched souls behind this project: Juanjo Calva & JC Gaal, who met during college through their primary interest: music. By sharing their musical experiences and varied taste, a friendship and a fruitful creative work symbiosis began deveolping. This helped them explore art through experiments across several mediums with confidence. <a href="https://www.behance.net/jjclv" target="_blank" rel="noreferrer">Juanjo excelled in illustration</a> while <a href="https://www.behance.net/jcgaal" target="_blank" rel="noreferrer">JC dabbled in design</a> as well as <a href="https://blog.jcgaal.com" target="_blank" rel="noreferrer">writing</a>. However, destiny set the roads apart, with Juanjo moving to Barcelona more than half a decade ago, and with the distance te productivity subsided, until now.</p>
				<p>Every sound, every paragraph and every bit of the story was analyzed and dissected in a sysiphean endeavor, only to faintly grasp merely a fraction of the depth of the original work, and to try to translate it into plasticity. Through evanescent yet honest understanding, JC & JuanJo illustrated each one of the album’s songs through their own prism and produced a Dark & Light Major Arcanas for the journey of Cerpin Taxt... a journey that might resemble everyone's at some point.</p>
			</div>
		</div>
	</>
	)
}

export default HeroSection