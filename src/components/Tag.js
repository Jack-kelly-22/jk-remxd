function Tag(tag) {
  return (
    <span
    key={`tag-${tag.name}-${tag.i}`}
    className={`rounded-lg h-8  px-3 py-1 bg-${tag.color} outline outline-2 hover:outline-${tag.color} hover:bg-opacity-0`}
    >
      <p className="text-center text-sm text-white">{tag.name}</p>
    </span>
  );
}
export default Tag;