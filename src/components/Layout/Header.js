import { BsFacebook,BsInstagram,BsLinkedin } from "react-icons/bs";
import './Header.css';
import { FcNfcSign } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (

    <nav className ="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className ="container-fluid">
      <a className ="navbar-brand ms-4" href="#"><FcNfcSign size={35} /></a>
      <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className ="navbar-toggler-icon"></span>
      </button>
      <div className ="collapse navbar-collapse ms-4" id="navbarSupportedContent">
        <ul className ="navbar-nav me-auto mb-2 mb-lg-0 bg-dark">
          <li className ="nav-item">
            <NavLink className={(navData)=> navData.isActive ? 'nav-link active' : "nav-link"} to='/'>Home</NavLink>
          </li>
          <li className ="nav-item ">
          <NavLink className={(navData)=> navData.isActive ? 'nav-link active' : "nav-link"} to='/about'>About</NavLink>
          </li>
          <li className ="nav-item">
            <a className ="nav-link disabled" aria-current="page" href="#">Service</a>
          </li>
          <li className ="nav-item">
          <NavLink className={(navData)=> navData.isActive ? 'nav-link active' : "nav-link"} to='/portfolio'>Portfolio</NavLink>
          </li>
          <li className ="nav-item">
          <NavLink className={(navData)=> navData.isActive ? 'nav-link active' : "nav-link"} to='/contact'>Contact</NavLink>
          </li>
         
        </ul>

      <ul className="list-unstyled icons my-auto me-5 justify-content-between px-3 py-2 d-flex " 
      style={{width:"7.5rem",cursor:'pointer' }} >
         <a href="https://www.facebook.com/nouman.akbar.37" target="_blank" rel="noopener noreferrer"><li> <BsFacebook style={{color:"white"}} /> </li></a>
         <a href="https://www.instagram.com/nouman.akbar.37/" target="_blank" rel="noopener noreferrer"><li><BsInstagram style={{color:"white"}} /> </li></a>
         <a href="https://www.linkedin.com/in/noumanakbar123/" target="_blank" rel="noopener noreferrer"><li><BsLinkedin style={{color:"white"}}  /></li></a>
      </ul>
        </div>
        
    </div>
  </nav>
  
  )
}

export default Header;