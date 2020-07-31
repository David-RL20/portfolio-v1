const state = {
  currentLanguage: 'eng',
  currentTheme: 'dark',
  menuOptions: [
    {
      esp: 'Sobre Mi',
      eng: 'About Me',
      link: 'AboutMe',
      highlight: false,
    },
    {
      esp: 'Proyectos',
      eng: 'Projects',
      link: 'Projects',
      highlight: false,
    },
    {
      esp: 'Curriculum',
      eng: 'Resume',
      link: 'Resume',
      highlight: false,
    },
    {
      esp: 'Contacto',
      eng: 'Contact',
      link: 'Contact',
      highlight: true,
    },
  ],
  profile: {
    name: 'David Rodriguez',
    position: 'Web development',
    description:
      'I am a Information Technology engineer from  Tijuana, México, passionate for web development  always looking ways to create things on the last most efficient technology available. I consider everything is possible working hard and doing what you are passionate about.',
    technologies: [
      {
        name: 'NodeJS',
        img: 'node.svg',
      },
      {
        name: 'ReactJS',
        img: 'reactjs.svg',
      },
      {
        name: 'HTML5',
        img: 'html.svg',
      },
      {
        name: 'SASS',
        img: 'sass.svg',
      },
      {
        name: 'CSS3',
        img: 'css.svg',
      },
    ],
    tools: [
      {
        name: 'Slack',
        img: 'slack.svg',
      },
      {
        name: 'Visual Studio',
        img: 'vs.svg',
      },
      {
        name: 'Redux',
        img: 'redux.svg',
      },
      {
        name: 'Adobe XD',
        img: 'xd.svg',
      },
    ],
    social: [
      {
        name: 'Linkedin',
        img: 'linkeding.svg',
        link:
          'https://www.linkedin.com/in/david-alejandro-rodriguez-leal-297a201a8/',
      },
      {
        name: 'Github',
        img: 'github.svg',
        link: 'https://github.com/David-RL20',
      },
    ],
    catchphrase: "Let's build the future together", // eslint-disable-line
  },
};

export default state;
