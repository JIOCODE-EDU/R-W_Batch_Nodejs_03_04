import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); 
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: 'white' }}>
      <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</span>
      {isLoggedIn ? (
        <>
          <span onClick={() => navigate('/profile')} style={{ marginLeft: 20, cursor: 'pointer' }}>Profile</span>
          <button onClick={handleLogout} style={{ float: 'right' }}>Logout</button>
        </>
      ) : (
        <>
          <span onClick={() => navigate('/login')} style={{ marginLeft: 20, cursor: 'pointer' }}>Login</span>
          <span onClick={() => navigate('/register')} style={{ marginLeft: 20, cursor: 'pointer' }}>Register</span>
        </>
      )}
    </nav>
  );
}