import React from 'react';

function Navbar({ currentPath, setPath, toggleTheme, theme }) {
  return (
    <nav>
      <div className="logo" onClick={() => setPath('home')}>ClubConnect</div>
      <div className="nav-links">
        {['home', 'clubs', 'events', 'profile', 'contact'].map(path => (
          <span 
            key={path} 
            className={`nav-link ${currentPath === path ? 'active' : ''}`}
            onClick={() => setPath(path)}
            style={{textTransform: 'capitalize'}}
          >
            {path}
          </span>
        ))}
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
      </button>
    </nav>
  );
}

export default Navbar;
