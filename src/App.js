import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MySkills from "./components/MySkills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Link, animateScroll as scroll } from "react-scroll";
import './App.css'


function App() {
  const[darkMode,setDarkMode]=useState(false)
  const scrollTo = (elementId) => {
    scroll.scrollTo(elementId, {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };
  return (
   <div className="app">
     <div className= {darkMode && 'dark'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} scrollTo={scrollTo} />
      <main className="bg-white dark:bg-gray-900 text-gray-900  dark:text-white">
        <Hero/>
        <MySkills/>
        <Portfolio/>
        <Contact/>
        <Footer/>

      </main>

    </div>
   </div>
   
  );
}

export default App;
