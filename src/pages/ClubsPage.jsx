import React, { useState } from 'react';
import { CLUBS } from '../data/mockData';

function ClubsPage({ setPath, favorites, toggleFavorite, setViewingClub, filter, setFilter }) {
  const categories = ['All', 'Technical', 'Cultural', 'Sports', 'Literature'];
  const [search, setSearch] = useState('');

  const filteredClubs = CLUBS.filter(c => 
    (filter === 'All' || c.category === filter) && 
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 style={{marginBottom: '2rem'}}>Explore Clubs</h1>
      <div className="filter-bar">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <input 
        type="text" 
        className="form-control" 
        placeholder="Search clubs..." 
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{marginBottom: '2rem', maxWidth: '400px'}}
      />
      <div className="grid">
        {filteredClubs.map(club => (
          <div className="card glass" key={club.id}>
            <div className="card-header">
              <div className="club-logo">{club.logo}</div>
              <div>
                <div className="club-name">{club.name}</div>
                <div className="club-category">{club.category}</div>
              </div>
            </div>
            <p className="club-desc">{club.desc}</p>
            <div style={{fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem'}}>
              <i className="fas fa-users" style={{marginRight: '0.5rem'}}></i>{club.members} Members
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button className="btn btn-primary" onClick={() => { setViewingClub(club); setPath('clubDetails'); }}>Explore</button>
              <i 
                className={`fa-heart ${favorites.includes(club.id) ? 'fas' : 'far'}`} 
                style={{color: 'var(--accent)', cursor: 'pointer', fontSize: '1.2rem'}}
                onClick={() => toggleFavorite(club.id)}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClubsPage;
