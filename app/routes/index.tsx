import { Link } from "@remix-run/react";
import { resolvePtr } from "dns/promises";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useOptionalUser } from "~/utils";
import ReactTypingEffect from "react-typing-effect";
import resume from "resume";
const gh_repos = [
  {
    name: "SEAM",
    url: "https://github.com/Jack-kelly-22/seam",
    desription : "Defi yield aggregator (YETF) for celo"
  },
  {
    name: "mustangDAO",
    url: "tbd",
    desription : "Decentralized governance for blockchain @ cal poly"
  },
  {
    name: "synth.money",
    url: "https://github.com/CalPolyBlockchain/synth-node-hackathon",
    desription : "Simplified yield redelegation for Uniswap V3 non-fungible liquidity positions"
  },
  {
    name: "precycle",
    url: "soon",
    desription : "Precycle concept for incentivized recycling"
  },
];

export default function Index() {
  const user = useOptionalUser();
  return (
    <div>
      <div className="w-15 h-full mr-5 p-2 flex-col flex absolute top-0 left-0 m-1 text-3xl pt-4 justify-between">
        <div>
          <h1>Jk</h1>

          <p className="text-pink text-right">D</p>
          <p className="text-yellow text-left">E</p>
          <p className="text-blue text-right">V</p>
          </div>
          <div>
          <div  className="hover:text-pink rounded-lg p-1 mt-5 hover:bg-white">
            <FaGithub />
          </div>
          <div className="hover:text-blue hover:bg-white rounded-lg p-1 mt-5">
          <FaLinkedin/>
          </div>
          </div>
          {/* link github profile  */}
      </div>
    
    <div className="container p-5 pl-10 m-8">
      <div className="text-white m-5 p-4 ">
        <p className="text-4xl"></p>
        <ReactTypingEffect
          text={["", "World!!!"]}
          eraseSpeed={100}
          eraseDelay={1000}
          typingDelay={100}
          speed={200}
          cursorRenderer={(cursor) => <h1>{cursor}</h1>}
          displayTextRenderer={(text, i: int) => {
            return <h1 className="text-4xl">Hello my name is Jack i am a {text}</h1>;
          }}
        />
      </div>
        {/* create  */}
        
      <div className="justify-center">
        <p className="text-3xl"> Github repos</p>
        {gh_repos.map((repo, index) => {
              return (
                <div
                  key={index}
                  className="m-2 rounded-lg border border-4 border-white bg-gradient-to-br from-pink to-blue bg-clip-text p-2 text-2xl text-transparent "
                >
                  <div className="p-1">
                    <p className="text-2xl text-left font-bold text-white">{repo.name}</p>
                      <p className="text-left pl-10">{repo.desription}</p>
                      <div className="flex flex-auto justify-end p-1 m-2 text-white">
                        <div className="p-2 rounded-lg text-white hover:bg-pink">
                      <FaGithub/>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>

      </div>
      </div>
  );
}
