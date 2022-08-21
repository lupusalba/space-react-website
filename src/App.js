import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './responsive.css'
import Home from './Pages/Home'
import Destinations from './Pages/Destinations'
import Crew from './Pages/Crew'
import Technology from './Pages/Technology'
import Error from './Pages/Error'

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
