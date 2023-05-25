import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from './Components/Notes';
import Navbar from './Components/Navbar';
import Allnotes from './Components/Allnotes';
import About from './Components/About';
import Contact from './Components/Contact';
import Editnotes from './Components/Editnotes';
import { useSelector } from 'react-redux'
function App() {
  const notes = useSelector((state) => state.notes)
  const title = notes.title;
  const content = notes.content;
  return (
    <>
    <Navbar />,
    <Router>
      <Routes>
      <Route index path="/" element={<Notes />} />
        <Route path="/Home" element={<Allnotes />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Editnotes" element={<Editnotes notes={notes} title={title} content={content} />} />

      </Routes>
    </Router>




    </>
  );
}

export default App;
