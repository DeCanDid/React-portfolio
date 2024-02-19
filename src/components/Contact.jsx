import './Contact.css'
const Contact = () => {
  return (
    <>
        <main>
            <section className='col-section'>
                <h1>Contact Me</h1>
                <p>Send me an email</p>

                <form action="">

                    <div className="inputs">
                    <div className='inp'>
                        <input placeholder='Name' type="text" required/>
                    </div>

                    <div className='inp'>
                        <input placeholder='Enter Your Email' type="email" required/>
                    </div>
                    </div>

                    <div className='text-Area'>
                        <textarea placeholder='Enter Your Message' name="message"
                         id="" cols="50" rows="5" required></textarea>
                    </div>

                    <div className='submit-button'>
                        <button type='submit'>Shoot <i className="icofont-long-arrow-right"></i></button>
                    </div>
                </form>

    <div className='socials'>

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
                
                
                {/* <form class="row g-3 w-75">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input placeholder='Enter your Name' type="text" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input placeholder='Enter Your Email' type="email" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputMessage" class="form-label">Message</label>
    <textarea className='form-control' name="" id="" cols="25" rows="10" placeholder='Enter Your Message'></textarea>
  </div>
  <div class="col-12 btn">
    <button type="submit" class="btn btn-primary w-25">Shoot</button>
  </div>
</form> */}
            </section>
        </main>
    </>
  )
}

export default Contact;