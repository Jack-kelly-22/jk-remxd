import { FaGithub } from "react-icons/fa";
import Tag from "./Tag";

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
          <div className="rounded-lg p-2 text-white bg-pink hover:bg-transparent  outline outline-2 outline-pink hover:outline-pink">
            <a href={gh.url}>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GhBox;
