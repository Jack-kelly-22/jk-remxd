import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillBook } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { SiNotion } from "react-icons/si";
import {resume} from "./../resume.tsx";


function Sidebar() {
  return (

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
    </div>)
}

export default Sidebar;