import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const navStyle = {
    backgroundColor: '',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const logoStyle = {
    fontSize: '1.5rem',
    textDecoration: 'none',
    color: '#2D2B23',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
  };

  const linkStyle = {
    color: '#2D2B23',
    transition: 'color 0.1s',
    fontSize: '22px',
    fontFamily: "Gill Sans, sans-serif"
  };

  const greenButtonStyle = {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'background-color 0.3s',
    fontFamily: "Gill Sans, sans-serif",
    fontSize: '18px',
  };

  const hoverGreenButtonStyle = {
    ...greenButtonStyle,
    backgroundColor: '#218838',
  };

  const centerLiStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div>
      <nav style={navStyle}>
        <div className="logo" style={logoStyle}>
          <Link to="/" style={logoStyle}>Better Tomorrow</Link>
        </div>
        <ul className="nav-links" style={{ listStyle: 'none', display: 'flex', gap: '40px', margin: 0, padding: 0 }}>
          <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="/practice" style={linkStyle}>Practice</Link></li>
          <li><Link to="/login" style={linkStyle}>Login</Link></li>
          <li><Link to="/Admin" style={linkStyle}>Admin</Link></li>
          <li style={centerLiStyle}>
            <button>
              <Link to="/signup" style={greenButtonStyle}>Sign Up</Link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
