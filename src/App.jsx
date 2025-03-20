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

  const projects = [
    {
      title: "Project 1",
      image: "src/assets/images/P1.jpg",
      link: "",
    },
    {
      title: "Project 2",
      image: "src/assets/images/P2.jpg",
      link: "",
    },
    {
      title: "Project 3",
      image: "src/assets/images/P3.jpg",
      link: "",
    },
    {
      title: "Project 4",
      image: "src/assets/images/P4.jpg",
      link: "",
    },
  ];

  return (
    <>
      <NavBar name={myInfo.name} />
      <Hero name={myInfo.name} address={myInfo.address} />
      <About />
      <Works projects={projects} />
      <Contact />
    </>
  );
}

export default App;
