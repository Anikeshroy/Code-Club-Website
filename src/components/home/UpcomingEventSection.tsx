import React, { useState } from 'react';
import { Box, Typography, Container, Card, CardContent, CardMedia, Button, Grid, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { CalendarToday, AccessTime, LocationOn, Code, EmojiEvents, Psychology } from '@mui/icons-material';

// Styled components
const SectionContainer = styled(Box)(({ theme }) => ({
  padding: '80px 0',
  background: theme.palette.mode === 'light'
    ? 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)'
    : 'linear-gradient(180deg, #121212 0%, #1a1a1a 100%)',
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: theme.palette.mode === 'light'
      ? 'radial-gradient(#3f51b5 0.5px, transparent 0.5px), radial-gradient(#3f51b5 0.5px, #ffffff 0.5px)'
      : 'radial-gradient(#6573c3 0.5px, transparent 0.5px), radial-gradient(#6573c3 0.5px, #121212 0.5px)',
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 10px 10px',
    opacity: 0.05,
    zIndex: 0,
    pointerEvents: 'none',
  }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '48px',
  textAlign: 'center',
  position: 'relative',
  fontWeight: 800,
  fontSize: '2.5rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '4px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: '2px',
  },
}));

const EventCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '16px',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  background: theme.palette.mode === 'light' 
    ? '#ffffff' 
    : '#1e1e1e',
  boxShadow: theme.palette.mode === 'light'
    ? '0 8px 32px rgba(0, 0, 0, 0.05)'
    : '0 8px 32px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.palette.mode === 'light'
      ? '0 16px 48px rgba(0, 0, 0, 0.1)'
      : '0 16px 48px rgba(0, 0, 0, 0.3)',
  },
}));

const EventImage = styled(CardMedia)(({ theme }) => ({
  height: 200,
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4))',
    zIndex: 1,
  },
}));

const EventStatusChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  fontWeight: 600,
  zIndex: 2,
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
}));

const EventInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '8px',
  '& svg': {
    marginRight: '8px',
    color: theme.palette.primary.main,
    fontSize: '1rem',
  },
}));

const RegisterButton = styled(Button)(({ theme }) => ({
  marginTop: '16px',
  padding: '8px 24px',
  borderRadius: '30px',
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: '#fff',
  fontWeight: 600,
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
}));

const FallbackIconContainer = styled(Box)(({ theme }) => ({
  height: 200,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
  color: theme.palette.common.white,
  '& svg': {
    fontSize: '4rem',
    opacity: 0.8,
  }
}));

// Sample event data
const events = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    date: 'April 10-12, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Computer Lab 2, GEC Jamui',
    image: '/images/events/web_dev - Copy.jpeg',
    status: 'Upcoming',
    description: 'A three-day intensive bootcamp covering HTML, CSS, JavaScript, and React. Perfect for beginners looking to start their web development journey.',
    icon: <Code fontSize="large" />
  },
  {
    id: 2,
    title: 'Competitive Programming Contest',
    date: 'March 25, 2025',
    time: '2:00 PM - 5:00 PM',
    location: 'Online (Zoom)',
    image: '/images/events/competitive programming.png',
    status: 'Registration Open',
    description: 'Test your problem-solving skills in this competitive programming contest. Prizes for top performers and certificates for all participants.',
    icon: <EmojiEvents fontSize="large" />
  },
  {
    id: 3,
    title: 'Machine Learning Workshop',
    date: 'April 5, 2025',
    time: '11:00 AM - 3:00 PM',
    location: 'Seminar Hall, GEC Jamui',
    image: '/images/events/mlll.png',
    status: 'Upcoming',
    description: 'Introduction to machine learning concepts and hands-on practice with Python and scikit-learn. Bring your laptops with Python installed.',
    icon: <Psychology fontSize="large" />
  },
];

const UpcomingEventSection: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});
  
  const handleImageError = (eventId: number) => {
    setImageErrors(prev => ({
      ...prev,
      [eventId]: true
    }));
  };
  
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle variant="h2">
            Upcoming Events
          </SectionTitle>
        </motion.div>
        
        <Grid container spacing={4}>
          {events.map((event, index) => (
            <Grid item xs={12} md={4} key={event.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <EventCard>
                  {!imageErrors[event.id] ? (
                    <EventImage
                      image={event.image}
                      title={event.title}
                      sx={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                      onError={() => handleImageError(event.id)}
                    >
                      <EventStatusChip 
                        label={event.status} 
                        color={event.status === 'Registration Open' ? 'secondary' : 'primary'}
                        sx={{ zIndex: 2 }}
                      />
                    </EventImage>
                  ) : (
                    <FallbackIconContainer>
                      {event.icon}
                      <EventStatusChip 
                        label={event.status} 
                        color={event.status === 'Registration Open' ? 'secondary' : 'primary'}
                      />
                    </FallbackIconContainer>
                  )}
                  
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Box>
                      <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                        {event.title}
                      </Typography>
                      
                      <EventInfo>
                        <CalendarToday />
                        <Typography variant="body2">
                          {event.date}
                        </Typography>
                      </EventInfo>
                      
                      <EventInfo>
                        <AccessTime />
                        <Typography variant="body2">
                          {event.time}
                        </Typography>
                      </EventInfo>
                      
                      <EventInfo>
                        <LocationOn />
                        <Typography variant="body2">
                          {event.location}
                        </Typography>
                      </EventInfo>
                      
                      <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                        {event.description}
                      </Typography>
                    </Box>
                    
                    <RegisterButton variant="contained" disableElevation sx={{ mt: 2, alignSelf: 'flex-start' }}>
                      Register Now
                    </RegisterButton>
                  </CardContent>
                </EventCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default UpcomingEventSection; 