import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext';
import GlobalStyles from './theme/globalStyles';
import Layout from './components/layout/Layout';

// Import pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResourcesPage from './pages/ResourcesPage';
import GalleryPage from './pages/GalleryPage';
import JoinPage from './pages/JoinPage';
import AnnouncementsPage from './pages/AnnouncementsPage';
// import DevelopersPage from './pages/DevelopersPage';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/announcements" element={<AnnouncementsPage />} />
            {/* <Route path="/developers" element={<DevelopersPage />} /> */}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
