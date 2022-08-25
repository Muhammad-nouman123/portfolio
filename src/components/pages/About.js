import img from '../../assets/hh.webp';
import { Link } from "react-router-dom";
import { BsArrowRight} from "react-icons/bs";
import { AiOutlineBehanceSquare } from "react-icons/ai";
import './external.css'

const About = () => {

return (
   <>

   
   <div className='row h-100 ms-3  overflow-hidden'>

<div className='col-lg-7 pb-1  d-flex flex-column align-content-center justify-content-center flex-wrap'>

         
        
           <h1 className='text-light p-1 pt-sm-5 mb-3 mt-sm-5'>About Me</h1>

           <div className=' w-75 me-5  text-break '>
            <h6 className='py-0 text-light'>Front End Developer</h6>
            <p className='text-secondary aaaa py-0 '>I am a professional software engineer also completed my master degree in computer
            science with the specialization in machine learning </p>
            <p className='pt-0 text-secondary '>Professional Front end Developer (React js) .Excellent in front end technologies Like
              html,css,bootstrap,javascript,Es6,react,redux toolkit.Develop many apps using react js eager to learn new technologies
              and enhance my skills. </p>
           </div>
           <div className=' flex-column flex-lg-row mt-sm-4  mx-auto p-2 d-flex align-items-center justify-content-around w-50'>

           <a className=' text-decoration-none w-100 ' href='alrnoman.pdf' download>
           <button type="button" className='w-100 btn btn-outline-secondary  mx-auto  mt-3 '>
           Download CV
           </button>
           </a>
           <Link to='/contact' className='w-100  text-decoration-none'>
           <button type="button" className='w-100 btn btn-outline-secondary mx-auto  mt-3 '>
           Hire Me
           </button>
           </Link>

           </div>
        </div>
        <div className=' col-lg-5   d-flex align-items-center justify-content-center '> 
        
       <img src={img} alt='logo' className='d-sm-block d-none'  />
        </div>
       </div>
   </>
  )
}

export default About;