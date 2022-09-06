import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import SessionList from './pages/SessionsList/SessionList';

function App() {
  return (
    <div className="App">
      <Register />
      <Login />
      <SessionList />
    </div>
  );
}

export default App;
