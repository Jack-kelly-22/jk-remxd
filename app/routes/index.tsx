import { Link } from "@remix-run/react";
import { resolvePtr } from "dns/promises";
import { FaGithub, FaLinkedin,  } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { useOptionalUser } from "~/utils";
import ReactTypingEffect from "react-typing-effect";
import resume from "resume";


function Tool(tool) {
  return (
    <div
      key={tool.i}
      className=" aspect-square w-28 rounded-full border border-4 border-white p-2 text-center items-center justify-center"
    >
      <p className=" py-2 font-bold ">{tool.name}</p>
      <p className="text-4xl pl-3 text-center text-white bg-inherit">{tool.icon}</p>
    </div>);

}

function Tag(tag) {
  return (
    <div className={`px-3 py-3 rounded-xl bg-${tag.color}  outline outline-2 hover:outline-${tag.color} hover:bg-opacity-0 hover:text-${tag.color}`}>
      <p className="text-white text-sm">{tag.name}</p>
    </div>)
}

function GhBox(gh) {
  return (
    <div
      key={gh.index}
      className="my-6 rounded-lg border border-4  bg-gradient-to-br from-pink to-blue bg-clip-text p-3 py-4 text-2xl text-transparent"
    >
      <div className="m-3 px-3">
        <p className="text-left text-2xl font-bold text-white">
          {gh.name}
        </p>
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
          return (
            <Tag {...tag} i={index} />
          );
        })}
      </div>
    </div>
  );
}


export default function Index() {
  const user = useOptionalUser();
  return (
    <div className="bg-black">
      <div className="w-15 absolute top-0 left-0 m-1 mr-5 flex h-full flex-col justify-between p-2 pt-4 text-3xl">
        <div>
          <h1 className="py-4">Jk</h1>
          <p className="text-right text-pink">D</p>
          <p className="text-right text-yellow">E</p>
          <p className="text-right text-blue">V</p>
        </div>
        <div>
          <div className="mt-5 rounded-lg p-1 hover:bg-white hover:text-pink">
            <FaGithub />
          </div>
          <div className="mt-5 rounded-lg p-1 hover:bg-white hover:text-blue">
            <FaLinkedin />
          </div>
          <div className="mt-5 rounded-lg p-1 hover:bg-yellow">
            <SiNotion />
          </div>
        </div>
        {/* link github profile  */}
      </div>


      <div className=" m-8 p-5 pl-10">
        <div className="m-5  p-4 text-white ">
          <p className="text-4xl text-center">
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
                  <p className="text-4xl inline-flex m-2 p-1">
                    Hello my name is Jack i am a {" "}
                    <p className="text-blue pl-1">{text}</p>
                  </p>
                );
              }}
            />
          </p>
        </div>
        {/* create  */}

        <div className="justify-center">
          <p className="text-3xl"> Github repos</p>
          {resume.gh_repos.map((repo, index) => {
            return (
              <GhBox i={index} {...repo} />
            )
          })}
        </div>
        <div className="justify-center text-center bg-gradient-to-br from-blue to-pink bg-fixed bg-clip-text  text-transparent bg-clip-border">
          <p className="text-3xl"> Tools</p>
          {resume.skills.map((category, index) => {
            return (
              <div className="m-2 p-2" key={index}>
                <p className="m-4 text-3xl text-transparent">
                  {category["category:"]}
                </p>
                <div className="flex flex-row justify-center gap-3">
                  {category.items?.map((skill, index) => {
                    return (
                      <Tool {...skill} i={index} />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <p className="text-3xl text-center">Education</p>
          {resume.education.map((edu, index) => {
            return (
              <div className="m-2 p-2 outline outline-white outline-2" key={index}>
                <p className="m-4 text-3xl text-white">
                  {edu.name}
                </p>
                <p className="opacity-50">{edu.date}</p>
                <p className="">{edu.description}</p>
                
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}
