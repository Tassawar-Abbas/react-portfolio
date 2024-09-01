import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";
import { TbBrandReactNative,TbBrandNextjs  } from "react-icons/tb";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure,
  SiMui,
  SiTypescript,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

import {
  FaHardHat,
  FaAws,
  FaNodeJs,
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import { DiCss3, DiJava, DiMongodb, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1vkxyMDB5_KpMwt4QXFgT2aqdRizr8Czh/view?usp=sharing";
export const repoLink = "https://github.com/mittal-parth/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/mittal-parth";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "openSource",
    title: "Open Source",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    title: "Comsats University",
    degree: "Bachelor of Science in Software Engineering",
    duration: "August 2015 - June 2019",
  },
  {
    id: "education-2",
    title: "Asp.net web development",
    degree: "",
    duration: "May 2018 - August 2018",
  },
];

export const achievements = [
  {
    id: "a-1",
    icon: ethglobal,
    event: "ETHIndia'22 | World's Largest Ethereum Hackathon",
    position: "Winner",
    content1: "Top 12 winners among 20k+ registrations",
    content2: "One of Polygon's Best Public Goods",
    content3: "Best Module on Biconomy SDK",
    article: "https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethindia-22/article66238923.ece",
    project: "https://devfolio.co/projects/chargeswap-3527",
    youtube: "https://youtu.be/9rieTya8Yds?t=3908",
  },
  {
    id: "a-2",
    icon: polkadot,
    event: "Polkadot Hackathon: Europe Edition",
    position: "2nd Runner Up in the ink! Smart Contract Category",
    content1: "Built GreenTrust offering a novel solution for obtaining certification in organic farming.",
    content2: "",
    content3: "",
    github: "https://github.com/pranav2305/GreenTrust",
  },
  {
    id: "a-3",
    icon: lightspeed,
    event: "Warpspeed by Lightspeed",
    position: "1st Runner Up",
    content1: "1st Runner Up Overall by Lightspeed among 107 hackers",
    content2: "Top 3 projects using Replit",
    content3: "1st Runner Up by Amazon Web Services (AWS)",
    article: "https://shorturl.at/fhjsT",
  },
  {
    id: "a-4",
    icon: dennisivy,
    event: "September Hackathon by Dennis Ivy",
    position: "Winner",
    content1: "Rated the best portfolio website among 450+ participants across the globe.",
    content2: "",
    content3: "",
    youtube: "https://www.youtube.com/watch?v=X2473En3h_o&t=5278s",
    project: "https://parthmittal.netlify.app/",
  },
  {
    id: "a-5",
    icon: manipal,
    event: "Manipal Hackathon'22",
    position: "Consolation Prize",
    content1: "Top 10 among 500+ teams across India",
    content2: "Developed a cross-platform mobile application to address the problem of social cohesion.",
    content3: "",
    article: "https://shorturl.at/exEIQ",
  },
  {
    id: "a-6",
    icon: icon,
    event: "ICON Hyperbuild Hackathon",
    position: "Honorable Mention",
    content1: "Honorable Mention among 655 participants across the globe in a 3 month-long online hackathon.",
    content2: "",
    content3: "",
    project: "https://devpost.com/software/green-trust-xj2w6g",
  },
  {
    id: "a-7",
    icon: ethforall,
    event: "ETHForAll 2023",
    position: "Top 3 Superfluid Projects",
    content1: "Bounty winners among 430 projects in ETHGlobal's largest online hackathon.",
    content2: "",
    content3: "",
    project: "https://devfolio.co/projects/green-trust-ed14",
  },
];


export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-2",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-3",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-4",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-4",
        icon: SiTypescript ,
        name: "TypeScript",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "React J's",
      },
      {
        id: "f-2",
        icon: TbBrandNextjs,
        name: "Next J's",
      },
      {
        id: "f-3",
        icon: TbBrandReactNative ,
        name: "React Native",
      },
      {
        id: "f-4",
        icon: FaNodeJs ,
        name: "Node J's",
      },
      {
        id: "f-5",
        icon: SiExpress  ,
        name: "Express J's",
      },
      {
        id: "f-6",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-7",
        icon: SiMui,
        name: "Material UI",
      },
      {
        id: "f-8",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-9",
        icon: SiJquery,
        name: "jQuery",
      },
      {
        id: "f-10",
        icon: SiDotnet,
        name: ".NET",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: FaAws ,
        name: "AWS",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-8",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-9",
        icon: SiVite,
        name: "ViteJS",
      },
      {
        id: "t-10",
        icon: SiMongodb,
        name: "Mongodb",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "Nester Sky",
    positions: [
      {
        title: ".Net developer",
        duration: "May 2020 - January 2021",
      },
    
    ],
  },
  {
    organisation: "Phenologix",
    positions: [
      {
        title: "Software Engineer",
        duration: "Febraury 2021 -  January 2022",
       
      },
    ],
  },
  {
    organisation: "QMH Technology",
    positions: [
      {
        title: "Front End Developer",
        duration: "June 2022 - Febraury 2023",
      
      },
      
    ],
  },
  {
    organisation: "Zonic Solutions",
    positions: [
      {
        title: "Senior MERN Stack Engineer (Team Lead) ",
        duration: "Febraury 2023 - Present",
      
      },
      
    ],
  }
];

export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title:
      "Move _wiki to old table look, common template for email and settings digest only",
    link: "https://github.com/publiclab/plots2/pull/10731",
    number: "#10731",
    date: "Feb 24 2022",
    linesAdded: "101",
    linesDeleted: "48",
  },
  {
    id: "os-2",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Combine templates for email digest and settings digest",
    link: "https://github.com/publiclab/plots2/pull/10681",
    number: "#10681",
    date: "Feb 9 2022",
    linesAdded: "86",
    linesDeleted: "106",
  },
  {
    id: "os-3",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Fix reverse chronological sorting on inline grids",
    link: "https://github.com/publiclab/plots2/pull/11114",
    number: "#11114",
    date: "May 4 2022",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-4",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "style: Make post page footer responsive",
    link: "https://github.com/publiclab/plots2/pull/10634",
    number: "#10634",
    date: "Feb 24 2022",
    linesAdded: "64",
    linesDeleted: "8",
  },
  {
    id: "os-5",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Typos in Translation_System.md",
    link: "https://github.com/publiclab/plots2/issues/11120",
    number: "#11120",
    date: "May 6 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-6",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translations on layouts/_header.html.erb",
    link: "https://github.com/publiclab/plots2/issues/11115",
    number: "#11115",
    date: "May 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-7",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translation of 'This is part of' on _tagging.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10986",
    number: "#10986",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-8",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Wrong closing heading tag in _digest.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10985",
    number: "#10985",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-9",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Add class to center wiki.scraped_image in wikis template",
    link: "https://github.com/publiclab/plots2/issues/10797",
    number: "#10797",
    date: "Mar 18 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-10",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Images on /wiki are not center aligned",
    link: "https://github.com/publiclab/plots2/issues/10755",
    number: "#10755",
    date: "Mar 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-11",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-12",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-13",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "authentication: Fix placeholder realms for redirects.",
    link: "https://github.com/zulip/zulip/pull/19689",
    number: "#19689",
    date: "Sep 9 2021",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-14",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "message_editing : Fix topic edit propagate option cut-off",
    link: "https://github.com/zulip/zulip/pull/19760",
    number: "#19760",
    date: "Feb 10 2022",
    linesAdded: "9",
    linesDeleted: "8",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Global Airport Taxi",
    link: "https://globalairporttaxi.com/",
    content:
      "Developed the front end for a transportation booking website using React.js, ensuring a user-friendly and responsive design. Built dynamic booking forms and real-time fare calculation modules with React components, jQuery, and AJAX to enhance user engagement. Optimized performance with techniques like code-splitting, lazy loading, and image compression. Integrated third-party APIs for secure booking and payment processing, and implemented client-side validation for a smooth and reliable booking experience.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
    ],
  },
  {
    id: "project-2",
    title: "Tamadres",
    link: "https://tamadres.com/",
    content:
      "Worked on developing the front end for an e-commerce website, enhancing user experience with a clean and responsive design using HTML, CSS, and JavaScript. Created dynamic components and product galleries with jQuery and AJAX to provide seamless user interactions. Improved performance with lazy loading and image optimization techniques. Integrated secure payment gateways and implemented client-side validation for smooth checkout processes.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
    ],
  },
  {
    id: "project-3",
    title: "London Heathrow Taxi Hire",
    link: "https://london-heathrow-airport-taxi.agency/",
    content:
      "Developed the front end for an airport taxi booking platform using React.js, ensuring a sleek and responsive design optimized for both desktop and mobile users. Created intuitive booking forms and dynamic price calculators with React components and integrated real-time updates using AJAX. Improved website performance through code-splitting, lazy loading, and image optimization techniques. Collaborated closely with the backend team to integrate secure APIs for booking management and payment processing, while implementing client-side validation and error handling to ensure a seamless user experience.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
    ],
  },
  {
    id: "project-4",
    title: "Britania Minicab",
    link: "https://britanniaminicab.co.uk/",
    content:
      "Led front-end development for a minicab booking website using React.js, delivering a modern and responsive user interface. Designed and built dynamic booking forms and interactive features with React and JavaScript to enhance user engagement and experience. Optimized site performance through techniques such as lazy loading, code splitting, and efficient state management. Collaborated with backend developers to integrate APIs for secure payment processing and real-time booking updates, while implementing thorough client-side validation and accessibility standards to ensure a seamless and inclusive user journey.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
    ],
  },
  {
    id: "project-5",
    title: "Great Britain Cars Spain",
    link: "https://greatbritaincars.es/",
    content:
      "Led front-end development for a car hire and airport transfer website using React.js, focusing on creating a modern, responsive design that adapts to various devices. Developed interactive features, including booking forms and dynamic fare calculations, leveraging React components, jQuery, and AJAX for smooth user interactions. Enhanced site performance through advanced techniques like code-splitting and lazy loading. Integrated secure payment gateways and third-party APIs for a streamlined booking process and implemented robust client-side validation to ensure reliability and ease of use.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
    ],
  },
  {
    id: "project-6",
    title: "Partner Dashboard Management",
    link: "https://partner.wisdome.mobi/dashboard",
    content:
      "Served as a Senior MERN Stack Engineer for a partner management dashboard, building and optimizing a scalable, responsive web application using React.js for the front end and Node.js with Express for the back end. Designed and implemented dynamic components and real-time data visualization features with React and Redux, enhancing user engagement and productivity. Developed RESTful APIs and integrated them with MongoDB to manage and query large datasets efficiently. Focused on performance improvements through code-splitting, lazy loading, and server-side rendering (SSR). Ensured security and scalability by implementing JWT-based authentication, role-based access control, and robust error handling.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-2",
        icon: SiNextdotjs,
        name: "Next J's"
      },
      {
        id: "icon-2",
        icon: FaNodeJs,
        name: "Node J's"
      },
      {
        id: "icon-2",
        icon: DiMongodb,
        name: "Mongodb"
      },
      {
        id: "icon-2",
        icon: SiExpress,
        name: "Express J's"
      },
    ],
  },
  {
    id: "project-7",
    title: "Member Learning Challenges and Events Management",
    link: "https://wisdome.mobi/dashboard",
    content:
      "Acted as a Senior MERN Stack Engineer for a comprehensive dashboard application, driving development of a responsive and scalable front end using React.js, Redux, and Material-UI. Built modular and reusable components to support real-time data updates and interactive visualizations. Developed and optimized backend services with Node.js and Express, creating RESTful APIs for seamless integration with MongoDB. Focused on enhancing performance and user experience through server-side rendering (SSR), efficient state management, and implementing advanced caching strategies. Ensured security and reliability by implementing authentication with JWT, data encryption, and rigorous testing practices.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-2",
        icon: SiNextdotjs,
        name: "Next J's"
      },
      {
        id: "icon-2",
        icon: FaNodeJs,
        name: "Node J's"
      },
      {
        id: "icon-2",
        icon: DiMongodb,
        name: "Mongodb"
      },
      {
        id: "icon-2",
        icon: SiExpress,
        name: "Express J's"
      },
    ],
  },
 
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  {
    organisation: "Google Developer Student Club, NITK",
    title: "Co-Chair",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
        link: "",
      },
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
  {
    organisation: "Genesis, NITK",
    title: "Competitions Head",
    duration: "Sep 2021 - Present",
    content: [
      {
        text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
        link: "",
      },
      {
        text: "Won 7 inter-college solo dance competitions",
        link: "",
      },
    ],
    logo: genesis,
  },
  {
    organisation: "IRIS, NITK",
    title: "Tutor",
    duration: "Jan 2022 - Jan 2022",
    content: [
      {
        text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
        link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
      },
    ],
    logo: iris,
  },
  {
    organisation: "E-Cell, NITK",
    title: "Executive Member",
    duration: "Sep 2021 - Apr 2022",
    content: [
      {
        text: "Organised the season 3 of the E-Cell NITK Podcast",
        link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
      },
      {
        text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
        link: "",
      },
    ],
    logo: ecell,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/mittal-parth",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/mittal-parth",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:mittalparth22@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://www.twitter.com/mittalparth_",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/mittalparth_",
  },
];

export const aboutMe = {
    name: "Tassawar Abbas",
    tagLine: "MTS-1 @Oracle | ex-SDE Intern @Averlon | ex-Tech Lead @IRIS,NITK | ETHIndia'22 Winner | NITK'24",
    intro: "Experienced Senior MERN Stack Engineer with a proven track record in developing scalable and high-performance web and mobile applications. Proficient in MongoDB, Express, React, and Node.js, delivering solutions that drive business success."
}
