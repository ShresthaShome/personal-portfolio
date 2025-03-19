import Hero from "./components/Hero";
import Links from "./components/Links";
import NavBar from "./components/NavBar";
import "./styles/App.css";

function App() {
  const myInfo = {
    name: "Ullas Shome",
  };

  return (
    <>
      <NavBar name={myInfo.name} />
      <Hero />
      <Links />
    </>
  );
}

export default App;
