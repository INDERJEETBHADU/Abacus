import './App.css';
import './App2.css';
import './App3.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from "./components/Header"
import About from "./components/About"
import Contact from "./components/Contact";
import Footer from './components/Footer';
import Services from './components/Services';
import Working from './components/Working';
import Testinomial from './components/Testinomial';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Working />
      <Testinomial />
      <Contact />
      <Footer />

    </>

  );
}

export default App;
