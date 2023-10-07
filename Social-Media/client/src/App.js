import { BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Messenger from './pages/messenger/Messenger';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App () {

  const {user} = useContext(AuthContext)
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={user ? <Home /> : <Register/>} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/messenger" element={!user ? <Navigate to="/" /> : <Messenger />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

