import Logo from "./Logo";
import "../styles/NavBar.css";
import Button from "./Button";

export default function NavBar({ name }) {
  return (
    <div className="flex flex-row items-center justify-between px-5 py-2 NavBar">
      <Logo name={name} />
      <nav className="hidden sm:flex flex-row gap-3">
        <Button href="">About</Button>
        <Button href="">Works</Button>
        <Button href="">Connect</Button>
      </nav>
    </div>
  );
}
