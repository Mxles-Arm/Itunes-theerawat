import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./component/nav.jsx";
import Home from "./component/home.jsx";
import Browse from "./component/Browse.jsx";
import Playlist from "./component/Playlist.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />

        <Routes>
          {/* หน้าเริ่มต้น */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/playlist" element={<Playlist />} />

          {/* ถ้า path ผิด */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>

      </HashRouter>
    </div>
  );
}

export default App;