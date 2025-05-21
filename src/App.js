import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
export default function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Project />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}
