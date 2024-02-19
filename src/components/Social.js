import React from 'react';
import './Social.css';

const Social = () => {
  return (
    <>
        <div className='social-media'>

        <div className='social'>
            <a href=""><i className="icofont-twitter"></i></a>
            <a href=""><i className="icofont-linkedin"></i></a>
            <a href=""><i className="icofont-instagram"></i></a>
            <a href="https://github.com/DeCanDid"><i className="icofont-github"></i></a>
          </div>

          <div className='copy-right'>
            <hr />
          <small>© 2024 CanDid</small>
          </div>

        </div>

    </>
  )
}

export default Social;