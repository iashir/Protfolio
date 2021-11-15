import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'iashir', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ilyas Ashir',
  subtitle: "I'm a ",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'mern.jpg',
  paragraphOne:
    'A self-motivated and ambitious IT professional with high-level proficiency in web development seeks to establish a career as the Web Developer. I am very confident and passionate about programming and exploring new technologies, thereby, constantly upgrading and upskilling myself.',
  resume: '../../images/mern.jpg', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'sneaker-store.jpg',
    title: 'Sneaker store',
    info: 'E-commerce Business to Consumer (B2C) project. Allows consumers to add products to the cart and purchase them via the PayPal. Authorization made with "json web token". Has protected routes for authorized users, admin page for maging content. Using AWS S3 bucket for photo storage.',
    info2: ['MERN stack', 'AWS S3', 'Redux'],
    url: 'https://sneaker-store-project.herokuapp.com/',
    repo: 'https://github.com/iashir/Sneaker-store-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'covid-map.jpg',
    title: 'Covid-19 live map',
    info: 'Single page application that receives data from 3rd party API. Select country or global data in the dropdown to see the current Covid-19 situation in the world. Data displayed dynamically in charts, cards, and country marked in Google-maps.',
    info2: ['React', 'Google-maps'],
    info4: 'https://github.com/disease-sh/API',
    url: 'https://xenodochial-swirles-a18bdb.netlify.app',
    repo: 'https://github.com/iashir/covid-live-map', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'recipe-app.jpg',
    title: 'Recipes app',
    info: 'Online platform for sharing recipes. This website has all basic functionalities of social media such as follow/unfollow, like/dislike posts or comments, leave comments and reply to them, create public or private recipes for followers only. Authorization made with "OAuth2". Has protected routes for authorized users, admin page for content managment. Using AWS S3 bucket for photo storage.',
    info2: ['MERN stack', 'AWS S3'],
    url: 'https://shrouded-falls-29751.herokuapp.com',
    repo: 'https://github.com/iashir/recipe-app-project', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ilyas-ashir-817900185',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/iashir',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
