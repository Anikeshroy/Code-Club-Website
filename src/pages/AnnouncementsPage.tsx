import React from 'react';
import { Box, Container, Typography, Paper, List, ListItem, Divider, Chip, Button, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CalendarToday, ChevronRight } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const PageContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0, 8),
  background: theme.palette.mode === 'light'
    ? 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)'
    : 'linear-gradient(180deg, #121212 0%, #1a1a1a 100%)',
  minHeight: 'calc(100vh - 64px)', // Adjust based on your navbar height
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: theme.palette.mode === 'light'
      ? 'radial-gradient(#3f51b5 0.5px, transparent 0.5px), radial-gradient(#3f51b5 0.5px, #f8f9fa 0.5px)'
      : 'radial-gradient(#6573c3 0.5px, transparent 0.5px), radial-gradient(#6573c3 0.5px, #121212 0.5px)',
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 10px 10px',
    opacity: 0.05,
    zIndex: 0,
    pointerEvents: 'none',
  }
}));

const PageHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
}));

const PageTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  marginBottom: theme.spacing(1),
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
  fontSize: '2.5rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.75rem',
  },
}));

const TitleDecoration = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(1),
}));

const AnnouncementContainer = styled(Paper)(({ theme }) => ({
  background: theme.palette.mode === 'light' 
    ? '#ffffff' 
    : '#1e1e1e',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.palette.mode === 'light'
    ? '0 4px 20px rgba(0, 0, 0, 0.05)'
    : '0 4px 20px rgba(0, 0, 0, 0.2)',
  overflow: 'hidden',
  maxWidth: '900px',
  margin: '0 auto',
  transition: 'transform 0.3s ease',
  position: 'relative',
  zIndex: 1,
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.palette.mode === 'light'
      ? '0 8px 30px rgba(0, 0, 0, 0.1)'
      : '0 8px 30px rgba(0, 0, 0, 0.3)',
  }
}));

const AnnouncementItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  borderLeft: '3px solid transparent',
  transition: 'all 0.2s ease',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.5, 2),
  },
  '&:hover': {
    borderLeftColor: theme.palette.primary.main,
    backgroundColor: theme.palette.mode === 'light'
      ? 'rgba(0, 0, 0, 0.02)'
      : 'rgba(255, 255, 255, 0.02)',
  }
}));

const DateLabel = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: '0.75rem',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(0.5),
  '& svg': {
    fontSize: '0.875rem',
    marginRight: theme.spacing(0.5),
    color: theme.palette.primary.main,
  }
}));

const AnnouncementTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1.1rem',
  lineHeight: 1.3,
  marginBottom: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.mode === 'light'
    ? theme.palette.grey[900]
    : theme.palette.grey[100],
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const AnnouncementDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
  marginBottom: theme.spacing(1),
  lineHeight: 1.6,
}));

const ViewButton = styled(Button)(({ theme }) => ({
  padding: '6px 16px',
  borderRadius: '20px',
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '0.75rem',
  color: theme.palette.common.white,
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  '&:hover': {
    background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  },
}));

// Import announcements from the AnnouncementSection component
// In a real app, these would likely come from an API or central state
const announcements = [
  {
    title: 'Upcoming Workshop: Web Development Masterclass',
    date: 'March 20, 2024',
    description: 'Join us for an intensive workshop on modern web development techniques, frameworks, and best practices. Perfect for beginners and intermediate developers.',
    link: '/events/web-dev-workshop',
    isNew: true
  },
  {
    title: 'Annual Hackathon 2024: Code for Change',
    date: 'April 5, 2024',
    description: "Get ready for 36 hours of coding, innovation, and fun! This year's theme focuses on solutions for social impact and sustainability.",
    link: '/events/hackathon-2024',
    isNew: true
  },
  {
    title: 'New Learning Paths: DSA and System Design',
    date: 'March 15, 2024',
    description: "We've launched new structured learning paths for Data Structures & Algorithms and System Design. Perfect for interview preparation and skill advancement.",
    link: '/resources/learning-paths',
    isNew: false
  },
  {
    title: 'Open Source Contribution Day',
    date: 'April 15, 2024',
    description: "Learn how to contribute to open source projects! We'll guide you through making your first meaningful contribution to real-world projects.",
    link: '/events/open-source-day',
    isNew: false
  },
  {
    title: 'Tech Talk: AI and ML Fundamentals',
    date: 'April 22, 2024',
    description: 'Join industry experts for an insightful discussion on artificial intelligence and machine learning fundamentals and their practical applications.',
    link: '/events/tech-talk-ai',
    isNew: false
  },
  {
    title: 'Summer Internship Opportunities',
    date: 'May 1, 2024',
    description: 'Exclusive internship opportunities for club members! Partner companies are offering summer positions in software development, data science, and design.',
    link: '/opportunities/summer-internships',
    isNew: false
  }
];

const AnnouncementsPage: React.FC = () => {
  const theme = useTheme();
  
  return (
    <PageContainer>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <PageHeader sx={{ mt: { xs: 4, sm: 5, md: 6 } }}>
            <TitleDecoration>
              <PageTitle variant="h3">
                All Announcements
              </PageTitle>
            </TitleDecoration>
            
            <Typography 
              variant="body1" 
              color="textSecondary"
              sx={{
                maxWidth: '600px',
                mx: 'auto',
                fontSize: { xs: '0.875rem', sm: '1rem' },
                opacity: 0.8,
                mb: 1
              }}
            >
              Stay updated with all events and opportunities
            </Typography>
            
            <Box 
              sx={{ 
                width: '60px', 
                height: '4px', 
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                mx: 'auto',
                mt: 2,
                borderRadius: '2px'
              }} 
            />
          </PageHeader>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnnouncementContainer elevation={0} sx={{ 
            mx: { xs: 0, sm: 'auto' },
            borderRadius: { xs: 1, sm: 2 },
            mt: { xs: 3, sm: 4 }
          }}>
            <Box sx={{ 
              p: { xs: 2, sm: 3 }, 
              borderBottom: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 1, sm: 0 }
            }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 600, 
                fontSize: { xs: '1rem', sm: '1.25rem' },
                textAlign: { xs: 'center', sm: 'left' }
              }}>
                {announcements.length} Announcements
              </Typography>
              <Chip 
                label={`${announcements.filter(a => a.isNew).length} New`} 
                color="secondary" 
                size="small"
                sx={{ fontWeight: 500 }}
              />
            </Box>
            
            <List disablePadding>
              {announcements.map((announcement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <AnnouncementItem>
                    <Box sx={{ 
                      width: '100%', 
                      display: 'flex', 
                      flexDirection: { xs: 'column', sm: 'row' },
                      justifyContent: 'space-between', 
                      alignItems: { xs: 'flex-start', sm: 'flex-start' },
                      gap: { xs: 1, sm: 2 }
                    }}>
                      <Box sx={{ width: '100%' }}>
                        <DateLabel>
                          <CalendarToday />
                          {announcement.date}
                          {announcement.isNew && (
                            <Chip 
                              label="New" 
                              size="small" 
                              color="secondary" 
                              sx={{ 
                                ml: 1, 
                                height: 16, 
                                fontSize: '0.6rem',
                                fontWeight: 600,
                                px: 0.5
                              }} 
                            />
                          )}
                        </DateLabel>
                        
                        <AnnouncementTitle variant="subtitle1">
                          {announcement.title}
                        </AnnouncementTitle>
                        
                        <AnnouncementDescription variant="body2">
                          {announcement.description}
                        </AnnouncementDescription>
                      </Box>
                      
                      <ViewButton
                        variant="contained"
                        endIcon={<ChevronRight fontSize="small" />}
                        href={announcement.link}
                        size="small"
                        sx={{ 
                          mt: { xs: 1, sm: 0 },
                          alignSelf: { xs: 'flex-start', sm: 'center' },
                          minWidth: { xs: '120px', sm: 'auto' },
                          whiteSpace: 'nowrap',
                          width: { xs: '100%', sm: 'auto' }
                        }}
                      >
                        View Details
                      </ViewButton>
                    </Box>
                  </AnnouncementItem>
                  {index < announcements.length - 1 && (
                    <Divider sx={{ 
                      opacity: 0.6,
                      mx: { xs: 0, sm: 2 }
                    }} />
                  )}
                </motion.div>
              ))}
            </List>
            
            <Box sx={{ 
              p: { xs: 3, sm: 4 }, 
              borderTop: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}`,
              textAlign: 'center'
            }}>
              <Button
                variant="contained"
                color="primary"
                href="/"
                sx={{ 
                  borderRadius: '20px',
                  textTransform: 'none',
                  fontWeight: 600,
                  px: 4,
                  py: 1,
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  '&:hover': {
                    background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  }
                }}
              >
                Back to Home
              </Button>
            </Box>
          </AnnouncementContainer>
        </motion.div>
        
        <Box sx={{ 
          mt: 4, 
          textAlign: 'center',
          opacity: 0.7,
          fontSize: '0.75rem',
          color: 'text.secondary'
        }}>
          <Typography variant="caption">
            Last updated: {new Date().toLocaleDateString()}
          </Typography>
        </Box>
      </Container>
    </PageContainer>
  );
};

export default AnnouncementsPage; 