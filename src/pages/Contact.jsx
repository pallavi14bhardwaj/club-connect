import React from 'react';

function Contact() {
  return (
    <div style={{maxWidth: '600px', margin: '0 auto'}}>
      <h1>Contact Us</h1>
      <form className="glass" style={{padding: '2rem', marginTop: '2rem'}} onSubmit={e => e.preventDefault()}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea className="form-control" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
