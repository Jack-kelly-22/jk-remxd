import { Link } from "@remix-run/react";
import { resolvePtr } from "dns/promises";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useOptionalUser } from "~/utils";
import ReactTypingEffect from "react-typing-effect";
import resume from "resume";

export default function Index() {
  const user = useOptionalUser();
  return (
    <div className="bg-black">
      <div className="w-15 absolute top-0 left-0 m-1 mr-5 flex h-full flex-col justify-between p-2 pt-4 text-3xl">
        <div>
          <h1>Jk</h1>
          <p className="text-right text-pink">D</p>
          <p className="text-left text-yellow">E</p>
          <p className="text-right text-blue">V</p>
        </div>
        <div>
          <div className="mt-5 rounded-lg p-1 hover:bg-white hover:text-pink">
            <FaGithub />
          </div>
          <div className="mt-5 rounded-lg p-1 hover:bg-white hover:text-blue">
            <FaLinkedin />
          </div>
        </div>
        {/* link github profile  */}
      </div>

      <div className="container m-8 p-5 pl-10">
        <div className="m-5 p-4 text-white ">
          <p className="text-4xl"></p>
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
            cursorRenderer={(cursor) => <h1>{cursor}</h1>}
            displayTextRenderer={(text, i: int) => {
              return (
                <h1 className="text-4xl">
                  Hello my name is Jack i am a{" "}
                  <p className="text-blue">{text}</p>
                </h1>
              );
            }}
          />
        </div>
        {/* create  */}

        <div className="justify-center">
          <p className="text-3xl"> Github repos</p>
          {resume.gh_repos.map((repo, index) => {
            return (
              <div
                key={index}
                className="my-6  rounded-lg border border-4 border-white bg-gradient-to-br from-pink to-blue bg-clip-text p-3 py-4 text-2xl text-transparent "
              >
                <div className="m-3 px-3">
                  <p className="text-left text-2xl font-bold text-white">
                    {repo.name}
                  </p>
                  <p className="pl-10 text-left">{repo.desription}</p>
                  <div className="m-2 flex flex-auto justify-end p-1 text-white">
                    <div className="rounded-lg p-2 text-white hover:bg-pink">
                      <a href={repo.url}>
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-3">
                  {repo.tags?.map((tag, index) => {
                    return (
                      <div
                        key={index}
                        className={`rounded-xl px-2 py-1 text-sm text-white bg-${tag.color} `}
                      >
                        <p className="">{tag.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="justify-center text-center">
          <p className="text-3xl"> Tools</p>
          {resume.skills.map((category, index) => {
            return (
              <div className="m-2 p-2">
                <p className="m-4 text-3xl text-white">
                  {category["category:"]}
                </p>
                <div className="flex flex-row justify-center gap-3">
                  {category.items?.map((skill, index) => {
                    return (
                      <div
                        key={index}
                        className=" aspect-square w-24 rounded-full border border-4 border-white p-2 text-center "
                      >
                        <p className=" font-bold ">{skill.name}</p>
                        <p className="text-4xl text-white">{skill.icon}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
