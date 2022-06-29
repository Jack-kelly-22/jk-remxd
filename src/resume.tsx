import { FaPython, FaJs, FaJava } from "react-icons/fa";
import { DiReact, DiNodejs } from "react-icons/di";
import { FiFigma } from "react-icons/fi";

import { DiMongodb } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiGithub } from "react-icons/di";
import { SiTypescript, SiFlask } from "react-icons/si";

//  import the rest of the programming language icons

const tags = {
  celo: { name: "celo", color: "pink" },
  solidity: { name: "solidity", color: "blue" },
  javascript: { name: "javascript", color: "blue" },
  react: { name: "react", color: "pink" },
  hackathon: { name: "hackathon", color: "blue" },
  design: { name: "design", color: "yellow" },
  polyBlockchain: { name: "Blockchain @poly", color: "blue" },
};

export const resume = {
  name: "Jack Kelly",
  notion_home:
    "https://ripe-anteater-2a0.notion.site/Jack-Kelly-cfbf034984dd4e46963679c53e8853d0",
  notion_portfolio:
    "https://ripe-anteater-2a0.notion.site/J-Kelly-Portfolio-etc-5d37a0c639014c87a9c78383b52137e0",
  linkedin: "https://www.linkedin.com/in/jack-kelly-86099a19b/",

  education: [
    {
      name: "Cal Poly, San Luis Obispo",
      degree: "Computer Science",
      date: "2020 - Present",
      description:
        " Currently enrolled in my third year, was attracted to cal poly due their emphasis on learn by doing" +
        " I figured it would be a good fit because i find the majority of my learning comes from exploring previously uncharted territory",
      fav_classes: [
        {
          name: "Soft. Eng. I/II",
          color: "blue",
          desription:
            "Software Engineering I/II, This course consisted of a two quarter(20 week) group project. During this class I worked with a group of 4 peers to create online news aggregator website",
        },
        {
          name: "Soft. Eng. I/II",
          color: "blue",
          desription:
            "Software Engineering I/II, This course consisted of a two quarter(20 week) group project. During this class I worked with a group of 4 peers to create online news aggregator website",
        },
        {
          name: "Soft. Eng. I/II",
          color: "blue",
          desription:
            "Software Engineering I/II, This course consisted of a two quarter(20 week) group project. During this class I worked with a group of 4 peers to create online news aggregator website",
        },
      ],
    },
    {
      name: "University of Minnesota - Twin Cities",
      degree: "CS + MATH (attended senior year of High School)",
      date: "Sept. 2018 - May 2019",
      description:
        "Was accepted into a program my senior year to attend classes at the university, " +
        "During this year I took 4 courses, 2 math and 2 computer science, receiving A's and B's in all courses",
    },
  ],

  current_work: [
    {
      name: "Seam",
      description: "ETF-style risk-adverse yield aggregate",
      tags: [{ name: "celo" }],
    },
    {
      name: "synth",
      description: "Simplifying yield re-delegation for Uniswap v3",
    },
    { name: "MustangDAO" },
    { name: "RcadeDAO", url: "rcadeDAO.io" },
  ],

  gh_repos: [
    {
      name: "SEAM",
      url: "https://github.com/Jack-kelly-22/seam",
      tags: [tags.celo, tags.solidity, tags.javascript, tags.react],
      desription:
        "Defi yield aggregator (YETF) for celo stable coin liquidity providers",
    },
    {
      name: "mustangDAO",
      url: "tbd",
      tags: [tags.solidity, tags.design, tags.react, tags.polyBlockchain],
      desription: "Decentralized governance for blockchain @ cal poly",
    },
    {
      name: "synth.money",
      url: "https://github.com/CalPolyBlockchain/synth-node-hackathon",
      tags: [tags.celo, tags.hackathon, tags.react],
      desription:
        "Simplified yield redelegation for Uniswap V3 non-fungible liquidity positions",
    },
  ],

  skills: [
    {
      "category:": "Languages",
      items: [
        { name: "JavaScript", level: "Intermediate", icon: <FaJs /> },
        { name: "Python", level: "expert", icon: <FaPython /> },
        { name: "Java", level: "expert", icon: <FaJava /> },
        { name: "Solidity" },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <FaJs /> },
      ],
    },
    {
      "category:": "Frameworks",
      items: [
        { name: "React", icon: <DiReact /> },
        { name: "Node", icon: <DiNodejs /> },
        { name: "web3JS", icon: <FaJs /> },
        { name: "Django", icon: <FaPython /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "mongo", icon: <DiMongodb /> },
        { name: "SQL", icon: <DiMysql /> },
      ],
      "color:": "blue",
    },
    {
      "category:": "Tools",
      items: [
        { name: "Git", icon: <DiGit /> },
        { name: "Vscode", icon: <FaPython /> },
        { name: "Figma", icon: <FiFigma /> },
      ],
      "color:": "yellow",
    },
  ],

  experience: [
    {
      name: "Cal Poly Blockchain Club",
      title: "board member",
      date: "2021 - Present",
      description:
        "Board member of the Cal Poly Blockchain Club, a club that aims to provide a platform for students to learn about blockchain and crypto. ",
      bullets: [
        "Work together to prototype dApps and write smart contracts",
        "discussions with blockchain leaders from top consulting firms and protocols",
        "Prepare material to explain complex concepts to newcomers to the club",
        "Traveled with members of club to Barcelona for blockchain/DEFI conference through being sponsored by the Celo foundation for our submission to a previous hackathon",
        "MustangDAO - Decentralized governance for blockchain @ cal poly (frontend)",
      ],
    },
    {
      name: "Encompass technologies",
      location: "Contract Developer",
      bullets: [
        "- developed quality control and quality analysis web apps that perform image segmentation and feature extraction and measurement for medical devices.",
        "- Worked with lab technicians to determine functional and business requirements for the software",
        "- provided proper user documentation along with technical documentation outlining how the extracted values are computed.",
        "- Used variety of popular python tools such as numPy, pandas, Threading, Flask, MongoDB and SciKit and automated creation of excel reports on images, saving the company tens of thousands of dollars of labor costs.",
        "- Developed as a distributed system, where users interacting through the cloud hosted web app trigger jobs to be executed on locally hosted machines to minimize data upload costs and data exposure.",
        "- Built Dashboard with react, flask, mongo stack",
      ],
    },
    {
        "name": "### Junior Security Operations Analyst",
        "location":"Cal Poly Office of information Security",
        "date": "June 2020-Sept 2020",
       bullets:[
       "- implemented python and powerShell scripts to automate responses to various phishing incidents",
       "- Worked in a team environment, attending daily meetings, exposing myself to the work of all of the security engineers.",
       "- Learned common enterprise software such as JIRA, Splunk and Palo Alto Network Tools, GraphQL apis"
       ]
    },
    {
        "name": "IT Support Technician",
        "location": "Glenn Burdette(Accounting Firm)",
        bullets:[
            "- Assisted with managing and deploying employee devices",
            "- worked in an in person professional environment",
            "- Documented repetitive technical tasks",
        ]
    }
    ],
};


