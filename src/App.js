import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Navbar from "./Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Navigate } from "react-router-dom";
import Resume from "./components/Resume";

const App = () => {
  return (
    <>
      {/* <Router> */}
        <div className="color">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<NotFound />} />
            {/* <Route path='*' element={<NotFound/> }/>  */}
            {/* <Route path='/' element={<Landing /> }/> */}
          </Routes>
          <Footer />
        </div>
      {/* </Router> */}
    </>
  );
};

export default App;
