import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xo0sw39', 'template_qmh9ezq', form.current, 'MXYWNg_9oId5GO9M8')
      .then((result) => {
        alert("Your Message Sent Successfully :");
       console.log(result.text);
      }, (error) => {
          console.log(error.text);
        
      });
     
  }; 

 return(
  <div className="row ">
    <div className="col-md-5 mt-5 p-3 mx-auto bg-black ">
     <h1 className="text-light text-center">Hire Me</h1>
     <p className="text-light">I am available for work at any time connect with me via email : <span className="text-danger">noumanakbar17@gmail.com</span></p>
    
    <form onSubmit={sendEmail} ref={form}>
        <div className="mb-3 ">
        <input type="text" name="name" className="form-control text-white bg-black border-secondary  " placeholder="Enter Your Name" required/>
        <div className="invalid-feedback">
        Please choose a username.
      </div>
        </div>

        <div className="mb-3">
        <input type="email" name="subject" className="form-control text-white bg-black border-secondary " placeholder="Enter Your email" required/>
        </div>

        <div className="mb-3">
        <input type="text" name="sub" className="form-control text-white bg-black border-secondary" placeholder="Enter Your subject"/>
        </div>

        <div className="input-group">
        <textarea name="message" className="form-control text-white bg-black border-secondary" placeholder="Write Your Message" rows='4' required></textarea>
        </div>

        <button type="submit" className=" mt-3 w-100 btn btn-danger">Submit</button>
    </form>

    </div>

</div>
 );
 }
export default Contact;