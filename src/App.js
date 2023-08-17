import './App.css';
import HomePage from './components/HomePage.js';
import VideoDetails from './components/VideoDetails.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thumbnail/:id" element={<VideoDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
