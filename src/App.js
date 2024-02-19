// import logo from './logo.svg';
import Social from './components/Social';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Landing from './Landing';
import Navbar from './Navbar';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

const App = () =>{
  return(
    <>
    <div className='color'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Landing /> }/>
      <Route path='/project' element={<Project /> }/>
      <Route path='/about' element={<About /> }/>
      <Route path='/contact' element={<Contact /> }/>
      
      {/* <Landing /> */}
      {/* <About /> */}
      {/* <Social/> */}
      {/* <Project/> */}
      {/* <Contact /> */}
    </Routes>
    </div>

    </>
  )
}

export default App;
