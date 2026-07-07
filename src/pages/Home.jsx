import React from 'react';
import { CLUBS } from '../data/mockData';

function Home({ setPath, setViewingClub }) {
  // Let's just take the first 3 clubs as featured
  const featuredClubs = CLUBS.slice(0, 3);

  return (
    <div>
      <div className="hero" style={{marginBottom: '4rem', padding: '4rem 2rem', borderRadius: '16px'}}>
        <h1>Welcome to ClubConnect</h1>
        <p>Discover, join, and manage your university club memberships in one place.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
          <button className="btn btn-primary" onClick={() => setPath('clubs')}>Explore Clubs</button>
          <button className="btn btn-outline" onClick={() => setPath('events')}>Upcoming Events</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', marginTop: '4rem', flexWrap: 'wrap' }}>
          <div><h2>15+</h2><p>Active Clubs</p></div>
          <div><h2>500+</h2><p>Members</p></div>
          <div><h2>50+</h2><p>Events Yearly</p></div>
        </div>
      </div>

      <div style={{marginBottom: '4rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
          <h2>Featured Clubs</h2>
          <button className="btn btn-outline" onClick={() => setPath('clubs')} style={{padding: '0.5rem 1rem', fontSize: '0.9rem'}}>View All <i className="fas fa-arrow-right" style={{marginLeft: '0.5rem'}}></i></button>
        </div>
        <div className="grid">
          {featuredClubs.map(club => (
            <div className="card glass" key={club.id} style={{cursor: 'pointer'}} onClick={() => { setViewingClub(club); setPath('clubDetails'); }}>
              <div className="card-header">
                <div className="club-logo">{club.logo}</div>
                <div>
                  <div className="club-name">{club.name}</div>
                  <div className="club-category">{club.category}</div>
                </div>
              </div>
              <p className="club-desc">{club.desc}</p>
              <div style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
                <i className="fas fa-users" style={{marginRight: '0.5rem'}}></i>{club.members} Members
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="glass" style={{padding: '3rem 2rem', borderRadius: '16px', textAlign: 'center'}}>
        <h2 style={{marginBottom: '2rem'}}>Why Join a Club?</h2>
        <div className="grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem'}}>
          <div>
            <i className="fas fa-network-wired" style={{fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '1rem'}}></i>
            <h3>Networking</h3>
            <p style={{color: 'var(--text-secondary)', marginTop: '0.5rem'}}>Connect with like-minded peers and industry professionals.</p>
          </div>
          <div>
            <i className="fas fa-laptop-code" style={{fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '1rem'}}></i>
            <h3>Skill Building</h3>
            <p style={{color: 'var(--text-secondary)', marginTop: '0.5rem'}}>Gain hands-on experience and build your portfolio.</p>
          </div>
          <div>
            <i className="fas fa-users" style={{fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '1rem'}}></i>
            <h3>Community</h3>
            <p style={{color: 'var(--text-secondary)', marginTop: '0.5rem'}}>Find your tribe and make lasting friendships on campus.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
