// import logo from './logo.svg';
import './App.css';
import Landing from './Landing';
import Navbar from './Navbar';
import About from './components/About';

const App = () =>{
  return(
    <>
    <div className='color'>
      
      <Navbar />
      <Landing />
      {/* <About /> */}
    </div>
    </>
  )
}

export default App;
