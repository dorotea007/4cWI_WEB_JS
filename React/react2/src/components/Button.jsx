export default function Button({ element, count, setCount }) {
  return (
    <div
      onClick={() => setCount(count + 1)}
      className="bg-green-500 w-25 h-10 flex items-center justify-center hover:bg-green-700 text-white font-bold cursor-pointer"
    >
      <p>{element}</p>
    </div>
  );
}
