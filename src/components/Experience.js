  function Experience(exp) {
    return (
      <div
        className="my-8 rounded-lg p-2 outline outline-2 outline-white bg-transparent"
        key={`exp-${exp.i}`}
      >
        <p className="m-3 p-2 text-3xl text-transparent">{exp.name}</p>
        <div className=" w-32 h-8 rounded-sm justify-center h-5 bg-opacity-40 bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <p className="text-center text-sm px-3 bg-clip-text opacity-50 rounded-sm ">{exp.date}</p>
          </div>
          {exp.bullets?.map((desc, index) => {
            return (
              <p className="text-sm pt-4 pl-3  " key={index}>
                {desc}
              </p>
            )
          })}
          {/* <p className="text-sm pt-4 ">{exp.description}</p> */}
      </div>
    );
}

export default Experience;
