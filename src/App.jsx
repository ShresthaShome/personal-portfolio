import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import "./styles/App.css";

function App() {
  const myInfo = {
    name: "Ullas Shome",
    address: "Thanapara, Tangail",
  };

  return (
    <>
      <NavBar name={myInfo.name} />
      <Hero name={myInfo.name} address={myInfo.address} />
      <About />
      <Works />
      <Contact />
    </>
  );
}

export default App;
