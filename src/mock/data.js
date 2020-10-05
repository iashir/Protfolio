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
  subtitle: "I'm the ",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'mern.jpg',
  paragraphOne:
    'A self-motivated and ambitious IT professional with high-level proficiency in web development seeks to establish a career as the Software Developer. I am very confident and passionate about programming and exploring new technologies, thereby, constantly upgrading and upskilling myself.',
  resume: '../../images/mern.jpg', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'sneaker-store.jpg',
    title: 'Sneaker store',
    info:
      'E-commerce Business to Consumer (B2C) project. Allows consumers to buy their favorite shoes by using the PayPal payment system.',
    info2: ['MERN stack'],
    url: 'https://sneaker-store-project.herokuapp.com/',
    repo: 'https://github.com/iashir/Sneaker-store-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'covid-map.jpg',
    title: 'Covid-19 live map',
    info:
      "Single page application that receives data from 'disease-sh' API. Data displayed dynamically for the selected country or worldwide as default in charts, cards, and marked in Google-maps.",
    info2: ['React', 'Google-maps'],
    info4: 'https://github.com/disease-sh/API',
    url: 'https://covid-live-map.herokuapp.com/',
    repo: 'https://github.com/iashir/covid-live-map', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'recipe-app.jpg',
    title: 'Recipes app',
    info:
      'An online platform where people can share their recipes with the world. This website has all basic functionalities of social media such as follow/unfollow, like/dislike posts or comments, leave comments and reply to them. Also, users are able to create (public or private posts), update, delete posts and comments. After following of selected user the follower able to see private recipe posts.',
    info2: ['MERN stack'],
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
