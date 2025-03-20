export default function Button({ children, html }) {
  const handleClick = () => {
    console.log("html", html);
    if (html[0] === "#") {
      const element = document.getElementById(html.slice(1));
      console.log("element", element);
      element.scrollIntoView({ behavior: "smooth" });
    } else window.location.href = html;
  };

  return (
    <button
      onClick={handleClick}
      className="border border-transparent hover:border-blue-300 rounded-lg px-1 py-1 min-w-20 max-w-30 hover:bg-blue-400 hover:cursor-pointer"
    >
      {children}
    </button>
  );
}
