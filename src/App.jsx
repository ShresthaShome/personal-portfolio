import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import "./styles/App.css";

function App() {
  const myInfo = {
    name: "Ullas Shome",
    address: "Tangail, Bangladesh",
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

  const contacts = {
    phone: "+8801518946109",
    email: "shrestha.shome@gmail.com",
    github: "https://github.com/ShresthaShome",
    linkedin: "https://www.linkedin.com/in/shrestha-shome/",
  };

  return (
    <>
      <NavBar name={myInfo.name} />

      <Hero {...myInfo} contacts={contacts} />

      <About info={myInfo} />
      <Works projects={projects} />
      <Contact contacts={contacts} />

      <footer className="mt-3 pb-1 px-2 text-[14px]">
        Made with ❤️ by{" "}
        <a href={contacts.github}>
          <u>{myInfo.name}</u>
        </a>
      </footer>
    </>
  );
}

export default App;
