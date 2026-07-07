import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ClubsPage from './pages/ClubsPage';
import ClubDetails from './pages/ClubDetails';
import EventsPage from './pages/EventsPage';
import Profile from './pages/Profile';
import EventRegistration from './pages/EventRegistration';
import Contact from './pages/Contact';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [currentPath, setPath] = useState('home');
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const [viewingClub, setViewingClub] = useState(null);
  const [viewingEvent, setViewingEvent] = useState(null);
  const [clubFilter, setClubFilter] = useState('All');

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
      case 'home': return <Home setPath={setPath} setViewingClub={setViewingClub} />;
      case 'clubs': return <ClubsPage setPath={setPath} favorites={favorites} toggleFavorite={toggleFavorite} setViewingClub={setViewingClub} filter={clubFilter} setFilter={setClubFilter} />;
      case 'clubDetails': return <ClubDetails club={viewingClub} setPath={setPath} favorites={favorites} toggleFavorite={toggleFavorite} setFilter={setClubFilter} />;
      case 'events': return <EventsPage setPath={setPath} setViewingEvent={setViewingEvent} />;
      case 'eventRegistration': return <EventRegistration event={viewingEvent} setPath={setPath} />;
      case 'profile': return <Profile favorites={favorites} toggleFavorite={toggleFavorite} setPath={setPath} setViewingClub={setViewingClub} />;
      case 'contact': return <Contact />;
      default: return <Home setPath={setPath} setViewingClub={setViewingClub} />;
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

export default App;
