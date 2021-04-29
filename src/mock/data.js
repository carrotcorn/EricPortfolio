import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Eric Bourne | Web Application Software Developer',
  lang: 'en',
  description: 'This is my portfolio',
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Eric Bourne',
  subtitle: 'and I am a Software Developer',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'nitaLakeGood.jpg',
  paragraphOne:
    "I am a tenacious full-stack web developer who has a specialty in MERN stack web applications. I graduated from the British Columbia Institute of Technology's Software Systems Development Program with distinction in May of 2020",
  paragraphTwo:
    'Along with MERN applications, I also have experience with Object Oriented Programming with Java and C#, testing with Mocha/Chai, Database management with SQL, along with other frame works like Gatsby, ASP.NET, Angular. I also have experience with Docker, AWS, Azure, and Digital Ocean.',
  paragraphThree:
    ' I have an intense love of Computer Science and am constantly working on new projects along with my side business Sonar Music Network Inc. I love coding and computer science which is why I am constantly learning and am excited for what the future holds.',
  paragraphFour:
    'Aside from computer science, I am also an avid lover of everything outdoors, be it snowboarding, surfing, mountain biking, and camping. I also am an experienced musician having played drums for over 20 years and guitar for 10. ',
  resume: 'EricBourneResume.pdf',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'sonarScreen.png',
    title: 'Sonar Music Network',

    info:
      'Passion project working with a fellow BCIT graduate Lucas Johnson, building a music social network that allows musicians to connect and meet up to jam and play gigs. Users can filter classifieds based on type, such as buy/sell, looking for musicians/band, along wiht other filters like price, a users experience. Users can also rate other suers based on their professionalism. This is just phase one of our deployment and this will be an ongoing business for years to come. This is a dockerized MERN stack application with Lucas and I splitting the work in half.',
    url: 'https://www.sonarmusic.social',
  },
  {
    id: nanoid(),
    img: 'porton2.png',
    title: 'Porton Health Kiosk App',
    info:
      'Industry group project done in conjunction with Porton Health to make a kiosk check-in application that allows for patients to check in. Built with a Node.js backend utilizing Egg, a Koa framework, with a React frontend and material-ui components.',
    // url: '',
    repo: 'https://github.com/carrotcorn/PortonHealthKioskAdminFrontend',
  },
  {
    id: nanoid(),
    img: 'movie-db.png',
    title: 'Movie Database Search Engine',
    info:
      'This is a single page web application done for educational purposes utilizing the React framework and Bootstrap styling. This web application allows users to Search The Movie Database API and filter their results by genre, year, popularity, and ratings. Users can also save movies to their favourites along with rate movies out of 5 stars. Search results display all information regarding the movie from the movie database API such as the title, poster, rating, plot, and release date.',
    // url: '',
    repo: 'https://github.com/carrotcorn/MovieDatabaseApp',
  },
];

// CONTACT DATA
export const contactData = {
  email: 'eric@sonarmusic.social',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/eric-bourne/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/carrotcorn',
    },
  ],
};