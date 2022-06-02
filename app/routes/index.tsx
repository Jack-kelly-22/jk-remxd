import { Link } from "@remix-run/react";
import { resolvePtr } from "dns/promises";
import { MdComputer } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillBook } from "react-icons/ai";
import { SiNotion } from "react-icons/si";
import ReactTypingEffect from "react-typing-effect";
import resume from "resume";
// import './index.css';
function Tool(tool) {
  return (
    <div
      key={tool.i}
      className="h-30 aspect-square items-center justify-center rounded-full border border-4 border-white bg-clip-content bg-clip-text p-2 text-center"
    >
      <p className=" py-1 px-3 text-xs font-bold ">{tool.name} </p>
      <p className="pl-3 text-4xl text-white">{tool.icon}</p>
    </div>
  );
}

function Tag(tag) {
  return (
    <div
      key={`tag-${tag.name}-${tag.i}`}
      className={`rounded-xl px-3 py-1 bg-${tag.color} outline outline-2 hover:outline-${tag.color} hover:bg-opacity-0 hover:text-${tag.color}`}
    >
      <p className="ml-2 text-center text-sm text-white">{tag.name}</p>
    </div>
  );
}

function GhBox(gh) {
  return (
    <div
      key={`gh-repo-${gh.name}`}
      className="my-6 rounded-lg outline outline-3 outline-white bg-gradient-to-br from-mint to-magenta bg-clip-text p-3 py-4 text-2xl text-transparent "
    >
      <div className="m-3 p-3">
        <p className="text-left text-2xl font-bold text-white">{gh.name}</p>
        <p className="pl-10 text-left">{gh.desription}</p>
        <div className="m-2 flex flex-auto justify-end p-1 gap gap-2">
        {gh.tags?.map((tag, index) => {
          return <Tag {...tag} i={index} />;
        })}
          <div className="rounded-lg p-2 text-white hover:bg-pink">
            <a href={gh.url}>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        
      </div>
    </div>
  );
}



export default function Index() {
  return (
    <div className="bg-black">
      <div className="fixed h-full w-12 px-1 text-3xl">
        <ul className="relative">
          <div className="text-right">
            <h1 className="py-4 pl-2 text-center">Jk</h1>
            <p className="text-pink">D</p>
            <p className="text-yellow">E</p>
            <p className="text-blue">V</p>
          </div>
          <div>
            <li className="relative">
              <a className="" href="#!">
                <div className="mt-5 rounded-lg p-1 hover:bg-white hover:text-pink">
                  <FaGithub />
                </div>
              </a>
            </li>
            <li className="relative">
              <a className="" href={resume.notion_home}>
                <div className="hover mt-5 justify-center rounded-lg p-1 hover:bg-yellow hover:text-black">
                  <SiNotion />
                </div>
              </a>
            </li>
            <li className="relative">
              <a className="" href={resume.linkedin}>
                <div className="mt-5 rounded-lg p-1 hover:bg-white hover:text-blue">
                  <FaLinkedin />
                </div>
              </a>
            </li>
            <li className="relative">
              <a className="" href={resume.notion_portfolio}>
                <div className="hover mt-5 rounded-lg p-1 hover:bg-white hover:text-cyan ">
                  <AiFillBook />
                </div>
              </a>
            </li>
            <li className="relative">
              <a className="" href="/IRL">
                <div className="hover mt-5  rounded-lg p-1 hover:bg-pink ">
                  <MdComputer />
                </div>
              </a>
            </li>
          </div>
        </ul>
      </div>

      <div className=" m-8 p-5 pl-10">
        <div className="m-5 text-center text-4xl p-4 text-white ">
            <ReactTypingEffect
              text={[
                "Software dev",
                "integration specialist",
                "defi enthusiast",
                "full stack developer",
                "UI/UX designer",
              ]}
              eraseSpeed={100}
              eraseDelay={1000}
              typingDelay={100}
              speed={200}
              // cursorRenderer={(cursor) => <h1>{cursor}</h1>}
              displayTextRenderer={(text, i: int) => {
                return (
                  <p className="m-2 inline-flex p-1 text-4xl">
                    Hello my name is Jack i am a{" "}
                    <p className="pl-1 text-blue">{text}</p>
                  </p>
                );
              }}
            />
        </div>
        {/* create  */}

        <div className="m-3 justify-center p-3">
          <p className="text-3xl"> Github repos</p>
          {resume.gh_repos.map((repo, index) => {
            return <GhBox i={index} {...repo} />;
          })}
        </div>
        <div className="justify-center bg-gradient-to-b from-blue to-pink bg-fixed bg-clip-text text-center  text-transparent ">
          <p className="text-5xl"> Tools</p>
          {resume.skills.map((category, index) => {
            return (
              <div className="m-2 p-2" key={index}>
                <p className="m-4 text-3xl text-transparent">
                  {category["category:"]}
                </p>
                <div className="flex flex-row justify-center gap-3 text-center">
                  {category.items?.map((skill, index) => {
                    return <Tool {...skill} i={index} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-gradient-to-tr bg-fixed my-10 bg-clip-text from-magenta to-mint">
          <p className="text-center text-3xl">Education</p>
          {resume.education.map((edu, index) => {
            return (
              <Education {...edu} i={index} />
            );
          })}
        </div>
        <div className="bg-gradient-to-tr from-yellow to-teal  bg-fixed my-10 bg-clip-text text-left">
        <p className="my-10 bg-clip-text text-center text-3xl">Experience</p>
          {resume.experience.map((exp, index) => {
            return (
              <Experience {...exp} i={index} />
            );
          })}
          </div>
      </div>
    </div>
  );
}

function Education(edu) {
  return (
    <div
      className="my-8 rounded-lg p-2 border border-2 border-white text-transparent"
      key={edu.i}
    >
      <p className="m-4 p-2 text-3xl ">
        {edu.name}
        <p className="text-sm text-white pl-5">{edu.date}</p>
        <p className="text-sm pt-4 ">{edu.description}</p>
      </p>
    </div>
  );
  }
  
  function Experience(exp) {
    return (
      <div
        className="my-8 rounded-lg p-2 outline outline-2 outline-white text-transparent"
        key={`exp-${exp.i}`}
      >
        <p className="m-3 p-2 text-3xl">{exp.name}</p>
          <p className="text-sm text-white  pl-5 opacity-50">{exp.date}</p>
          {exp.bullets?.map((desc, index) => {
            return (
              <p className="text-sm pt-4 pl-3 text-white " key={index}>
                {desc}
              </p>
            )
          })}
          {/* <p className="text-sm pt-4 ">{exp.description}</p> */}
      </div>
    );
}