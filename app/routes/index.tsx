import { Link } from "@remix-run/react";
import { resolvePtr } from "dns/promises";
import { MdComputer } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { useOptionalUser } from "~/utils";
import ReactTypingEffect from "react-typing-effect";
import resume from "resume";
// import './index.css';
function Tool(tool) {
  return (
    <div
      key={tool.i}
      className="aspect-square w-40 h-40 items-center justify-center rounded-full border border-4 border-white bg-clip-text bg-clip-content p-2 text-center"
    >
      <p className=" py-2 font-bold ">{tool.name} </p>
      <p className="pl-6 text-center text-7xl text-white">
        {tool.icon}
      </p>
    </div>
  );
}

function Tag(tag) {
  return (
    <div
      key={tag.i}
      className={`rounded-xl px-3 py-1 bg-${tag.color} outline outline-2 hover:outline-${tag.color} hover:bg-opacity-0 hover:text-${tag.color}`}
    >
      <p className="text-sm text-white text-center ml-2">{tag.name}</p>
    </div>
  );
}

function GhBox(gh) {
  return (
    <div
      key={gh.index}
      className="my-6 rounded-lg border border-4  bg-gradient-to-br from-pink to-blue bg-clip-text p-3 py-4 text-2xl text-transparent"
    >
      <div className="m-3 px-3">
        <p className="text-left text-2xl font-bold text-white">{gh.name}</p>
        <p className="pl-10 text-left">{gh.desription}</p>
        <div className="m-2 flex flex-auto justify-end p-1 text-white">
          <div className="rounded-lg p-2 text-white hover:bg-pink">
            <a href={gh.url}>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        {gh.tags?.map((tag, index) => {
          return <Tag {...tag} i={index} />;
        })}
      </div>
    </div>
  );
}

export default function Index() {
  const user = useOptionalUser();
  return (
    <div className="bg-black">
      <div className="fixed h-full w-12 px-1 text-3xl">
        <ul className="relative">
          <div>
            <h1 className="py-4 text-center pl-2">Jk</h1>
            <p className="text-right text-pink">D</p>
            <p className="text-right text-yellow">E</p>
            <p className="text-right text-blue">V</p>
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
              <a className="" href="#!"></a>
              <div className="mt-5 rounded-lg p-1 hover:bg-white hover:text-blue">
                <FaLinkedin />
              </div>
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
      <div className="w-15 absolute top-0 left-0 m-1 mr-5 flex h-full flex-col justify-between p-2 pt-4 text-3xl">
        <div></div>
        {/* link github profile  */}
      </div>

      <div className=" m-8 p-5 pl-10">
        <div className="m-5  p-4 text-white ">
          <p className="text-center text-4xl">
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
          </p>
        </div>
        {/* create  */}

        <div className="justify-center p-3 m-3">
          <p className="text-3xl"> Github repos</p>
          {resume.gh_repos.map((repo, index) => {
            return <GhBox i={index} {...repo} />;
          })}
        </div>
        <div className="justify-center bg-gradient-to-br from-blue to-pink bg-fixed bg-clip-text text-center  text-transparent ">
          <p className="text-3xl"> Tools</p>
          {resume.skills.map((category, index) => {
            return (
              <div className="m-2 p-2" key={index}>
                <p className="m-4 text-3xl text-transparent">
                  {category["category:"]}
                </p>
                <div className="flex flex-auto justify-center gap-3">
                  {category.items?.map((skill, index) => {
                    return <Tool {...skill} i={index} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <p className="text-center text-3xl">Education</p>
          {resume.education.map((edu, index) => {
            return (
              <div
                className="my-4 rounded-lg p-2 outline outline-2 outline-white"
                key={index}
              >
                <p className="m-4 text-3xl text-white p-2">
                  {edu.name}
                  <p className="text-sm opacity-50">{edu.date}</p>
                  <p className="text-sm">{edu.description}</p>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
