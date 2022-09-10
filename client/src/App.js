import './App.css';
import Login from './pages/Login/Login';
import NewSession from './pages/NewSession/NewSession';
import Register from './pages/Register/Register';
import SessionList from './pages/SessionsList/SessionList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sessions" element={<SessionList />} />
        <Route path="/newSession" element={<NewSession />} />
      </Routes>
    </Router>
  );
}

export default App;
