import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import Work from './pages/Work'

function App() {
  return (
    <Router>
      {/* Bootstrap flex-column layout */}
      <div className="d-flex flex-column min-vh-100 bg-dark text-light">
        <NavigationBar />
        {/* Main content area with flex-grow-1 to push footer down */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/work" element={<Work />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
