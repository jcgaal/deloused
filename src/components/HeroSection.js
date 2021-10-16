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
				<p>The pieces are 2 sets of 10 different illustrations corresponding to each song of ^the album, creatd by <a href="https://www.instagram.com/jjclv/" target="_blank" rel="noreferrer">JuanJo Calva</a> & <a href="https://twitter.com/jcgaal_" target="_blank" rel="noreferrer">JC Gaal</a> respectively. There are a total of 20 pieces. The aim was to stay loyal to *the story, however subjectivity rules all beings, and thus will be reflected in the art. The same album listened during the same time period and imagined by two different artists.</p>
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

		<div id='project' className='the-project'>
			<h2>the project</h2>
			<div className='text-wrap'>
				<p>We, Juanjo Calva & JC Gaal, met during college through our primary interest: music. By sharing our musical experiences and varied taste, we began a friendship but also an interesting creative work symbiosis. This allowed us to explore art through experiments in creativity as well as in mediums. We would think of something and we'd just materialize it... it felt like wizardry. Juanjo excelled in illustration while JC dabbled in design as well as writing. However, Juanjo moved to Barcelona 6 years ago, and with the distance this type of interactions became less frequent, until they were nonexistent.</p>
				<p>Recently, and due to the pandemic we got in touch and dissected every song from one of our favorite albums to an excruciating detail, constantly discussing the story, the music, and the artists’ intent continuously. We analyzed every sound, every paragraph and took notes to grasp the extent of the work, and to try to capture the elusive intent of the creators. Once achieved, we illustrated each one of the album’s songs with our very own visual interpretations and through our preferred mediums. This allowed us to approach this project with honesty, respect and openness, as well as a profound excitement (so freaking fun!).</p>
				<p>This is how this project came about, as a process of bonding after years of distance. All of this through music, which brought us together in the first place.</p>
			</div>
		</div>

		<div id='story' className='the-story '>
			<div className='text-wrap hover-displayable'>
				<h2>the story</h2>
				<h3 className='highlights'>In 2003, the debut album by our favorite band dropped</h3>
				<p>This album shares the tale of a troubled poet who through an injection of rat poison attempted to leave this world, only to be woken up in another realm much diferent from this reality: The Comatorium.</p>
				<p>This new paradigm presents itself to the protagonist as a series of complex and epic challenges that demand prowess beyond his human form and limitations making him transcend his own anthropoid form.</p>
				<p>With profound allegorical descriptions and a masterful use of sophisticated rhetorical devices, the authors of the story leave to the listeners the task of filling in the gaps and helping construct the narrative based with their very own interpretation informed by their experience in life.</p>
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
	</>
	)
}

export default HeroSection