import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Software engineering portfolio for Terrell McKinney', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Terrell',
  subtitle: "I'm a Software Engineer and Teacher",
  cta: 'Hire Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot.jpeg',
  paragraphOne: 'Hi there,',
  paragraphTwo:
    " I'm Terrell, a software engineer looking to build products and tools that make sense.  Over the years I've partnered with government, nonprofit, and private companies to teach and build.",
  paragraphThree:
    "I'm hoping to find more people to partner with and build as I grow and learn how to solve big problems for little people.",
  resume:
    'https://docs.google.com/document/d/1m89Xgr1Cy37XwIIx9IDUa-N0ICqueJnU3zKO3i2EODo/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ecommerce.png',
    title: 'Ash-Korleshionz',
    info: 'An e-commerce project built with Flask.',
    info2:
      "I'm building an ecommerce site for a friend in Accra. We're using a Postgres Database, Heroku, and cloudinary's API for the photos. ",
    url: 'https://ash-korleshionz.herokuapp.com/',
    repo: 'https://github.com/Terlam/ash_korleshionz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'api_proj.png',
    title: 'Illinois School Data API',
    info: 'A Data API for Illinois School Report Card Data',
    info2:
      'I wanted to build a restful API to publish all of the data captured by the Illinois School report card. This project was Completed after participating in Chicago Codes.',
    url: 'https://ilschoolsapi.herokuapp.com/',
    repo: 'https://github.com/Terlam/SchoolData', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather.png',
    title: 'Weather App',
    info: 'A weather app using OpenWeather.com and Unsplash.com',
    info2:
      "Here's a weather app hosted on github pages that uses Openweather's API and Unsplash to render pictures tagged from those locations.",
    url: 'https://terlam.github.io/weather_app/',
    repo: 'https://github.com/Terlam/weather_app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'drone.png',
    title: 'Drone Inventory App',
    info: 'React/Firebase Frontend Flask/Heroku backend',
    info2: 'A drone inventory app used to catalogue flying robots.',
    url: 'https://drones-69-tm.firebaseapp.com/',
    repo: 'https://github.com/Terlam/drone-inventory', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'See something you like?',
  btn: 'Tell Me about it',
  email: 'terrell.mckinney@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/Terlam',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/terrellmckinney',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Terlam',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
