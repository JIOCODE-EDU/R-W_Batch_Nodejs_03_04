import { useEffect } from 'react';                        
import { Routes, Route, BrowserRouter } from 'react-router-dom'; 
import Login from './Components/Login';
import Register from './Components/Register';
import Profile from './pages/profile';
import Navbar from './Components/Navbar';
import { useNavigate } from 'react-router-dom';

export default function App() {

  const navigates = useNavigate(); 


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    if (token) {
      localStorage.setItem('token', token);
      window.history.replaceState({}, '', '/profile');
      navigates('/profile');
    }
  }, []);

  return (
    <>
      <div style={{ padding: '20px' }}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<h1>Welcome</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}