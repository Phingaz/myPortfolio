import dice from "../assets/img/diceGame.png"
import pig from "../assets/img/pigGame.png"
import number from "../assets/img/numberGuessing.png"
import login from "../assets/img/login.png"
import scandi from "../assets/img/scandi.png"
import weather from "../assets/img/weather.png"
import pimcalc from "../assets/img/pimcalc.png"
import taskmanager from "../assets/img/taskmanager.png"
import utility from "../assets/img/utility.png"
import memgen from "../assets/img/memgen.png"
import imgUploader from "../assets/img/imgUploader.png"
import bmi from "../assets/img/bmi.png"
import audiophile from "../assets/img/audiophile.png"

const techs = [
    {
        id: 1,
        text: "Figma",
        alt: "figma",
    },
    {
        id: 2,
        text: "Html",
        alt: "html"
    },
    {
        id: 3,
        text: "Css",
        alt: "css"
    },
    {
        id: 4,
        text: "Javascript",
        alt: "js"
    },
    {
        id: 6,
        text: "React",
        alt: "react"
    },
    {
        id: 7,
        text: "Bootstrap",
        alt: "bs"
    },
    {
        id: 8,
        text: "Material Ui",
        alt: "mui"
    },
    {
        id: 9,
        text: "Tailwind Css",
        alt: "tw"
    },
    {
        id: 11,
        text: "Python",
        alt: "python"
    },
    {
        id: 12,
        text: "MySql",
        alt: "mysql"
    },
    {
        id: 13,
        text: "MongoDb",
        alt: "mdb"
    },
    {
        id: 14,
        text: "JWT",
        alt: "jwt"
    },
    {
        id: 15,
        text: "Express",
        alt: "express"
    },
    {
        id: 16,
        text: "Node.Js",
    },
    {
        id: 17,
        text: "Api's",
    },
    {
        id: 18,
        text: "GitHub",
    },
    {
        id: 19,
        text: "Jira",
    },
    {
        id: 20,
        text: "Confluence",
    },
    {
        id: 21,
        text: "Bitbucket",
    },
    {
        id: 22,
        text: "Redux",
    },
    {
        id: 23,
        text: "Sass",
    },
    {
        id: 24,
        text: "Git",
    },
    {
        id: 25,
        text: "Mongoose",
    },
]

const courses = [
    {
        id: 1,
        course: "FullStack Web Development"
    },
    {
        id: 2,
        course: "Javascript Complete"
    },
    {
        id: 3,
        course: "Git and GitHub"
    },
    {
        id: 4,
        course: "Web Development with HTML, CSS and Javascript"
    },
]

const workflows = [
    {
        id: 1,
        course: " Mobile - First, Responsive Design"
    },
    {
        id: 2,
        course: "Cross Browser Testing & Debugging"
    },
    {
        id: 3,
        course: "Cross Functional Teams"
    },
    {
        id: 4,
        course: "Agile Development & Scrum"
    },
]

const project = [
    {
        id: 13,
        img: audiophile,
        alt: "audiophile",
        name: "Audiophile",
        link: "http://piiaudio.netlify.app",
        techStack: "React - CSS - SCSS - Material Ui - React Router Dom",
        about: "A fully functional e-commerce website for customers to buy headphones, speakers and earphones"
    },
    {
        id: 12,
        img: taskmanager,
        alt: "taskmanager",
        name: "My Task Manager App",
        link: "http://piitask.netlify.app",
        techStack: "React - CSS - Material Ui - Express - MongoDb - Mongoose - NodeJs",
        about: "A full stack task manager app with the option to create a safe and encrypted personal account to store your personal task :)"
    },
    {
        id: 11,
        img: bmi,
        alt: "bmi",
        name: "Bmi Calculator",
        link: "http://piibmi.netlify.app",
        techStack: "React - SASS - MaterialUi - Css",
        about: "A front-end focused react app to calculate your body mass index",
    },
    {
        id: 10,
        img: imgUploader,
        alt: "weather",
        name: "Image Uploader",
        link: "http://piiimageuploader.netlify.app",
        techStack: "React - SASS - MaterialUi - API",
        about: "A fullstack app made and developed with react and sass, you are able to upload images via an api call to a secure database",
    },
    {
        id: 9,
        img: weather,
        alt: "weather",
        name: "Weather App",
        link: "http://piiweather.netlify.app",
        techStack: "React - CSS - MaterialUi - API",
        about: "Fully responsive weather app, that gets your estimated location and pulls the necessary data through open weather api"
    },
    {
        id: 8,
        img: login,
        alt: "login",
        name: "Login App",
        link: "http://pimunip.netlify.app",
        techStack: "React - Css - NodeJs - Express - MongoDb",
        about: "A simple app to register user and verify login information, more features to come :)"
    },
    {
        id: 7,
        img: utility,
        alt: "utility",
        name: "Utility App",
        link: "http://piiutilities.netlify.app",
        techStack: "React - Css - Api",
        about: "A simple utility app where you can shorten url links, generate qrcodes and generate random users. More features to come"
    },
    {
        id: 6,
        img: pimcalc,
        alt: "pimcalc",
        name: "Pim Calculator",
        link: "http://pimcalculator.netlify.app",
        techStack: "React - Css",
        about: "Developed to help student calculate thier aggregated university score"
    },
    {
        id: 5,
        img: scandi,
        alt: "scandi",
        name: "Scadiweb Interview",
        link: "http://piiscandiweb.netlify.app",
        techStack: "React - Css - NodeJs - Express - MySql",
        about: "A fullstack app developed with react and node for scandiweb technical interview"
    },
    {
        id: 4,
        img: memgen,
        alt: "memgen",
        name: "Meme Generator",
        link: "http://piimemgen.netlify.app",
        techStack: "React - Css",
        about: "Meme generator app"
    },
    {
        id: 3,
        img: dice,
        alt: "dice",
        name: "Dice Game",
        link: "http://piidicegame.netlify.app",
        techStack: "Html - Css - Javascript",
        about: "A simple dice game"
    },
    {
        id: 2,
        img: pig,
        alt: "pig",
        name: "Pig Game",
        link: "http://piipiggame.netlify.app",
        techStack: "React - Css",
        about: "A simple game"
    },
    {
        id: 1,
        img: number,
        alt: "number",
        name: "Number Guessing Game",
        link: "http://piiguessinggame.netlify.app",
        techStack: "React - Css",
        about: "A simple guessing game"
    },
]
const work = [
    {
        id: 1,
        company: "E-Core",
        date: "2023 - Present",
        location: "Sao Paulo",
        role: "Software consultant",
        about: "As a software consultant, it is important to think of solutions to existing problems, and problems that may arise. Come up with effective solutions with efficiency in mind.",
        stack: ["NodeJs", "Git", "Github", "Jira", "Javascript", "React", "Agile", "Automation", "Linux", "Bash", "Aws", "Project Management"]
    },
    {
        id: 2,
        company: "99",
        date: "2022 - 2023",
        location: "Sao Paulo",
        role: "Operations Analyst",
        about: "As an operations analyst, critical thinking was key in coming up with solution on the day to day activities of the company.",
        stack: ["Excel", "Word", "Power point", "Budget management", "Root cause analysis", "Market place analysis", "Budget tracking", "KPI's", "OKR's"]
    },
    {
        id: 3,
        company: "MBG Financial",
        date: "2019 - 2022",
        location: "Sao Paulo",
        role: "Telemarketing Specialist",
        about: "Worked as a telemarketer to resolve and negotiate customers delinquent bills, and come up with a resolution that works for the customer and the client",
        stack: ["Customer support", "Negoiations", "Client Management", "FDCPA"]
    },
]


export { techs, courses, workflows, project, work }

