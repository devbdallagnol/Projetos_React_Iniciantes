import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const Home = () => {
  const Home = () => <div>Home</div>;
  const About = () => <div>About</div>;
  const Contact = () => <div>Contact</div>;

  return (
    <BrowserRouter>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>

    </BrowserRouter>
  )
};

export default Home;
