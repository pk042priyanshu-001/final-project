import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import NotFound from './components/Notfound';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';


function App() {
  return (
    <>
     <Router>
      <Navbar/>
      <div className="container my-3">
      <Routes>
        <Route path="/" element={<Textform />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
