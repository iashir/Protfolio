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
    "A self-motivated and ambitious IT professional with high-level proficiency in web development seeks to establish a career as the Software Developer. I am very confident and passionate about programming and exploring new technologies, thereby, constantly upgrading and upskilling myself. I'm currently looking for a Full-time/Part-time job.",
  resume: '../../images/mern.jpg', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'sneaker-store.jpg',
    title: 'Sneaker store',
    info:
      'Online Sneaker Store where users are able to buy products with paypal payment system. This website has form validation, SignIn/SignUp feature, add to card and remove from cart, search item bar, filter products feature and view payment history',
    info2: ['React', 'Redux', 'Antd-UI'],
    info3: ['Node', 'Express', 'MongoDB'],
    url: 'https://sneaker-store-project.herokuapp.com/',
    repo: 'https://github.com/iashir/Sneaker-store-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'covid-map.jpg',
    title: 'Covid-19 live map',
    info:
      "This website consist only with front-end and shows data from third party API called 'disease-sh'. For better user expirience data displayed in bar-chart, line-chart (chronological data for the last 30 days) and cards per selected country or worldwide as default. Also, google maps dynamically marks the selected country.",
    info2: ['React', 'Material-UI'],
    info3: '',
    info4: 'https://github.com/disease-sh/API',
    url: 'https://covid-live-map.herokuapp.com/',
    repo: 'https://github.com/iashir/covid-live-map', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'recipe-app.jpg',
    title: 'Recipes app',
    info:
      'This is basically social media for people who passioned in coocking and who wants to share their recipes with the world. Users are able to make CRUD operations with their recipes, make them public or private (only followers are able to see), follow other users, leave comments, like posts or comments.',
    info2: ['React', 'Materialize'],
    info3: ['Node', 'Express', 'MongoDB'],
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
