import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventsPage from './EventsPage';
import SandboxDetail from './SandboxDetail';
import GlitchcraftDetail from './GlitchcraftDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/sandbox" element={<SandboxDetail />} />
        <Route path="/glitchcraft" element={<GlitchcraftDetail />} />
      </Routes>
    </Router>
  );
}

export default App;