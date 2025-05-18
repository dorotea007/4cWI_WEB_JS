
export default function Card({ image, name, jobtitle }) {
  return (
    <div className="max-w-xs bg-white shadow-lg overflow-hidden rounded-lg">
      <div className="flex justify-center">
        <img src={image} alt={name} className="w-full h-80 object-cover shadow-md" />
      </div>
      <div className="p-4 text-start">
        <p className="text-lg font-bold text-gray-900">{name}</p>
        <p className="text-gray-600">{jobtitle}</p>
      </div>
    </div>
  );
}
