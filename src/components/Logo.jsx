import "../styles/Logo.css";

export default function Logo({ name }) {
  return (
    <div className="-mb-3">
      <a href="/">
        <span className="logo">{name}</span>
        <span className="text-red-600 text-4xl">{"."}</span>
      </a>
    </div>
  );
}
