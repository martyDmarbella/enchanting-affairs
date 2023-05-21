

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import HeroBanner from './components/HeroBanner';





function App() {
  return (
    <>
     <Navbar />
     <HeroBanner />
     <About />
     <Gallery />
     <Services />
     <Contact />
     <Footer />
    </>
  );
}

export default App;
