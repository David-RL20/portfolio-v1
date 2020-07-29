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
        name: 'ReactJS',
        photo: '',
      },
    ],
    tools: [
      {
        name: 'ReactJS',
        photo: '',
      },
    ],
    catchphrase: "Let's build the future together", // eslint-disable-line
  },
};

export default state;
