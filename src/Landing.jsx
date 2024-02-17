import React from 'react';
import './Landing.css'


const Landing = () => {
  return (
    <>
    <div className='banne'>
      <section>
        <div className='intro'>
          <div>
          <h2>Hello, <br />
          <span>I'm CanDid</span></h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>

          <div className='social'>
            <a href=""><i className="icofont-twitter"></i></a>
            <a href=""><i className="icofont-linkedin"></i></a>
            <a href=""><i className="icofont-instagram"></i></a>
            <a href=""><i className="icofont-github"></i></a>
          </div>

          <div className='copy-right'>
            <hr />
          <small>© 2024 CanDid</small>
          </div>
          </div>

          <div className="avartar">
            <img className='w-75 ' src="https://img.freepik.com/free-vector/future-work-concept-illustration_614304-14.jpg?size=626&ext=jpg&ga=GA1.1.1983813571.1708165069&semt=ais" alt="" />
          </div>
        </div>
        

            
      </section>
    </div>

    </>
  )
}

export default Landing;