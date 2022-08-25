import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/Layout/Header';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import {Routes,Route} from "react-router-dom";
import NotFound from './components/pages/NotFound';


function App() {
  return (
    <>
    <Header />
    <main className='container-fluid main'>
      <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/about" element={<About />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/portfolio" element={<Portfolio />} />
   <Route path='*' element={<NotFound/>} />
   </Routes>
   </main>
   <Footer />
    </>
  );
}

export default App;
