import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './component/nav.jsx';
import home from './component/home.jsx';
import Browse from './component/Browse.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Playlist from './component/Playlist.jsx';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      npm install --save react-router-dom
<BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
