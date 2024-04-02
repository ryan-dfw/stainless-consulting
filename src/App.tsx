import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar.tsx";
import Homepage from "./components/Homepage.tsx";

function App() {

  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Homepage />} />
        </Routes>
    </Router>
  )
}

export default App
