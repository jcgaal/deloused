import React from 'react';
import '../App.css';
// import { Button } from './Button';
import { BrowserRouter as Router, useHistory, Switch, Route, Link, useRouteMatch, useParams} from 'react-router-dom';
import './Gallery.css';
import GalleryItem from './GalleryItem';
import { ReactComponent as DelousedLogo } from './img/logo-vector.svg';



function Gallery() {
  return (
    <>
    <div className='cards'>
      <DelousedLogo className='main-logo'/>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <h2>by JuanJo Calva</h2>
          <br/>
          <ul className='cards__items'>
            <GalleryItem
              src='images/jjclv/lo-res/01-Son.jpg'
              text='Son et lumière'
              label='JuanJo Calva'
              path='/the-gallery/juanjo-son-et-lumiere'
            />
            <GalleryItem
              src='images/jjclv/lo-res/02-Inertiatic.jpg'
              text='Inertiatic ESP'
              label='JuanJo Calva'
              path='/the-gallery/juanjo-intertiatic-esp'
            />
          </ul>
          <ul className='cards__items'>
            <GalleryItem
              src='images/jjclv/lo-res/03-Roulette.jpg'
              text='Roulette Dares (The Haunt Of)'
              label='JuanJo Calva'
              path='/the-gallery/juanjo-roulette-dares'
            />
            <GalleryItem
              src='images/jjclv/lo-res/04-TiraMe.jpg'
              text='Tira me a las arañas'
              label='JuanJo Calva'
              path='/the-gallery/juanjo-tira-me-a-las-aranas'
            />
            <GalleryItem
              src='images/jjclv/lo-res/05-Drunkship.jpg'
              text='Drunkship of Lanterns'
              label='JuanJo Calva'
              path='/the-gallery/juanjo-drunkship-of-lanterns'
            />
          </ul>
          <ul className='cards__items'>
            <GalleryItem
              src='images/jjclv/lo-res/06-Eriatarka.jpg'
              text='Eriatarka'
              label='JuanJo Calva'
              path='/the-gallery/juanjo-eriatarka'
            />
            <GalleryItem
              src='images/jjclv/lo-res/07-Cicatriz.jpg'
              text='Cicatriz ESP'
              label='JuanJo Calva'
              path='/the-gallery/juanjo-cicatriz-esp'
            />
          </ul>
          <ul className='cards__items'>
            <GalleryItem
              src='images/jjclv/lo-res/08-ThisApparatus.jpg'
              text='This Apparatus Must Be Unearthed'
              label='JuanJo Calva'
              path='/the-gallery/juanjo-this-apparatus-must-be-unearthed'
            />
            <GalleryItem
              src='images/jjclv/lo-res/09-Televators.jpg'
              text='Televators'
              label='JuanJo Calva'
              path='/the-gallery/juanjo-televators'
            />
            <GalleryItem
              src='images/jjclv/lo-res/10-TakeTheVeil.jpg'
              text='Take the Veil Cerpin Taxt'
              label='JuanJo Calva'
              path='/the-gallery/juanjo-take-the-veil-cerpin-taxt'
            />
          </ul>
        </div>
        <div className='cards__wrapper'>
          <h2>by JC Gaal</h2>
          <br/>
          <ul className='cards__items'>
            <GalleryItem
              src='images/jcgaal/lo-res/01-Son.jpg'
              text='Son et lumière'
              label='JC Gaal'
              path='/the-gallery/jcgaal-son-et-lumiere'
            />
            <GalleryItem
              src='images/jcgaal/lo-res/02-Inertiatic.jpg'
              text='Inertiatic ESP'
              label='JC Gaal'
              path='/the-gallery/jcgaal-intertiatic-esp'
            />
          </ul>
          <ul className='cards__items'>
            <GalleryItem
              src='images/jcgaal/lo-res/03-Roulette.jpg'
              text='Roulette Dares (The Haunt Of)'
              label='JC Gaal'
              path='/the-gallery/jcgaal-roulette-dares'
            />
            <GalleryItem
              src='images/jcgaal/lo-res/04-TiraMe.jpg'
              text='Tira me a las arañas'
              label='JC Gaal'
              path='/the-gallery/jcgaal-tira-me-a-las-aranas'
            />
            <GalleryItem
              src='images/jcgaal/lo-res/05-Drunkship.jpg'
              text='Drunkship of Lanterns'
              label='JC Gaal'
              path='/the-gallery/jcgaal-drunkship-of-lanterns'
            />
          </ul>
          <ul className='cards__items'>
            <GalleryItem
              src='images/jcgaal/lo-res/06-Eriatarka.jpg'
              text='Eriatarka'
              label='JC Gaal'
              path='/the-gallery/jcgaal-eriatarka'
            />
            <GalleryItem
              src='images/jcgaal/lo-res/07-Cicatriz.jpg'
              text='Cicatriz ESP'
              label='JC Gaal'
              path='/the-gallery/jcgaal-cicatriz-esp'
            />
          </ul>
          <ul className='cards__items'>
            <GalleryItem
              src='images/jcgaal/lo-res/08-ThisApparatus.jpg'
              text='This Apparatus Must Be Unearthed'
              label='JC Gaal'
              path='/the-gallery/juanjo-this-apparatus-must-be-unearthed'
            />
            <GalleryItem
              src='images/jcgaal/lo-res/09-Televators.jpg'
              text='Televators'
              label='JC Gaal'
              path='/the-gallery/juanjo-televators'
            />
            <GalleryItem
              src='images/jcgaal/lo-res/10-TakeTheVeil.jpg'
              text='Take the Veil Cerpin Taxt '
              label='JC Gaal'
              path='/the-gallery/jcgaal-take-the-veil-cerpin-taxt'
            />
          </ul>
        </div>
      </div>
    </div>
  </>
  )
}

export default Gallery