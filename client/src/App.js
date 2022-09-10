import './App.css';
import Login from './pages/Login/Login';
import NewSession from './pages/NewSession/NewSession';
import Register from './pages/Register/Register';
import SessionList from './pages/SessionsList/SessionList';

function App() {
  return (
    <div className="App">
      <Register />
      <Login />
      <SessionList />
      <NewSession />
    </div>
  );
}

export default App;
