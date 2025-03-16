import React from 'react';
import { Box } from '@mui/material';
import HeroSection from '../components/home/HeroSection';
import AnnouncementSection from '../components/home/AnnouncementSection';
import UpcomingEventSection from '../components/home/UpcomingEventSection';
// import DivisionSection from '../components/home/DivisionSection';
import AboutSection from '../components/home/AboutSection';

const HomePage: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      <AnnouncementSection />
      <UpcomingEventSection />
      {/* <DivisionSection /> */}
      <AboutSection />
    </Box>
  );
};

export default HomePage; 