//https://stackoverflow.com/questions/63497797/how-to-display-nested-routes-in-different-pages-using-react-hooks
//https://codesandbox.io/s/routing-test-2-forked-k8p64?file=/src/Data.js


const Data = [
  {
    name: "JuanJo Calva",
    id: "1",
    resources: [
      {
        id: "01",
        title: "Son et lumière",
        slug: 'son-et-lumiere',
        image: "/jjclv/hi-res/01-Son.png",
        creator: "JuanJo Calva",
        description:
          "The beginning of this hour-long tragedy, is a brief introduction of just 6 lines lyrically and a musically chaotic crescendo as its background. Son et Lumière translated from the French is “sound and light”. This song places the protagonist, Cerpin Taxt, describing his frail and battered body (by needles and drugs) and continues on to his attempted suicide, which led by an injection of rat poison falls into a coma... The Comatorium.",
        etsylink: "",
        opensealink: "",
        tweet:"https://twitter.com/intent/tweet?text=Behold%20Obscured%20Logical%20Vagrant%20and%20cower%20in%20its%20presence.%20%40cryptogawds%20https%3A%2F%2Fwww.gawds.xyz%2Fgallery%2F3772"
      },
      {
        id: "02",
        title: "Inertiatic ESP",
        slug: 'intertiatic-esp',
        image: "/jjclv/hi-res/02-Inertiatic.png",
        creator: "JuanJo Calva",
        description:
          "Once inside his coma, The Comatorium, Cerpin is put into a cocoon-like vessel that will transport him into several locations within this realm. Inside the vessel, he is excruciatingly tortured in order to be honored with leading the Tremulants, a nation of creatures he had devised in his art through drawings and poems, while in the real world.",
        etsylink: "",
        opensealink: "",
        tweet:"https://twitter.com/intent/tweet?text=Behold%20Obscured%20Logical%20Vagrant%20and%20cower%20in%20its%20presence.%20%40cryptogawds%20https%3A%2F%2Fwww.gawds.xyz%2Fgallery%2F3772"
      },
      {
        id: "03",
        title: "Roulette Dares (The Haunt Of)",
        slug: 'roulette-dares',
        image: "/jjclv/hi-res/03-Roulette.png",
        creator: "JuanJo Calva",
        description:
          "This song details Cerpin's journey through The Comatorium's rail yard. He emerges from the cocoon he's been transported in, and in trying to sleep in a train called 'Roulette Dares', where he is attacked by a terrifying exoskeletal creature, marking the beginning of a violent journey.",
        etsylink: "",
        opensealink: "",
        tweet:"https://twitter.com/intent/tweet?text=Behold%20Obscured%20Logical%20Vagrant%20and%20cower%20in%20its%20presence.%20%40cryptogawds%20https%3A%2F%2Fwww.gawds.xyz%2Fgallery%2F3772"
      },
      {
        id: "04",

        title: "Tira me a las arañas",
        slug: 'tira-me-a-las-aranas',
        image: "/jjclv/hi-res/04-TiraMe.png",
        creator: "JuanJo Calva",
        description:
          "This is an instrumental interlude which also serves as the introduction for the following piece, Drunkship of Lanterns. The broken spanish in the title stands for 'Throw Me to the Spiders'.",
        etsylink: "",
        opensealink: "",
        tweet:"https://twitter.com/intent/tweet?text=Behold%20Obscured%20Logical%20Vagrant%20and%20cower%20in%20its%20presence.%20%40cryptogawds%20https%3A%2F%2Fwww.gawds.xyz%2Fgallery%2F3772"
      },
      {
        id: "05",
        slug: 'drunkship-of-lanterns',
        title: "Drunkship of Lanterns",
        image: "/jjclv/hi-res/05-Drunkship.png",
        creator: "JuanJo Calva",
        description:
          "Cerpin awakes from visions of his mother, in the middle of the ocean surrounded by half sunken ships & submarines. A storm begins and he is resguarded inside a submarine, afterwards he goes out to find another sunken ship, inscribed with the text 'It is decided that all Gods must die.. so as to maintain social and cosmological order, Moattilliatta remains merciful and vengeful', in a foreign language that the protagonist understands. Planes begin to crash from the sky, and in a panic attack Cerpin begins loosing his mind and curls up in the fetal position.",
        etsylink: "",
        opensealink: "",
        tweet:"https://twitter.com/intent/tweet?text=Behold%20Obscured%20Logical%20Vagrant%20and%20cower%20in%20its%20presence.%20%40cryptogawds%20https%3A%2F%2Fwww.gawds.xyz%2Fgallery%2F3772"
      },
      {
        id: "06",
        slug: 'eriatarka',
        title: "Eriatarka",
        image: "/jjclv/hi-res/06-Eriatarka.png",
        creator: "JuanJo Calva",
        description:
          "The scene no longer is in the same place once Cerpin wakes up. Now he's inside The Eriatarka House of Facial and Muscular Corrections, of Dr. Wolfram Tarant, who has dogs for arms. With his canine falanges, Dr. Tarant operates severely on Cerpin, transforming him completely into a Quetzal-like winged creature named Moatilliatta. Moattilliatta learns about Koral Mataxia, a Boar he must eventually face to fulfill his destiny. During this procedure, Cerpin in the real world regains consciousness for a couple of seconds, surrounded by his family in his hospital bed, only to be taken back into The Comatorim once more.",
        etsylink: "",
        opensealink: "",
        tweet:"https://twitter.com/intent/tweet?text=Behold%20Obscured%20Logical%20Vagrant%20and%20cower%20in%20its%20presence.%20%40cryptogawds%20https%3A%2F%2Fwww.gawds.xyz%2Fgallery%2F3772"
      },
      {
        id: "07",
        slug: 'cicatriz-esp',
        title: "Cicatriz ESP",
        image: "/jjclv/hi-res/07-Cicatriz.png",
        creator: "JuanJo Calva",
        description:
          "Now Cerpin awakes in a desert called Sowvietna, with no memories left in his brain. He notices his body is no longer human nor masculine, and is now referred to as Clavietika Tresojos. Clavietika notices giant ants with men's faces approaching her, and by singing she's able to make them kill themselves. Within Clavietika's body is another being, Ojeno Valaso who is not welcome in this part of the Comatorium. Recherche Bellicose, the leader of the ants sends them to capture this unwelcome visitor, and Clavietika after a commotion has her heart trapped with a muzzle that after compressed destroyed her insides killing her instantly. At the same time her body is opened to reveal Valaso hidden within her. Ojeno Valaso is then impaled on a pole and set on fire with the use of a gigantic magnifying glass. From the ashes, Cerpin Taxt emerged.",
        etsylink: "",
        opensealink: "",
        tweet:"https://twitter.com/intent/tweet?text=Behold%20Obscured%20Logical%20Vagrant%20and%20cower%20in%20its%20presence.%20%40cryptogawds%20https%3A%2F%2Fwww.gawds.xyz%2Fgallery%2F3772"
      },
      {
        id: "08",
        slug: 'this-apparatus-must-be-unearthed',
        title: "This Apparatus Must Be Unearthed",
        image: "/jjclv/hi-res/08-ThisApparatus.png",
        creator: "JuanJo Calva",
        description:
          "Two giants arrive to pick up Clavietika Tresojos' dead body and transport her to Topiltzen, where the mayor of the town is Koral Mataxia. Mataxia had conviced the entire town to sacrifice their children in order to prevent the coming of a demonesque creature called Moatilliatta from destroying the place and killing everyone, but it was simply a ploy to devour the infants, and then bury them underneath 2 statues of Clavietika. The giants are forced to incinerate Clavietika's body upon arrival and to throw her ashes beneath her statue. Koral Mataxia notices two children who had discovered his plans and kills them with a machete, prompting Moatilliatta to burst from the ground like a phoenix from the ashes, in order to destroy everyting in his way and killing all the citizens of the town. Koral after noticing the rampage from his window is devoured by Moatilliatta. After this moment, Cerpin, in the real world is awaken from his coma from which he begins recuperating for 3 days.",
        etsylink: "",
        opensealink: "",
        tweet:"https://twitter.com/intent/tweet?text=Behold%20Obscured%20Logical%20Vagrant%20and%20cower%20in%20its%20presence.%20%40cryptogawds%20https%3A%2F%2Fwww.gawds.xyz%2Fgallery%2F3772"
      },
      {
        id: "09",
        title: "Televators",
        slug: 'televators',
        image: "/jjclv/hi-res/09-Televators.png",
        creator: "JuanJo Calva",
        description:
          "Years pass in the real world, and Cerpin once more decides to take his own life, but before he does, the house of Tremula Metacarpi, part of his art, takes over his mind and pushes him to re-enter the Comatorium permantently. Cerpin jumps from a bridge, and while his body makes contact with the ground he is transported into the Comatorium for ever, by ending Cerpin Taxt's eartly life.",
        etsylink: "",
        opensealink: "",
        tweet:"https://twitter.com/intent/tweet?text=Behold%20Obscured%20Logical%20Vagrant%20and%20cower%20in%20its%20presence.%20%40cryptogawds%20https%3A%2F%2Fwww.gawds.xyz%2Fgallery%2F3772"
      },
      {
        id: "10",
        title: "Take the Veil Cerpin Taxt",
        slug: 'take-the-veil-cerpin-taxt',
        image: "/jjclv/hi-res/01-Son.png",
        creator: "JuanJo Calva",
        description:
          "A very apropos title, which places us with Cerpin in this new reality of his, allowing him to truly open his eyes to it. He remembers how during his final moments, people instead of helping were taking pictures, reminding him of how he loathed that reality. By removing his veil, Cerpin is commiting fully to this new existence, populated by his creations: The Tremulants.",
        etsylink: "",
        opensealink: "",
        tweet:"https://twitter.com/intent/tweet?text=Behold%20Obscured%20Logical%20Vagrant%20and%20cower%20in%20its%20presence.%20%40cryptogawds%20https%3A%2F%2Fwww.gawds.xyz%2Fgallery%2F3772"
      }
    ]
  },
  {
    name: "SWITCH & SOCKETS",
    id: "2",
    resources: [
      {
        id: "01",
        title: "Son et lumière",
        slug: 'son-et-lumiere',
        image: "/jcgaal/hi-res/01-Son.png",
        creator: "JC Gaal",
        description:
          "The beginning of this hour-long tragedy, is a brief introduction of just 6 lines lyrically and a musically chaotic crescendo as its background. Son et Lumière translated from the French is “sound and light”. This song places the protagonist, Cerpin Taxt, describing his frail and battered body (by needles and drugs) and continues on to his attempted suicide, which led by an injection of rat poison falls into a coma... The Comatorium.",
        etsylink: "",
        opensealink: "",
        tweet:"https://twitter.com/intent/tweet?text=Behold%20Obscured%20Logical%20Vagrant%20and%20cower%20in%20its%20presence.%20%40cryptogawds%20https%3A%2F%2Fwww.gawds.xyz%2Fgallery%2F3772"
      },
      {
        id: "02",
        title: "Inertiatic ESP",
        slug: 'intertiatic-esp',
        image: "/jcgaal/hi-res/02-Inertiatic.png",
        creator: "JC Gaal",
        description:
          "Once inside his coma, The Comatorium, Cerpin is put into a cocoon-like vessel that will transport him into several locations within this realm. Inside the vessel, he is excruciatingly tortured in order to be honored with leading the Tremulants, a nation of creatures he had devised in his art through drawings and poems, while in the real world.",
        etsylink: "",
        opensealink: "",
        tweet:"https://twitter.com/intent/tweet?text=Behold%20Obscured%20Logical%20Vagrant%20and%20cower%20in%20its%20presence.%20%40cryptogawds%20https%3A%2F%2Fwww.gawds.xyz%2Fgallery%2F3772"
      },
      {
        id: "03",
        title: "Roulette Dares (The Haunt Of)",
        slug: 'roulette-dares',
        image: "/jcgaal/hi-res/03-Roulette.png",
        creator: "JC Gaal",
        description:
          "This song details Cerpin's journey through The Comatorium's rail yard. He emerges from the cocoon he's been transported in, and in trying to sleep in a train called 'Roulette Dares', where he is attacked by a terrifying exoskeletal creature, marking the beginning of a violent journey.",
        etsylink: "",
        opensealink: "",
        tweet:"https://twitter.com/intent/tweet?text=Behold%20Obscured%20Logical%20Vagrant%20and%20cower%20in%20its%20presence.%20%40cryptogawds%20https%3A%2F%2Fwww.gawds.xyz%2Fgallery%2F3772"
      },
      {
        id: "04",

        title: "Tira me a las arañas",
        slug: 'tira-me-a-las-aranas',
        image: "/jcgaal/hi-res/04-TiraMe.png",
        creator: "JC Gaal",
        description:
          "This is an instrumental interlude which also serves as the introduction for the following piece, Drunkship of Lanterns. The broken spanish in the title stands for 'Throw Me to the Spiders'.",
        etsylink: "",
        opensealink: "",
        tweet:"https://twitter.com/intent/tweet?text=Behold%20Obscured%20Logical%20Vagrant%20and%20cower%20in%20its%20presence.%20%40cryptogawds%20https%3A%2F%2Fwww.gawds.xyz%2Fgallery%2F3772"
      },
      {
        id: "05",
        slug: 'drunkship-of-lanterns',
        title: "Drunkship of Lanterns",
        image: "/jcgaal/hi-res/05-Drunkship.png",
        creator: "JC Gaal",
        description:
          "Cerpin awakes from visions of his mother, in the middle of the ocean surrounded by half sunken ships & submarines. A storm begins and he is resguarded inside a submarine, afterwards he goes out to find another sunken ship, inscribed with the text 'It is decided that all Gods must die.. so as to maintain social and cosmological order, Moattilliatta remains merciful and vengeful', in a foreign language that the protagonist understands. Planes begin to crash from the sky, and in a panic attack Cerpin begins loosing his mind and curls up in the fetal position.",
        etsylink: "",
        opensealink: "",
        tweet:"https://twitter.com/intent/tweet?text=Behold%20Obscured%20Logical%20Vagrant%20and%20cower%20in%20its%20presence.%20%40cryptogawds%20https%3A%2F%2Fwww.gawds.xyz%2Fgallery%2F3772"
      },
      {
        id: "06",
        slug: 'eriatarka',
        title: "Eriatarka",
        image: "/jcgaal/hi-res/06-Eriatarka.png",
        creator: "JC Gaal",
        description:
          "The scene no longer is in the same place once Cerpin wakes up. Now he's inside The Eriatarka House of Facial and Muscular Corrections, of Dr. Wolfram Tarant, who has dogs for arms. With his canine falanges, Dr. Tarant operates severely on Cerpin, transforming him completely into a Quetzal-like winged creature named Moatilliatta. Moattilliatta learns about Koral Mataxia, a Boar he must eventually face to fulfill his destiny. During this procedure, Cerpin in the real world regains consciousness for a couple of seconds, surrounded by his family in his hospital bed, only to be taken back into The Comatorim once more.",
        etsylink: "",
        opensealink: "",
        tweet:"https://twitter.com/intent/tweet?text=Behold%20Obscured%20Logical%20Vagrant%20and%20cower%20in%20its%20presence.%20%40cryptogawds%20https%3A%2F%2Fwww.gawds.xyz%2Fgallery%2F3772"
      },
      {
        id: "07",
        slug: 'cicatriz-esp',
        title: "Cicatriz ESP",
        image: "/jcgaal/hi-res/07-Cicatriz.png",
        creator: "JC Gaal",
        description:
          "Now Cerpin awakes in a desert called Sowvietna, with no memories left in his brain. He notices his body is no longer human nor masculine, and is now referred to as Clavietika Tresojos. Clavietika notices giant ants with men's faces approaching her, and by singing she's able to make them kill themselves. Within Clavietika's body is another being, Ojeno Valaso who is not welcome in this part of the Comatorium. Recherche Bellicose, the leader of the ants sends them to capture this unwelcome visitor, and Clavietika after a commotion has her heart trapped with a muzzle that after compressed destroyed her insides killing her instantly. At the same time her body is opened to reveal Valaso hidden within her. Ojeno Valaso is then impaled on a pole and set on fire with the use of a gigantic magnifying glass. From the ashes, Cerpin Taxt emerged.",
        etsylink: "",
        opensealink: "",
        tweet:"https://twitter.com/intent/tweet?text=Behold%20Obscured%20Logical%20Vagrant%20and%20cower%20in%20its%20presence.%20%40cryptogawds%20https%3A%2F%2Fwww.gawds.xyz%2Fgallery%2F3772"
      },
      {
        id: "08",
        slug: 'this-apparatus-must-be-unearthed',
        title: "This Apparatus Must Be Unearthed",
        image: "/jcgaal/hi-res/08-ThisApparatus.png",
        creator: "JC Gaal",
        description:
          "Two giants arrive to pick up Clavietika Tresojos' dead body and transport her to Topiltzen, where the mayor of the town is Koral Mataxia. Mataxia had conviced the entire town to sacrifice their children in order to prevent the coming of a demonesque creature called Moatilliatta from destroying the place and killing everyone, but it was simply a ploy to devour the infants, and then bury them underneath 2 statues of Clavietika. The giants are forced to incinerate Clavietika's body upon arrival and to throw her ashes beneath her statue. Koral Mataxia notices two children who had discovered his plans and kills them with a machete, prompting Moatilliatta to burst from the ground like a phoenix from the ashes, in order to destroy everyting in his way and killing all the citizens of the town. Koral after noticing the rampage from his window is devoured by Moatilliatta. After this moment, Cerpin, in the real world is awaken from his coma from which he begins recuperating for 3 days.",
        etsylink: "",
        opensealink: "",
        tweet:"https://twitter.com/intent/tweet?text=Behold%20Obscured%20Logical%20Vagrant%20and%20cower%20in%20its%20presence.%20%40cryptogawds%20https%3A%2F%2Fwww.gawds.xyz%2Fgallery%2F3772"
      },
      {
        id: "09",
        title: "Televators",
        slug: 'televators',
        image: "/jcgaal/hi-res/09-Televators.png",
        creator: "JC Gaal",
        description:
          "Years pass in the real world, and Cerpin once more decides to take his own life, but before he does, the house of Tremula Metacarpi, part of his art, takes over his mind and pushes him to re-enter the Comatorium permantently. Cerpin jumps from a bridge, and while his body makes contact with the ground he is transported into the Comatorium for ever, by ending Cerpin Taxt's eartly life.",
        etsylink: "",
        opensealink: "",
        tweet:"https://twitter.com/intent/tweet?text=Behold%20Obscured%20Logical%20Vagrant%20and%20cower%20in%20its%20presence.%20%40cryptogawds%20https%3A%2F%2Fwww.gawds.xyz%2Fgallery%2F3772"
      },
      {
        id: "10",
        title: "Take the Veil Cerpin Taxt",
        slug: 'take-the-veil-cerpin-taxt',
        image: "/jcgaal/hi-res/01-Son.png",
        creator: "JC Gaal",
        description:
          "A very apropos title, which places us with Cerpin in this new reality of his, allowing him to truly open his eyes to it. He remembers how during his final moments, people instead of helping were taking pictures, reminding him of how he loathed that reality. By removing his veil, Cerpin is commiting fully to this new existence, populated by his creations: The Tremulants.",
        etsylink: "",
        opensealink: "",
        tweet:"https://twitter.com/intent/tweet?text=Behold%20Obscured%20Logical%20Vagrant%20and%20cower%20in%20its%20presence.%20%40cryptogawds%20https%3A%2F%2Fwww.gawds.xyz%2Fgallery%2F3772"
      }
    ]
  }
];
export default Data;
