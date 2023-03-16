import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from "./component/Navbar";
import Home from './component/Home';
import Education from "./component/Education";
import Hobbies from "./component/Hobbies";
import Skills from "./component/Skills";
import Resume from './component/Resume';
import Portfolio from './component/Portfolio'
import Contactme from './component/Contactme';


function App() {
  return (
    <div className='App'>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="education" element={<Education />} />
    <Route path="skills" element={<Skills />} />
    <Route path="hobbies" element={<Hobbies />} />
    <Route path="resume" element={<Resume />} />
    <Route path="portfolio" element={<Portfolio />} />
    <Route path="contact" element={<Contactme />} />
    </Routes> 
    </div>
  );
}

export default App;
