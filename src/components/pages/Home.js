import img from '../../assets/hhh.webp';
import { Link } from "react-router-dom";
import './external.css';

const Home = () => {


    return (
      <>
      <div className='row h-100'>
        <div className='home1 col-md d-flex flex-column align-content-center justify-content-center flex-wrap'>
           <p className='text-light ' >Welcome to my world</p>
           <h1 className='text-light' >
            <span>Hi, I am Nouman Akbar</span><br/>
            <span className='text-danger'>React js Developer</span><br/>
            <span>based in Pakistan</span>
           </h1>
       
        <Link to='about' className='d-flex text-decoration-none'>
           <button type="button" className='btn btn-outline-secondary mx-auto  mt-3 '>
           About Me
           </button>
           </Link>
       

        </div>
        <div className='home2 col-md d-flex justify-content-end'>
       <img src={img} alt='logo'className='ima'/>
        </div>
       </div>
      </>
    );
  }
  


export default Home;