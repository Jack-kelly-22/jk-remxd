import {resume} from "./../resume.tsx";
import GhBox from "./../components/GhBox";
import Experience from "../components/Experience";
import NotionPort from "../components/NotionPort";
import HeroSection from "../HeroSection";

export default function Home(){
    return (
        <div className="min-h-screen px-6 mx-10">
        <HeroSection/>
        <NotionPort />


        <div className="m-3 justify-center">
          <p className="text-3xl"> Github repos</p>
          {resume.gh_repos.map((repo, index) => {
            return <GhBox i={index} {...repo} />;
          })}
        </div>

        <div className="bg-gradient-to-tr from-yellow to-teal  bg-fixed my-10 bg-clip-text text-left">
        <p className="my-10  text-center text-3xl">Experience</p>
          {resume.experience.map((exp, index) => {
            return (
              <Experience {...exp} i={index} />
            );
          })}
          </div>
        </div>
    );
}