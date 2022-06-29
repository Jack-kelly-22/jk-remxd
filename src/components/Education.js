function Education(edu) {
  return (
    <div
      className="my-8 rounded-lg p-2 border border-2 border-white text-transparent"
      key={edu.i}
    >
      <p className="m-4 p-2 text-3xl ">
        {edu.name}
        <p className="text-sm text-white pl-5">{edu.date}</p>
        <p className="text-sm pt-4 ">{edu.description}</p>
      </p>
    </div>
  );
  }
export default Education
