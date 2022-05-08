import { FaPython, FaJs,  FaJava} from "react-icons/fa";
import { DiReact, DiNodejs } from "react-icons/di";
import {FiFigma} from "react-icons/fi";

import { DiMongodb } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiGithub } from "react-icons/di";
import { SiTypescript,SiFlask} from "react-icons/si";

//  import the rest of the programming language icons

const tags = {
    "celo": { "name":"celo", "color": "green"},
    "solidity": { "name":"solidity", "color": "gradient-to-r from-green to-white"},
    "javascript": { "name":"javascript", "color": "blue"},
    "react": { "name":"react", "color": "blue"},
    "hackathon": { "name":"hackathon", "color": "blue"},
    "design": { "name":"design", "color": "yellow"},
    "polyBlockchain": { "name":"Blockchain @poly", "color": "green"},
    
};

const resume = {
    "name": "Jack Kelly",

    "education": [
        {
            "name": "University of Minnesota - Twin Cities",
            "degree": "CS + MATH (attended senior year of High School)",
            "date": "Sept. 2018 - May 2019",
            "description": "Was accepted into a program my senior year to attend classes at the university, " +
                "During this year I took 4 courses, 2 math and 2 computer science, receiving A's and B's in all courses"

        },
        {
            "name": "Cal Poly, San Luis Obispo",
            "degree": "Computer Science",
            "date": "2020 - Present",
            "description": " Currently enrolled in my third year, was attracted to cal poly due their emphasis on learn by doing" +
                " I figured it would be a good fit because i find the majority of my learning comes from exploring previously uncharted territory"
        }
    ],      

    

    "current_work": [
        {"name": "Seam","description":"ETF-style risk-adverse yield aggregate", "tags":[{'name': 'celo'}]},
        {"name": "synth", description: "Simplifying yield re-delegation for Uniswap v3"},
        {"name": "MustangDAO",},
        {"name": "RcadeDAO", url:"rcadeDAO.io"}
    ],

    previous_projects: [
        {
            "name": "Buckets",
            "tags": [{'name': 'solidity'}],
        },
        {
            "name": "Stitch",

        },
        {
            "name": "Buckets",
        },
        {
            "name": "Buckets",
        }
    ],

    gh_repos : [
        {
          name: "SEAM",
          url: "https://github.com/Jack-kelly-22/seam",
          tags: [tags.celo, tags.solidity, tags.javascript, tags.react],
          desription: "Defi yield aggregator (YETF) for celo"
        },
        {
          name: "mustangDAO",
          url: "tbd",
            tags: [{...tags.celo}, tags.solidity, tags.design, tags.polyBlockchain],
          desription: "Decentralized governance for blockchain @ cal poly"
        },
        {
          name: "synth.money",
          url: "https://github.com/CalPolyBlockchain/synth-node-hackathon",
          desription: "Simplified yield redelegation for Uniswap V3 non-fungible liquidity positions"
        },
        {
          name: "precycle",
          url: "soon",
          desription: "Precycle concept for incentivized recycling"
        },
      ],

    skills: [
        {"category:": "Languages", "items": [
        
            { "name": "JavaScript", "level": "Intermediate", "icon":(<FaJs/>)},
            { "name": "Python", "level": "expert", "icon":(<FaPython/>)},
            { "name": "Java", "level": "expert", "icon":(<FaJava/>)},
            { "name": "Solidity" },
            { "name": "TypeScript", "icon":(<SiTypescript/>) },
            { "name": "JavaScript" , "icon":(<FaJs/>)},
        ],
    },
    {"category:": "Frameworks", "items": [
            { "name": "React", "icon":(<DiReact/>)},
            { "name": "Node", "icon":(<DiNodejs/>)},
            { "name": "web3JS", "icon":(<FaJs/>)},
            { "name": "Django","icon":(<FaPython/>)},
            { "name": "Flask", "icon":(<SiFlask/>)}, 
            { "name": "mongo", "icon":(<DiMongodb/>)},
            { "name": "SQL" , "icon":(<DiMysql/>)},
        ],
        "color:": "blue"
    },
    {"category:": "Tools", "items": [
            { "name": "Git", "icon":(<DiGit/>)},
            { "name": "Vscode", "icon":(<FaPython/>)},
            { "name": "Figma" , "icon":(<FiFigma/>)}
        ],
        "color:": "yellow"
    }
    ]
    
}

export default resume;