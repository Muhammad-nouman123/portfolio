import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import id1 from '../../assets/todolist.png';
import id2 from '../../assets/foodOrderApp.png';
import './external.css';

const projects = [
{
  id:1,
 name:'Todo List',
 technologies:'html,css,javascript,bootstrap,react,useState,useEffect,reacticons',
 image:id1,
 link:"https://www.behance.net/gallery/150200719/Todo-List-Using-React-js/modules/848170037",
 git:"https://github.com/Muhammad-nouman123/dummy.git"
},
{
  id:2,
  name:'Food Order app',
  technologies:'html,css,javascript,react,useState,useEffect,useContext,useReducer,bootstrap,reacticons,',
  image:id2,
  link:"https://www.behance.net/gallery/150991023/Food-order-site/modules/852537595",
  git:"https://github.com/Muhammad-nouman123/myfirst.git"
 }
];
const Portfolio = () => {
  const renderSlides = () =>
  projects.map(num => (
    <div className="row p-0 m-0  d-flex bg-dark">
      <div className="m-0 a  col-lg-5 p-0 bg-white order-2 order-lg-1" 
     >

      <div className=" w-75 mx-auto text-break">
      <h6 className=" fw-bold p-1"></h6>
      <h6 className=" fw-bold p-1">{num.name}</h6>
      <p className=" w-100  p-1">
        <span className="fst-italic text-secondary">Technologies:</span> <br/>
      <span>{num.technologies}</span>
      </p>
      <div>
      <a href={num.link} target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-link text-dark">Project</button></a>
      <a href={num.git} ><button type="button" className="btn btn-link text-dark"> GithUp </button></a>
      </div>
      </div>

      </div>
      <div className="p-0 b col-lg-7  order-1 order-lg-2">
       <img   className='mmm'  src={num.image} alt="logo" width="100%" height="290vh"  />
       </div>
       </div>
  ));
  return (
    <>
    <h1 className="p-2 mt-4  text-center text-primary">Portfolio</h1>
   <div className="row w-50 p-1 mx-auto mt-5 d-flex">
   
      
 
    <div className="col p-0 m-0">
    <Slider
        dots={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
      >
        {renderSlides()}
      </Slider>
      </div>
     
   </div>
   </>
);
}

export default Portfolio;