// gitprofile.config.js

const config = {
  github: {
    username: 'zachllogan', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['portfolio', 'HungryMouseObby'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'zachary-logan-8b3185216',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'zachllogan@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1ksZ1O3Oh5aLuCthNKWVfMCrxZiIgKlcU/edit?usp=sharing&ouid=102055490493326538228&rtpof=true&sd=true', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'OOP',
    'JavaScript',
    'React.js',
    'Vue.js',
    'CSS',
    'Java',
    'Spring Boot',
    'JPA',
    'C/C++',
    'C#',
    'Python',
    'Microservices',
    'RESTful API',
    'SQL',
    'DataBricks',
    "Delta Lake",
    "Spark",
    'Snowflake',
    'Azure',
    'Terraform',
    'CI/CD',
    'Sitecore CMS',
    'R',
    'Statistics',
    'Microsoft Power Plataform',
    'Git',
    'Agile',
    'Azure DevOps ALM',
    'Customer Service',
    'Client Communication',
    'Requirements Gathering'
  ],
  experiences: [
    {
      company: 'Perficient',
      position: 'Technical Consultant',
      from: 'June 2022',
      to: 'Present',
      companyLink: 'https://www.perficient.com',
    },
    {
      company: 'University of Minnesota',
      position: 'Teaching Assistant',
      from: 'September 2021',
      to: 'May 2022',
      companyLink: 'https://twin-cities.umn.edu',
    },
    {
      company: 'Medtronic',
      position: 'Computer Science Extern',
      from: 'September 2021',
      to: 'May 2022',
      companyLink: 'https://twin-cities.umn.edu',
    },
    {
      company: 'IDtech',
      position: 'Online Coding Instructor',
      from: 'June 2021',
      to: 'October 2021',
      companyLink: 'https://www.idtech.com',
    }
  ],
  certifications: [
    {
      name: 'Databricks Certified Data Engineer Associate',
      year: 'August 2024'
    },
    {
      name: 'Azure AZ-204',
      year: 'June 2024'
    },
    {
      name: 'Microsift Power Platform PL-400',
      year: 'April 2024'
    },
    {
      name: 'Microsift Power Platform PL-200',
      year: 'October 2022'
    },
    {
      name: 'React - The Complete Guide',
      body: '(Udemy Course)',
      year: 'November 2022'
    },
    {
      name: 'Master Microservices with Spring Boot and Spring Cloud',
      body: '(Udemy Course)',
      year: 'November 2022'
    },
    {
      name: 'Scrum Alliance Scrum Foundations',
      year: 'June 2022'
    }
  ], 
  education: [
    {
      institution: 'University of Minnesota - Twin Cities',
      degree: 'Bachelors of Science, Computer Science',
      from: '2018',
      to: '2022',
    }
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
