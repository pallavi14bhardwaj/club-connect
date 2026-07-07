import React, { useState } from 'react';
import { CLUBS } from '../data/mockData';

function Profile({ favorites, toggleFavorite, setPath, setViewingClub }) {
  const favoriteClubs = CLUBS.filter(c => favorites.includes(c.id));
  
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Aditi Sharma",
    email: "aditi.s@university.edu",
    year: "2nd Year",
    gender: "Female",
    course: "Computer Science"
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div style={{maxWidth: '800px', margin: '0 auto'}}>
      <h1>Student Profile</h1>
      
      <div className="glass" style={{padding: '2rem', marginTop: '2rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h2>Personal Information</h2>
          {!isEditing && (
            <button className="btn btn-outline" onClick={() => setIsEditing(true)}>
              <i className="fas fa-edit"></i> Edit
            </button>
          )}
        </div>
        
        <div style={{marginTop: '1.5rem'}}>
          {isEditing ? (
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>Name</label>
                <input type="text" className="form-control" name="name" value={profile.name} onChange={handleChange} />
              </div>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>Email</label>
                <input type="email" className="form-control" name="email" value={profile.email} onChange={handleChange} />
              </div>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>Year</label>
                <select className="form-control" name="year" value={profile.year} onChange={handleChange}>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </select>
              </div>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>Gender</label>
                <select className="form-control" name="gender" value={profile.gender} onChange={handleChange}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>Course</label>
                <input type="text" className="form-control" name="course" value={profile.course} onChange={handleChange} />
              </div>
              <button className="btn btn-primary" onClick={handleSave} style={{alignSelf: 'flex-start', marginTop: '1rem'}}>Save Changes</button>
            </div>
          ) : (
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.8rem'}}>
              <p><strong>Name:</strong> {profile.name}</p>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Year:</strong> {profile.year}</p>
              <p><strong>Gender:</strong> {profile.gender}</p>
              <p><strong>Course:</strong> {profile.course}</p>
            </div>
          )}
        </div>
      </div>

      <div className="glass" style={{padding: '2rem', marginTop: '2rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h2>Saved Clubs</h2>
          {isEditing && <span style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Edit Mode: You can remove clubs</span>}
        </div>
        {favoriteClubs.length === 0 ? <p style={{marginTop: '1.5rem'}}>No saved clubs.</p> : (
          <div style={{marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            {favoriteClubs.map(c => (
              <div key={c.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <div className="club-logo" style={{width: '40px', height: '40px', fontSize: '1.2rem'}}>{c.logo}</div>
                  <strong style={{cursor: 'pointer'}} onClick={() => { setViewingClub(c); setPath('clubDetails'); }}>{c.name}</strong>
                </div>
                <div style={{display: 'flex', gap: '0.5rem'}}>
                  <button className="btn btn-outline" style={{padding: '0.4rem 0.8rem', fontSize: '0.9rem'}} onClick={() => { setViewingClub(c); setPath('clubDetails'); }}>Explore</button>
                  {isEditing && (
                    <button className="btn btn-primary" style={{padding: '0.4rem 0.8rem', fontSize: '0.9rem', backgroundColor: '#e53e3e', borderColor: '#e53e3e'}} onClick={() => toggleFavorite(c.id)}>Remove</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
