import React from 'react';
import { EVENTS } from '../data/mockData';

function EventsPage({ setPath, setViewingEvent }) {
  return (
    <div>
      <h1 style={{marginBottom: '2rem'}}>Upcoming Events</h1>
      <div className="grid">
        {EVENTS.map(ev => (
          <div className="card glass" key={ev.id}>
            <div className="club-category" style={{marginBottom: '0.5rem'}}>{ev.category}</div>
            <h2 style={{marginBottom: '1rem'}}>{ev.name}</h2>
            <p><i className="far fa-calendar"></i> {ev.date} | {ev.time}</p>
            <p><i className="fas fa-map-marker-alt"></i> {ev.venue}</p>
            <div style={{margin: '1rem 0', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', fontSize: '0.9rem'}}>
              <div style={{color: 'var(--text-secondary)'}}>Registration Window:</div>
              <strong>{ev.regStart} - {ev.regEnd}</strong>
            </div>
            <button className="btn btn-primary" style={{width: '100%'}} onClick={() => { setViewingEvent(ev); setPath('eventRegistration'); }}>Register</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;
