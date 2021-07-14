import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
