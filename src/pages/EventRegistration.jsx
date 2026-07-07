import React, { useState } from 'react';

function EventRegistration({ event, setPath }) {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    gender: 'Select',
    additionalDetails: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!event) return <div>Event not found.</div>;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div style={{maxWidth: '800px', margin: '0 auto'}}>
      <button className="btn btn-outline" onClick={() => setPath('events')} style={{marginBottom: '2rem'}}>
        <i className="fas fa-arrow-left"></i> Back to Events
      </button>

      <div className="glass" style={{padding: '2rem'}}>
        <h1 style={{marginBottom: '0.5rem'}}>Register for {event.name}</h1>
        <p style={{color: 'var(--text-secondary)', marginBottom: '2rem'}}>
          <i className="far fa-calendar"></i> {event.date} at {event.time} | <i className="fas fa-map-marker-alt"></i> {event.venue}
        </p>

        {isSubmitted ? (
          <div style={{padding: '2rem', textAlign: 'center', background: 'rgba(56, 161, 105, 0.1)', border: '1px solid #38a169', borderRadius: '8px'}}>
            <i className="fas fa-check-circle" style={{fontSize: '3rem', color: '#68d391', marginBottom: '1rem'}}></i>
            <h2>Registration Successful!</h2>
            <p style={{marginTop: '1rem'}}>You are now registered for {event.name}. We will send further updates to your university email.</p>
            <button className="btn btn-primary" style={{marginTop: '2rem'}} onClick={() => setPath('events')}>Return to Events</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <div>
              <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>Full Name</label>
              <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required placeholder="e.g. John Doe" />
            </div>

            <div>
              <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>Course / Major</label>
              <input type="text" className="form-control" name="course" value={formData.course} onChange={handleChange} required placeholder="e.g. B.Tech Computer Science" />
            </div>

            <div>
              <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>Gender</label>
              <select className="form-control" name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="Select" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>

            <div>
              <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>
                Additional Requirements / Details (Optional)
              </label>
              <textarea 
                className="form-control" 
                name="additionalDetails" 
                value={formData.additionalDetails} 
                onChange={handleChange} 
                rows="4"
                placeholder={`Any specific requirements or questions regarding ${event.name}?`}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{alignSelf: 'flex-start', padding: '0.8rem 2rem', marginTop: '1rem'}}>
              Complete Registration
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default EventRegistration;
