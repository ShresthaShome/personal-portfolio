export default function Button({ children, html }) {
  return (
    <button className="hover:border border-blue-300 rounded-lg px-1 py-1 w-20 hover:bg-blue-400 hover:cursor-pointer">
      {children}
    </button>
  );
}
