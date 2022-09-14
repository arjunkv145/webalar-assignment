import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/webalar-assignment" element={<Home />} />
        <Route path="/webalar-assignment/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
