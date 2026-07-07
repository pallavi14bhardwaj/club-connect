import React, { useState } from 'react';

function ClubDetails({ club, setPath, toggleFavorite, favorites, setFilter }) {
  const [showMessage, setShowMessage] = useState(false);

  if (!club) return <div>Club not found.</div>;
  return (
    <div className="glass" style={{padding: '2rem', maxWidth: '800px', margin: '0 auto'}}>
      <button className="btn btn-outline" onClick={() => setPath('clubs')} style={{marginBottom: '2rem'}}>
        <i className="fas fa-arrow-left"></i> Back
      </button>
      <div style={{display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem'}}>
        <div className="club-logo" style={{width: '80px', height: '80px', fontSize: '2rem'}}>{club.logo}</div>
        <div>
          <h1>{club.name}</h1>
          <div className="club-category">{club.category}</div>
        </div>
      </div>
      <p><strong>Vision:</strong> {club.vision}</p>
      <p><strong>Coordinator:</strong> {club.coordinator}</p>
      <p><strong>Email:</strong> <a href={`mailto:${club.email}`} style={{color: 'var(--accent)'}}>{club.email}</a></p>
      <p><strong>Timings:</strong> {club.timings}</p>
      <p><strong>Duration:</strong> {club.duration}</p>
      <p><strong>Venue:</strong> {club.venue}</p>
      <p><strong>Current Members:</strong> {club.members}</p>
      
      <div style={{marginTop: '2rem', display: 'flex', gap: '1rem'}}>
        <button className="btn btn-primary" onClick={() => setShowMessage(true)}>Join Club</button>
        <button className="btn btn-outline" onClick={() => toggleFavorite(club.id)}>
          {favorites.includes(club.id) ? 'Unfollow' : 'Follow'}
        </button>
      </div>

      {showMessage && (
        <div style={{marginTop: '1.5rem', padding: '1rem', background: 'rgba(56, 161, 105, 0.1)', border: '1px solid #38a169', borderRadius: '8px', color: '#68d391'}}>
          <i className="fas fa-info-circle" style={{marginRight: '0.5rem'}}></i>
          <strong>PLEASE NOTE:</strong> You must visit <strong>{club.venue}</strong> on campus to complete your registration.
        </div>
      )}
    </div>
  );
}

export default ClubDetails;
