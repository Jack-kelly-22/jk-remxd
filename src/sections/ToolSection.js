import Tool from "../components/Tool";
function ToolSection(props) {
  return (
        <div className="justify-center bg-gradient-to-b from-blue to-pink bg-fixed bg-clip-text text-center text-transparent ">
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
  )}