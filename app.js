const { useState, useEffect } = React;

// --- Mock Data ---
const CLUBS = [
    { id: 1, name: "Programming Club", category: "Technical", desc: "For coding enthusiasts.", logo: "P", coordinator: "Dr. Smith", vision: "To build the next generation of tech leaders.", timings: "Wed 5PM" },
    { id: 2, name: "Music Society", category: "Music", desc: "Where words fail, music speaks.", logo: "M", coordinator: "Prof. Johnson", vision: "To spread joy through melody.", timings: "Fri 4PM" },
    { id: 3, name: "Sports Arena", category: "Sports", desc: "Stay fit, stay healthy.", logo: "S", coordinator: "Coach Dave", vision: "To promote physical well-being.", timings: "Mon-Sat 6PM" },
    { id: 4, name: "Drama Club", category: "Cultural", desc: "All the world's a stage.", logo: "D", coordinator: "Ms. Green", vision: "To express emotions freely.", timings: "Tue 5PM" },
    { id: 5, name: "Literature Society", category: "Literature", desc: "Read, write, discuss.", logo: "L", coordinator: "Dr. Brown", vision: "To appreciate written art.", timings: "Thu 5PM" },
];

const EVENTS = [
    { id: 1, name: "Hackathon 2026", date: "Oct 15", time: "10:00 AM", venue: "Main Auditorium", category: "Technical" },
    { id: 2, name: "Annual Concert", date: "Nov 5", time: "06:00 PM", venue: "Open Air Theatre", category: "Music" },
];

// --- Components ---

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

function Home({ setPath }) {
    return (
        <div className="hero">
            <h1>Welcome to ClubConnect</h1>
            <p>Discover, join, and manage your university club memberships in one place.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                <button className="btn btn-primary" onClick={() => setPath('clubs')}>Explore Clubs</button>
                <button className="btn btn-outline" onClick={() => setPath('events')}>Upcoming Events</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '4rem' }}>
                <div><h2>15+</h2><p>Active Clubs</p></div>
                <div><h2>500+</h2><p>Members</p></div>
                <div><h2>50+</h2><p>Events Yearly</p></div>
            </div>
        </div>
    );
}

function ClubsPage({ setPath, favorites, toggleFavorite, setViewingClub }) {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Technical', 'Cultural', 'Sports', 'Literature', 'Music'];
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

function ClubDetails({ club, setPath, toggleFavorite, favorites }) {
    if (!club) return <div>Club not found.</div>;
    return (
        <div className="glass" style={{padding: '2rem', maxWidth: '800px', margin: '0 auto'}}>
            <button className="btn btn-outline" onClick={() => setPath('clubs')} style={{marginBottom: '2rem'}}><i className="fas fa-arrow-left"></i> Back</button>
            <div style={{display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem'}}>
                <div className="club-logo" style={{width: '80px', height: '80px', fontSize: '2rem'}}>{club.logo}</div>
                <div>
                    <h1>{club.name}</h1>
                    <div className="club-category">{club.category}</div>
                </div>
            </div>
            <p><strong>Vision:</strong> {club.vision}</p>
            <p><strong>Coordinator:</strong> {club.coordinator}</p>
            <p><strong>Timings:</strong> {club.timings}</p>
            
            <div style={{marginTop: '2rem', display: 'flex', gap: '1rem'}}>
                <button className="btn btn-primary">Join Club</button>
                <button className="btn btn-outline" onClick={() => toggleFavorite(club.id)}>
                    {favorites.includes(club.id) ? 'Unfollow' : 'Follow'}
                </button>
            </div>
        </div>
    );
}

function EventsPage() {
    return (
        <div>
            <h1 style={{marginBottom: '2rem'}}>Upcoming Events</h1>
            <div className="grid">
                {EVENTS.map(ev => (
                    <div className="card glass" key={ev.id}>
                        <div className="club-category" style={{marginBottom: '0.5rem'}}>{ev.category}</div>
                        <h2 style={{marginBottom: '1rem'}}>{ev.name}</h2>
                        <p><i className="far fa-calendar"></i> {ev.date} | {ev.time}</p>
                        <p style={{marginBottom: '1.5rem'}}><i className="fas fa-map-marker-alt"></i> {ev.venue}</p>
                        <button className="btn btn-primary" style={{width: '100%'}}>Register</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Profile({ favorites }) {
    const favoriteClubs = CLUBS.filter(c => favorites.includes(c.id));
    return (
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <h1>Student Profile</h1>
            <div className="glass" style={{padding: '2rem', marginTop: '2rem'}}>
                <h2>Saved Clubs</h2>
                {favoriteClubs.length === 0 ? <p>No saved clubs.</p> : (
                    <ul style={{marginTop: '1rem', paddingLeft: '1.5rem'}}>
                        {favoriteClubs.map(c => <li key={c.id} style={{marginBottom: '0.5rem'}}>{c.name}</li>)}
                    </ul>
                )}
            </div>
        </div>
    );
}

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

// --- Main App ---
function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const [currentPath, setPath] = useState('home');
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
    const [viewingClub, setViewingClub] = useState(null);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    const toggleFavorite = (id) => {
        setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
    };

    const renderPage = () => {
        switch(currentPath) {
            case 'home': return <Home setPath={setPath} />;
            case 'clubs': return <ClubsPage setPath={setPath} favorites={favorites} toggleFavorite={toggleFavorite} setViewingClub={setViewingClub} />;
            case 'clubDetails': return <ClubDetails club={viewingClub} setPath={setPath} favorites={favorites} toggleFavorite={toggleFavorite} />;
            case 'events': return <EventsPage />;
            case 'profile': return <Profile favorites={favorites} />;
            case 'contact': return <Contact />;
            default: return <Home setPath={setPath} />;
        }
    };

    return (
        <>
            <Navbar currentPath={currentPath} setPath={setPath} toggleTheme={toggleTheme} theme={theme} />
            <main>
                {renderPage()}
            </main>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
