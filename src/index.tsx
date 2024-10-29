import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import App from './App';
import ThrottlePage from './components/ThrottlePage';
import DebouncePage from './components/DebouncePage';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Router>
    <nav>
      <Link to="/">Home</Link> | <Link to="/throttle">Throttle Demo</Link> | <Link to="/debounce">Debounce Demo</Link>
    </nav>
    
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/throttle" element={<ThrottlePage />} />
      <Route path="/debounce" element={<DebouncePage />} />
    </Routes>
  </Router>
);
