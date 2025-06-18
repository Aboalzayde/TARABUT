import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
// import AboutUs fro
function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<AboutUs />} />

        {/* Add more routes here as you build pages */}
      </Routes>
    </Router>
  
    </>
  )
}

export default App
