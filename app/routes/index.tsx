import { Link } from "@remix-run/react";
import { resolvePtr } from "dns/promises";

import { useOptionalUser } from "~/utils";









const gh_repos = [
  {
    name: "SEAM",
    url:"https://github.com/Jack-kelly-22/seam",
  },
  {
    name: "mustangDAO",
    url:"tbd",  
  },
  {
    name: "synth.money",
    url:"https://github.com/CalPolyBlockchain/synth-node-hackathon"
  },
  {
    name: "precycle",
    url:"soon",
  },

]


export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen text-white bg-black">
      <div className="text-3xl m-2 p-2">
        <h1>Jk</h1>
        <p className="text-yellow">R</p>
        <p className="text-blue">E</p>
        <p className="text-pink">M</p>
        <p className="text-yellow">X</p>
        <p className="text-blue">D</p>
      </div>
      <div className="absolute top-0 right-0 m-2 p-2 text-white">
        {/* create  */}
        <p className="text-3xl"> Github repos</p>
        {gh_repos.map((repo, index) => { return (
          <div  key={index} className="bg-gradient-to-b from-pink to-yellow rounded-lg m-4 p-3 text-white text-2xl">
            <p className="text-left">{repo.name}</p>
            <button className="w-5 h-5 rounded-full bg-pink">+</button>
            <a></a>
            </div>
        )})}

        </div>
    </main>
  );
}
