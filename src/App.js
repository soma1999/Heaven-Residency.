import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Contact from './pages/contact/Contact';
import Home from './pages/Home';
import Nopage from './pages/Nopage';
import Hero from './components/Hero/Hero';
import {motion} from 'framer-motion'
import CounterUpPage from './CounterUpPage';
import Schedule from './pages/schedule/Schedule';
import About from './pages/aboutasmaa/About';
import Location from './pages/Location/Location';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App">
    </div>
    <Footer/>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/About" element={<About />} />
          <Route path="/Location" element={<Location />}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
