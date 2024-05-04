import './App.css';
import './App2.css';
import './App3.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from "./components/Header"
import About from "./components/About"
import Contact from "./components/Contact";
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Header/>
      <About />
      <Contact />
      <Footer />
     
      </>
    
  );
}

export default App;
