import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Actividades from "./pages/Actividades";
import Sistema from "./pages/Sistema";
import Bitacoras from "./pages/Bitacoras";
import Documentacion from "./components/Documentacion";
import CodigoFuente from "./pages/CodigoFuente";
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <h1>Proyecto II</h1>
        <nav>
          <ul>
            <li><Link to="/">Actividades</Link></li>
            <li><Link to="/sistema">Tareas pendientes</Link></li>
            <li><Link to="/bitacoras">Bitácoras de Reuniones</Link></li>
            <li><Link to="/documentacion">Documentacion</Link></li>
            <li><Link to="/codigo">Código Fuente</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Actividades />} />
          <Route path="/sistema" element={<Sistema />} />
          <Route path="/bitacoras" element={<Bitacoras />} />
          <Route path="/documentacion" element={<Documentacion />} />
          <Route path="/codigo" element={<CodigoFuente />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;