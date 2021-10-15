//Thanks to https://sebhastian.com/react-switch/
import React from 'react';
import '../App.css';
import { BrowserRouter as Router, useHistory, Switch, Route, Link, useRouteMatch, useParams} from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Piece.css';


function Piece(props) {
  /* Scroll to top function*/
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  /* Declaring the variables we'll be using */ 
  const {urlid}: {urlid: string} = useParams();

    let id
    let title
    let slug
    let image
    let creator 
    let description
    let etsylink
    let opensealink
    let tweet

  /* A switch to sort our array out and display de adeqcuate content based on the user's click on the gallery */
  switch(urlid) {
    case 'juanjo-son-et-lumiere':
        id= "01";
        title= "Son et lumière";
        slug= 'son-et-lumiere';
        image= "/images/jjclv/hi-res/01-Son.png";
        creator= "JuanJo Calva";
        description=
          "Our protagonist reflects on his wretched state as two godly hands drift him into a coma following a drug overdose. Sound and light are both his final and first sensations as he loses consciousness of the real world and is born into The Comatorium. Laden with subtext, these six lines act as a summary of what’s to come and echo the disorientating experiences our protagonist is going to take part of.";
        etsylink= "https://www.etsy.com/listing/1094099027/the-mars-volta-son-et-lumiere";
        opensealink="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/679838657972806534083625802788535917575563427676711438423783026714728202241";
        tweet="https://twitter.com/intent/tweet?text=Son%20et%20lumi%C3%A8re%20@delousedxyz%20http://www.deloused.xyz/the-gallery/juanjo-son-et-lumiere%20by%20@jjclv";
      break 
    case 'juanjo-intertiatic-esp':
        id= "02";
        title= "Inertiatic ESP";
        slug= 'intertiatic-esp';
        image= "/images/jjclv/hi-res/02-Inertiatic.png";
        creator= "JuanJo Calva";
        description=
          "A disconnect between body and mind, a lack of understanding of what Cerpin Taxt, our protagonist,  is being sentenced for. “Now I’m lost” is uttered while leaving the physical world behind, our main character is now becoming another being depicted in this cocoon with a golden lasso around it. The godly imagery and setting only help set the mood up for what is coming.";
        etsylink= "https://www.etsy.com/listing/1080171576/the-mars-volta-inertiatic-esp";
        opensealink="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/679838657972806534083625802788535917575563427676711438423783027814239830017";
        tweet="https://twitter.com/intent/tweet?text=Inertiatic%20ESP%20@delousedxyz%20http://www.deloused.xyz/the-gallery/juanjo-intertiatic-esp%20by%20@jjclv"
      break
    case 'juanjo-roulette-dares':
        id= "03";
        title= "Roulette Dares (The Haunt Of)";
        slug= 'roulette-dares';
        image= "/images/jjclv/hi-res/03-Roulette.png";
        creator= "JuanJo Calva";
        description=
          "An out-of-body experience, our main character is greeted by a scorpion and a godly entity that symbolizes the failed reconnection of mind and body.";
        etsylink= "https://www.etsy.com/listing/1080173760/the-mars-volta-roulette-dares-the-haunt";
        opensealink="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/679838657972806534083625802788535917575563427676711438423783028913751457793";
        tweet="https://twitter.com/intent/tweet?text=Roulette%20Dares%20(The%20Haunt%20Of)%20@delousedxyz%20http://www.deloused.xyz/the-gallery/juanjo-roulette-dares%20by%20@jjclv"
      break
    case 'juanjo-tira-me-a-las-aranas':
        id= "04";
        title= "Tira Me A Las Arañas";
        slug= 'tira-me-a-las-aranas';
        image= "/images/jjclv/hi-res/04-TiraMe.png";
        creator= "JuanJo Calva";
        description=
          "A bridge between key parts of the story. A mouth screams into a fleet of ships that are incapable of hearing. Our main character is trapped in a submarine. From the Storybook: Down below me I could see a black and white sphere… sullen and unnerving. Floating in a graveyard of abandoned submarines that circled the magnificent dot as a ringed mote. Had I been here before?";
        etsylink= "https://www.etsy.com/listing/1094106421/the-mars-volta-tira-me-a-las-aranas";
        opensealink="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/679838657972806534083625802788535917575563427676711438423783030013263085569";
        tweet="https://twitter.com/intent/tweet?text=Tira%20Me%20A%20Las%20Ara%C3%B1as%20@delousedxyz%20http://www.deloused.xyz/the-gallery/juanjo-tira-me-a-las-aranas%20by%20@jjclv"
      break
    case 'juanjo-drunkship-of-lanterns':
        id= "05";
        slug= 'drunkship-of-lanterns';
        title= "Drunkship of Lanterns";
        image= "/images/jjclv/hi-res/05-Drunkship.png";
        creator= "JuanJo Calva";
        description=
          "While trapped, Cerpin can do nothing but stare at the all-seeing eye while listening to the clicking of his thousand eyes while counting the toll.  In Dante’s Inferno, the toll is referred to as the price to pay the ferryman to cross the river into the underworld. A backwards “Don’t turn back!” is played during the second chorus.";
        etsylink= "https://www.etsy.com/listing/1094144215/the-mars-volta-drunkship-of-lanterns";
        opensealink="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/679838657972806534083625802788535917575563427676711438423783031112774713345";
        tweet="https://twitter.com/intent/tweet?text=Drunkship%20of%20Lanterns%20@delousedxyz%20http://www.deloused.xyz/the-gallery/juanjo-drunkship-of-lanterns%20by%20@jjclv"
      break 
    case 'juanjo-eriatarka':
        id= "06";
        slug= 'eriatarka';
        title= "Eriatarka";
        image= "/images/jjclv/hi-res/06-Eriatarka.png";
        creator= "JuanJo Calva";
        description=
          "Our protagonist goes through another great transformation as Dr. Wolfram Tarant, MD, who has an unspecified number of dog heads for hands, performs surgery to turn Cerpin Taxt into Clavietika Tres Ojos. Triumphantly she stands as this new being, divine and scarred by everything she has lived through.";
        etsylink= "https://www.etsy.com/listing/1080219090/the-mars-volta-eriatarka";
        opensealink="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/679838657972806534083625802788535917575563427676711438423783032212286341121";
        tweet="https://twitter.com/intent/tweet?text=Eriatarka%20@delousedxyz%20http://www.deloused.xyz/the-gallery/juanjo-eriatarka%20by%20@jjclv"  
      break
    case 'juanjo-cicatriz-esp':
        id= "07";
        slug= 'cicatriz-esp';
        title= "Cicatriz ESP";
        image= "/images/jjclv/hi-res/07-Cicatriz.png";
        creator= "JuanJo Calva";
        description=
          "The transformation of our main character is believed to have turned him into a divine entity. Laced with political and religious undertones, this song features our protagonist becoming aware of his exile and defection of his old world as he stands on a desert and gazes to the unforeseen.";
        etsylink= "https://www.etsy.com/listing/1080220950/the-mars-volta-cicatriz";
        opensealink="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/679838657972806534083625802788535917575563427676711438423783033311797968897";
        tweet="https://twitter.com/intent/tweet?text=Cicatriz%20ESP%20@delousedxyz%20http://www.deloused.xyz/the-gallery/juanjo-eriatarka%20by%20@jjclv"
      break
    case 'juanjo-this-apparatus-must-be-unearthed':
        id= "08";
        slug= 'this-apparatus-must-be-unearthed';
        title= "This Apparatus Must Be Unearthed";
        image= "/images/jjclv/hi-res/08-ThisApparatus.png";
        creator= "JuanJo Calva";
        description=
          "Clavietika is left in the desert and is found by Giants who then take her home. She then is burned and buried underground. As she is unearthed and her ashes spread across the wind, she is uncovered as Moattiliatta, the saviour of their people. The journey of our character within the Comatorium ends here as the betrayal of our character portrays people’s self-betrayal and self-boycotting.";
        etsylink= "https://www.etsy.com/listing/1080224696/the-mars-volta-this-apparatus-must-be";
        opensealink="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/679838657972806534083625802788535917575563427676711438423783034411309596673";
        tweet="https://twitter.com/intent/tweet?text=This%20Apparatus%20Must%20Be%20Unearthed%20@delousedxyz%20http://www.deloused.xyz/the-gallery/juanjo-this-apparatus-must-be-unearthed%20by%20@jjclv"
      break
    case 'juanjo-televators':
        id= "09";
        title= "Televators";
        slug= 'televators';
        image= "/images/jjclv/hi-res/09-Televators.png";
        creator= "JuanJo Calva";
        description=
          "Our main character wakes up and finds himself lost after all that he lived within the Comatorium. This is the final eulogy for Julio Venegas, who committed suicide in 1996 after leaping from an overpass into a freeway. A beautiful and haunting track that has many tints of the band’s relationship with Julio. ";
        etsylink= "https://www.etsy.com/listing/1080225954/the-mars-volta-televators";
        opensealink="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/679838657972806534083625802788535917575563427676711438423783035510821224449";
        tweet="https://twitter.com/intent/tweet?text=Televators%20@delousedxyz%20http://www.deloused.xyz/the-gallery/juanjo-televators%20by%20@jjclv"
      break
    case 'juanjo-take-the-veil-cerpin-taxt':
        id= "10";
        title= "Take the Veil Cerpin Taxt";
        slug= 'take-the-veil-cerpin-taxt';
        image= "/images/jjclv/hi-res/10-TakeTheVeil.png";
        creator= "JuanJo Calva";
        description=
          "The end is here, but not as a dark spread of nothing after life, but more a veil that unlocks the new things to come for our main character. His new life starts here.";
        etsylink= "https://www.etsy.com/listing/1094157629/the-mars-volta-take-the-veil-cerpin-taxt";
        opensealink="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/679838657972806534083625802788535917575563427676711438423783036610332852225";
        tweet="https://twitter.com/intent/tweet?text=Take%20the%20Veil%20Cerpin%20Taxt%20@delousedxyz%20http://www.deloused.xyz/the-gallery/juanjo-take-the-veil-cerpin-taxt%20by%20@jjclv"
      break
    case 'jcgaal-son-et-lumiere':
        id= "11";
        title= "Son et lumière";
        slug= 'son-et-lumiere';
        image= "/images/jcgaal/hi-res/01-Son.png";
        creator= "JC Gaal";
        description=
          "The beginning of this hour-long tragedy, is a brief introduction of just 6 lines lyrically and a musically chaotic crescendo as its background. Son et Lumière translated from the French is “sound and light”. This song places the protagonist, Cerpin Taxt, describing his frail and battered body (by needles and drugs) and continues on to his attempted suicide, which led by an injection of rat poison falls into a coma... The Comatorium.";
        etsylink= "https://www.etsy.com/listing/1088765894/the-mars-volta-son-et-lumiere-by-jc-gaal";
        opensealink="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/29338204109167088673570916437519866001459376405274979146638729114771748028417";
        tweet="https://twitter.com/intent/tweet?text=Son%20et%20lumi%C3%A8re%20@delousedxyz%20http://www.deloused.xyz/the-gallery/jcgaal-son-et-lumiere%20by%20@jcgaal_";
      break 
    case 'jcgaal-intertiatic-esp':
        id= "12";
        title= "Inertiatic ESP";
        slug= 'intertiatic-esp';
        image= "/images/jcgaal/hi-res/02-Inertiatic.png";
        creator= "JC Gaal";
        description=
          "Once inside his coma; The Comatorium; Cerpin is put into a cocoon-like vessel that will transport him into several locations within this realm. Inside the vessel; he is excruciatingly tortured in order to be honored with leading the Tremulants; a nation of creatures he had devised in his art through drawings and poems; while in the real world.";
        etsylink= "https://www.etsy.com/listing/1102698639/the-mars-volta-inertiatic-esp-by-jc-gaal";
        opensealink="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/29338204109167088673570916437519866001459376405274979146638729115871259656193";
        tweet="https://twitter.com/intent/tweet?text=Inertiatic%20ESP%20@delousedxyz%20http://www.deloused.xyz/the-gallery/jcgaal-intertiatic-esp%20by%20@jcgaal_";
      break
    case 'jcgaal-roulette-dares':
        id= "13";
        title= "Roulette Dares (The Haunt Of)";
        slug= 'roulette-dares';
        image= "/images/jcgaal/hi-res/03-Roulette.png";
        creator= "JC Gaal";
        description=
          "This song details Cerpin's journey through The Comatorium's rail yard. He emerges from the cocoon he's been transported in; and in trying to sleep in a train called 'Roulette Dares'; where he is attacked by a terrifying exoskeletal creature; marking the beginning of a violent journey.";
        etsylink= "https://www.etsy.com/listing/1102696463/the-mars-volta-roulette-dares-the-haunt";
        opensealink="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/29338204109167088673570916437519866001459376405274979146638729116970771283969";
        tweet="https://twitter.com/intent/tweet?text=Roulette%20Dares%20(The%20Haunt%20Of)%20@delousedxyz%20http://www.deloused.xyz/the-gallery/jcgaal-roulette-dares%20by%20@jcgaal_";
      break
    case 'jcgaal-tira-me-a-las-aranas':
        id= "14";
        title= "Tira Me A Las Arañas";
        slug= 'tira-me-a-las-aranas';
        image= "/images/jcgaal/hi-res/04-TiraMe.png";
        creator= "JC Gaal";
        description=
          "This is an instrumental interlude which also serves as the introduction for the following piece; Drunkship of Lanterns. The broken spanish in the title stands for 'Throw Me to the Spiders'.";
        etsylink= "https://www.etsy.com/listing/1088760692/the-mars-volta-tira-me-a-las-aranas-by";
        opensealink="https://twitter.com/intent/tweet?text=Eriatarka%20@delousedxyz%20http://www.deloused.xyz/the-gallery/jcgaal-eriatarka%20by%20@jcgaal_";
        tweet="https://twitter.com/intent/tweet?text=Tira%20Me%20A%20Las%20Ara%C3%B1as%20@delousedxyz%20http://www.deloused.xyz/the-gallery/jcgaal-tira-me-a-las-aranas%20by%20@jcgaal_";
      break
    case 'jcgaal-drunkship-of-lanterns':
        id= "15";
        slug= 'drunkship-of-lanterns';
        title= "Drunkship of Lanterns";
        image= "/images/jcgaal/hi-res/05-Drunkship.png";
        creator= "JC Gaal";
        description=
          "Cerpin awakes from visions of his mother; in the middle of the ocean surrounded by half sunken ships & submarines. A storm begins and he is resguarded inside a submarine; afterwards he goes out to find another sunken ship; inscribed with the text 'It is decided that all Gods must die.. so as to maintain social and cosmological order; Moattilliatta remains merciful and vengeful'; in a foreign language that the protagonist understands. Planes begin to crash from the sky; and in a panic attack Cerpin begins loosing his mind and curls up in the fetal position.";
        etsylink= "https://www.etsy.com/listing/1102692795/the-mars-volta-drunkship-of-lanterns-by";
        opensealink="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/29338204109167088673570916437519866001459376405274979146638729119169794539521";
        tweet="https://twitter.com/intent/tweet?text=Drunkship%20of%20Lanterns%20@delousedxyz%20http://www.deloused.xyz/the-gallery/jcgaal-drunkship-of-lanterns%20by%20@jcgaal_";
      break 
    case 'jcgaal-eriatarka':
        id= "16";
        slug= 'eriatarka';
        title= "Eriatarka";
        image= "/images/jcgaal/hi-res/06-Eriatarka.png";
        creator= "JC Gaal";
        description=
          "The scene no longer is in the same place once Cerpin wakes up. Now he's inside The Eriatarka House of Facial and Muscular Corrections; of Dr. Wolfram Tarant; who has dogs for arms. With his canine falanges; Dr. Tarant operates severely on Cerpin; transforming him completely into a Quetzal-like winged creature named Moatilliatta. Moattilliatta learns about Koral Mataxia; a Boar he must eventually face to fulfill his destiny. During this procedure; Cerpin in the real world regains consciousness for a couple of seconds; surrounded by his family in his hospital bed; only to be taken back into The Comatorim once more.";
        etsylink= "https://www.etsy.com/listing/1102689747/the-mars-volta-eriatarka-by-jc-gaal";
        opensealink="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/29338204109167088673570916437519866001459376405274979146638729120269306167297";
        tweet="https://twitter.com/intent/tweet?text=Eriatarka%20@delousedxyz%20http://www.deloused.xyz/the-gallery/jcgaal-eriatarka%20by%20@jcgaal_";
      break
    case 'jcgaal-cicatriz-esp':
        id= "17";
        slug= 'cicatriz-esp';
        title= "Cicatriz ESP";
        image= "/images/jcgaal/hi-res/07-Cicatriz.png";
        creator= "JC Gaal";
        description=
          "Now Cerpin awakes in a desert called Sowvietna; with no memories left in his brain. He notices his body is no longer human nor masculine; and is now referred to as Clavietika Tresojos. Clavietika notices giant ants with men's faces approaching her; and by singing she's able to make them kill themselves. Within Clavietika's body is another being; Ojeno Valaso who is not welcome in this part of the Comatorium. Recherche Bellicose; the leader of the ants sends them to capture this unwelcome visitor; and Clavietika after a commotion has her heart trapped with a muzzle that after compressed destroyed her insides killing her instantly. At the same time her body is opened to reveal Valaso hidden within her. Ojeno Valaso is then impaled on a pole and set on fire with the use of a gigantic magnifying glass. From the ashes; Cerpin Taxt emerged.";
        etsylink= "https://www.etsy.com/listing/1088754270/the-mars-volta-cicatriz-esp-by-jc-gaal";
        opensealink="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/29338204109167088673570916437519866001459376405274979146638729121368817795073";
        tweet="https://twitter.com/intent/tweet?text=Cicatriz%20ESP%20@delousedxyz%20http://www.deloused.xyz/the-gallery/jcgaal-cicatriz-esp%20by%20@jcgaal_"
      break
    case 'jcgaal-this-apparatus-must-be-unearthed':
        id= "18";
        slug= 'this-apparatus-must-be-unearthed';
        title= "This Apparatus Must Be Unearthed";
        image= "/images/jcgaal/hi-res/08-ThisApparatus.png";
        creator= "JC Gaal";
        description=
          "Two giants arrive to pick up Clavietika Tresojos' dead body and transport her to Topiltzen; where the mayor of the town is Koral Mataxia. Mataxia had conviced the entire town to sacrifice their children in order to prevent the coming of a demonesque creature called Moatilliatta from destroying the place and killing everyone; but it was simply a ploy to devour the infants; and then bury them underneath 2 statues of Clavietika. The giants are forced to incinerate Clavietika's body upon arrival and to throw her ashes beneath her statue. Koral Mataxia notices two children who had discovered his plans and kills them with a machete; prompting Moatilliatta to burst from the ground like a phoenix from the ashes; in order to destroy everyting in his way and killing all the citizens of the town. Koral after noticing the rampage from his window is devoured by Moatilliatta. After this moment; Cerpin; in the real world is awaken from his coma from which he begins recuperating for 3 days.";
        etsylink= "https://www.etsy.com/listing/1102685427/the-mars-volta-this-apparatus-must-be";
        opensealink="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/29338204109167088673570916437519866001459376405274979146638729122468329422849";
        tweet="https://twitter.com/intent/tweet?text=This Apparatus Must Be Unearthed @delousedxyz http://www.deloused.xyz/the-gallery/jcgaal-this-apparatus-must-be-unearthed by @jcgaal_";
      break
    case 'jcgaal-televators':
        id= "19";
        title= "Televators";
        slug= 'televators';
        image= "/images/jcgaal/hi-res/09-Televators.png";
        creator= "JC Gaal";
        description=
          "Years pass in the real world; and Cerpin once more decides to take his own life; but before he does; the house of Tremula Metacarpi; part of his art; takes over his mind and pushes him to re-enter the Comatorium permantently. Cerpin jumps from a bridge; and while his body makes contact with the ground he is transported into the Comatorium for ever; by ending Cerpin Taxt's eartly life.";
        etsylink= "https://www.etsy.com/listing/1088746976/the-mars-volta-televators-by-jc-gaal";
        opensealink="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/29338204109167088673570916437519866001459376405274979146638729123567841050625";
        tweet="https://twitter.com/intent/tweet?text=Televators%20@delousedxyz%20http://www.deloused.xyz/the-gallery/jcgaal-televators%20by%20@jcgaal_";
      break
    case 'jcgaal-take-the-veil-cerpin-taxt':
        id= "20";
        title= "Take the Veil Cerpin Taxt";
        slug= 'take-the-veil-cerpin-taxt';
        image= "/images/jcgaal/hi-res/10-TakeTheVeil.png";
        creator= "JC Gaal";
        description=
          "A very apropos title; which places us with Cerpin in this new reality of his; allowing him to truly open his eyes to it. He remembers how during his final moments; people instead of helping were taking pictures; reminding him of how he loathed that reality. By removing his veil; Cerpin is commiting fully to this new existence; populated by his creations= The Tremulants.";
        etsylink= "https://www.etsy.com/listing/1088743806/the-mars-volta-take-the-veil-cerpin-taxt";
        opensealink="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/29338204109167088673570916437519866001459376405274979146638729124667352678401";
        tweet="https://twitter.com/intent/tweet?text=Take%20the%20Veil%20Cerpin%20Taxt%20@delousedxyz%20http://www.deloused.xyz/the-gallery/jcgaal-take-the-veil-cerpin-taxt%20by%20@jcgaal_"
      break
    default:
        title= "The Story Began Amidst Perdition & Rat Poison";
        slug= 'deloused';
        image= "/images/deloused-og-image.jpg";
        creator= "JuanJo Calva & JC Gaal";
        description=
          "Dictated by a mix of psychic automatism and illustration, this project was put together by expressing the functioning of thought, dictated by thought with the shared experiences and interpretations of De-Loused in the Comatorium by The Mars Volta. Trying to understand, interpret and polish these 10 illustrations has been the hardest task I’ve had to take on as an illustrator. I love the way the pieces are glued together and have this shared genetic material that unifies them onto a single piece. Join us in the journey that is this album and this project, that we’ve crafted with our minds and heart.";
        etsylink= "";
        opensealink= "https://opensea.io/collection/deloused";
        tweet="https://twitter.com/intent/tweet?text=Deloused:%20Sound%20Becomes%20Light%20@delousedxyz%20http://www.deloused.xyz/the-gallery/";
    }

    return (
      <div className="main-root">
        <div className='piece'>
          <div className='piece__container'>
            <div className='piece__wrapper'>
              <br/>
              what up {title}  & {urlid}
              <div className='piece__item'>
                <a className='piece__item__link' href={opensealink} target="_blank">
                  <figure className='piece__item__pic-wrap'>
                    <img
                      className='piece__item__img'
                      alt={title}
                      src={image}
                    />
                  </figure>
                </a>
                <div className='piece__item__info'>
                  <h1 className='piece__item__title'>{title}</h1>
                  <h2 className='piece__item__creator'>{creator}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="description">
          <div className='description__container'>
            <div className='description__wrapper'>
              <div className='description__items'>
              
                <div className='description__item'>
                  <ul className="row">
                    <li>
                      <h3 className="description__item__title">Bits of the story...</h3>
                    </li>
                    <li>
                      <p className='description__item__text'>{description}</p>
                    </li>  
                  </ul>             
                </div>

                <div className='description__item'>
                  <ul className="row">
                    <li>
                      <h3 className="description__item__title text-center">Own a piece of this project</h3>
                    </li>
                    <li className="button-section">
                      <p className="description__item__text text-center">Grab a poster</p>
                      <a href={etsylink} target="_blank" rel="noreferrer" className="btns btn--primary btn--huge">Etsy</a>
                    </li>
                    <li className="button-section">
                      <p className="description__item__text text-center">Get one of the 20 NFTs</p>
                      <a href={opensealink} target="_blank" rel="noreferrer" className="btns btn--primary btn--huge">Opensea</a>
                      <p className="description__item__subtext text-center">Every NFT owner gets a signed poster of the piece shipped anywhere in the world & unlockable exclusive content</p>
                    </li>
                    <li className="button-section">
                      <p className="description__item__text text-center">Spread the Comatorium</p>
                      <a href={tweet} target="_blank" rel="noreferrer" className="btns btn--primary btn--huge">Tweet It</a>
                    </li>
                  </ul>
                  <br></br>
                  <p className="row">
                    
                  </p>
                  
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Piece