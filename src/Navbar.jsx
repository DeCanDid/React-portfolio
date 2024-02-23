import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <>

<header className=''>
<nav class="navbar navbar-dark shadow px-5 py-3">
  <div class="container-fluid">
    <Link style={{fontWeight:'bold', fontSize:'25px'}} to='/' 
    class="navbar-brand" href="#">CanDid.</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <Link to='/' style={{fontWeight:'bold', fontSize:'25px', color:'white'}} 
        class="offcanvas-title" id="offcanvasDarkNavbarLabel">CanDid.
        </Link>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <Link to='/' class="nav-link active" aria-current="page" href="#">Home</Link>
          </li>
          <li class="nav-item">
            <Link to='about' class="nav-link" href="#">About</Link>
          </li>
          <li class="nav-item">
            <Link to='project' class="nav-link" href="#">Project</Link>
          </li>
          <li class="nav-item">
            <Link to='contact' class="nav-link" href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</header>

    </>
  )
}

export default Navbar;