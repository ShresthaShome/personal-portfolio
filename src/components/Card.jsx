export default function Cards({ title, link, image }) {
  return (
    <div className="flex flex-col justify-center items-center border-2 border-transparent hover:border-yellow-400">
      <a href={link}>
        <img className="max-w-100% max-h-80" src={image} alt={title} />
        <h1 className="text-center">{title}</h1>
      </a>
    </div>
  );
}
