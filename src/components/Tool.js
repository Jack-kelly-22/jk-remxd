function Tool(tool) {
  return (
    <div
      key={tool.i}
      className=" w-20 aspect-square m-1 items-center justify-center rounded-full border border-4 border-white bg-clip-content bg-clip-text p-2 text-center"
    >
      <p className=" py-1 px-3 text-xs font-bold ">{tool.name} </p>
      <p className="pl-3 text-4xl text-white">{tool.icon}</p>
    </div>
  );
}

export default Tool;
