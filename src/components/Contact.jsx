import './Contact.css';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';



const Contact = () =>{
  useEffect(()=>{
    AOS.init({
      duration: 600,
      delay: 500
    })
  });
  const myStyle = {
    color :{
      color: 'white', 
      backgroundColor:'rgb(10, 10, 80)',
      borderRadius: '5px',
      padding: '10px 15px',
      fontSize: '18px',
      textDecoration: 'none'
    },
    text:{
      textAlign: 'center', 
      height: '75vh',
      justifyContent: 'center', 
      padding:'50% 0'
    }
  }
  const [state, handleSubmit] = useForm("xkndbnko");

    if (state.succeeded) {

   return (

         <div data-aos='fade-out' className='response' style={myStyle.text}>
        <h3 style={{margin:'20px', color:'#fff'}}>Thanks for the message! <br />
        I will get back to you shortly...</h3>
        <Link to='/' style={myStyle.color}>
          Go Back To The Homepage <i className="icofont-external-link"></i></Link>

      </div>
    //   <div id='spinner' class="d-flex justify-content-center">
    //   <div class="spinner-border" role="status">
    //     <span class="visually-hidden">Loading...</span>
    //   </div>
    // </div>
   )
  
    


    // return (
      
    //   <div>
    //     <p style={{color: 'white'}}>Thanks for joining!</p>;
    //     <Link style={{color: 'white'}}>
    //       Go Back To The Homepage <i className="icofont-external-link"></i></Link>

    //   </div>
    // )
}
  




  return (
    <>
        <main>


            <section data-aos='fade-out' className='col-section'>
                <h1>Contact Me</h1>
                <p>Send me an email...</p>
                
          <form method='POST' class="row g-3 form" onSubmit={handleSubmit}>

        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Name</label>
          <input placeholder='Enter your Name' type="text" 
          class="form-control" id="name" name='name' required/>
           <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
      />
      </div>

      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Email</label>
        <input placeholder='Enter Your Email' type="email" 
        class="form-control" id="email" name='email' required/>
         <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
    </div>

    <div class="col-12">
        <label for="Message" class="form-label">Message</label>
        <textarea className='form-control textarea' name="message" required
        id="message" cols="25" rows="10" placeholder='Enter Your Message'></textarea>
         <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
    </div>

    <div class="col-12 btn">
        <button type="submit" class="btn border color-secondary w-50"
        disabled={state.submitting}>Shoot</button>
    </div>

</form>

    <div className='back-home'>
    <Link  style={myStyle.color} to='/'>
      Go Back Home <i className="icofont-external-link">
      </i></Link>
    </div>

</section>
        </main>
    </>
  )
}

export default Contact;