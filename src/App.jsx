import React from 'react';
import About from './components/about/About';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Footer from "./components/footer/Footer";
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
