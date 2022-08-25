import './Footer.css';
import { BsFacebook,BsInstagram,BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className='ff row bg-dark p-2'>
    <div className='col-md  p-1 text-center'>
        <span className='py-0 text-secondary'>city Islamabad, Pakistan</span><br/>
        <span className='py-0 text-secondary'>+923225438277</span><br/>
        <span className='py-0 text-secondary'>noumanakbar17@gmail.com</span>
    </div>
    <div className='col-md p-1 d-flex justify-content-center  my-auto'>
    <div class="list-group">
  <Link to="/" className="list-group-item text-secondary list-group-item-action p-0 bg-dark">Home</Link>
  <Link to="/about" className="list-group-item text-secondary list-group-item-action p-0 bg-dark">About</Link>
</div>
<div class="list-group ms-5">
  <Link to="/contact" className="list-group-item text-secondary list-group-item-action p-0 bg-dark">Contact</Link>
  <Link to="portfolio" className="list-group-item text-secondary list-group-item-action p-0 bg-dark">Portfolio</Link>
</div>
    </div>
    <div className='col-md p-1 my-auto'>
    <ul className="list-unstyled icons my-auto  mx-auto justify-content-between px-3 py-2 d-flex " 
      style={{width:"7.5rem",cursor:'pointer' }} >
        <a href="https://www.facebook.com/nouman.akbar.37" target="_blank" rel="noopener noreferrer"> <li> <BsFacebook style={{color:"white"}} /> </li></a>
        <a href="https://www.instagram.com/nouman.akbar.37/" target="_blank" rel="noopener noreferrer"> <li><BsInstagram style={{color:"white"}} /> </li></a>
        <a href="https://www.linkedin.com/in/noumanakbar123/" target="_blank" rel="noopener noreferrer"><li><BsLinkedin style={{color:"white"}}  /></li></a>
      </ul>
      <p className='text-secondary text-center'>Copyright©2020 | All Rights Reserved</p>
    </div>
        </div>
  );
}

export default Footer;