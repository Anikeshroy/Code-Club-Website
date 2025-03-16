import React from 'react';
import { Box, Container, Typography, Button, Divider, Chip, Paper, List, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { CalendarToday, ArrowForward, NotificationsActive, ChevronRight } from '@mui/icons-material';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: theme.palette.mode === 'light'
    ? 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)'
    : 'linear-gradient(180deg, #121212 0%, #1a1a1a 100%)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  }
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  marginBottom: theme.spacing(1),
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
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
  maxWidth: '800px',
  margin: '0 auto',
}));

const AnnouncementItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  borderLeft: '3px solid transparent',
  transition: 'all 0.2s ease',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
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
  fontSize: '1rem',
  lineHeight: 1.3,
  marginBottom: theme.spacing(0.5),
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.mode === 'light'
    ? theme.palette.grey[900]
    : theme.palette.grey[100],
}));

const AnnouncementDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
  marginBottom: theme.spacing(1),
}));

const ViewButton = styled(Button)(({ theme }) => ({
  padding: '4px 12px',
  borderRadius: '4px',
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '0.75rem',
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.mode === 'light'
      ? 'rgba(25, 118, 210, 0.08)'
      : 'rgba(25, 118, 210, 0.15)',
  },
}));

const ViewAllButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  padding: '8px 16px',
  borderRadius: '4px',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '0.875rem',
  color: theme.palette.common.white,
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  '&:hover': {
    background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
  },
}));

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

// Number of announcements to show in the main view
const VISIBLE_ANNOUNCEMENTS = 3;

const AnnouncementSection: React.FC = () => {
  return (
    <SectionContainer id="announcements">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeader>
            <Box 
              sx={{ 
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1.5,
                mb: 1,
                px: 2.5,
                py: 1,
                borderRadius: '40px',
                background: theme => theme.palette.mode === 'light' 
                  ? 'rgba(25, 118, 210, 0.05)'
                  : 'rgba(25, 118, 210, 0.1)',
              }}
            >
              <NotificationsActive 
                color="primary" 
                sx={{ 
                  fontSize: { sm: '1.75rem', md: '2rem' },
                  verticalAlign: 'middle',
                  display: { xs: 'none', sm: 'block' }
                }} 
              />
              <SectionTitle variant="h4" sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.125rem' } }}>
                Latest Announcements
              </SectionTitle>
            </Box>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{
                maxWidth: '500px',
                mx: 'auto',
                mt: 1,
                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                opacity: 0.8,
                display: { xs: 'none', sm: 'block' }
              }}
            >
              Stay updated with the latest events and opportunities
            </Typography>
          </SectionHeader>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnnouncementContainer elevation={0} sx={{ mx: { xs: 2, sm: 'auto' } }}>
            <List disablePadding>
              {announcements.slice(0, VISIBLE_ANNOUNCEMENTS).map((announcement, index) => (
                <React.Fragment key={index}>
                  <AnnouncementItem>
                    <Box sx={{ 
                      width: '100%', 
                      display: 'flex', 
                      flexDirection: { xs: 'column', sm: 'row' },
                      justifyContent: 'space-between', 
                      alignItems: { xs: 'flex-start', sm: 'flex-start' }
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
                                fontWeight: 600
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
                        variant="text"
                        endIcon={<ChevronRight fontSize="small" />}
                        href={announcement.link}
                        size="small"
                        sx={{ 
                          mt: { xs: 1, sm: 0 },
                          alignSelf: { xs: 'flex-start', sm: 'flex-start' },
                          ml: { xs: 0, sm: 2 },
                          minWidth: { xs: '80px', sm: 'auto' }
                        }}
                      >
                        View
                      </ViewButton>
                    </Box>
                  </AnnouncementItem>
                  {index < VISIBLE_ANNOUNCEMENTS - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
            
            <Box sx={{ textAlign: 'center', p: { xs: 1.5, sm: 2 }, bgcolor: theme => theme.palette.mode === 'light' ? 'rgba(0,0,0,0.02)' : 'rgba(255,255,255,0.02)' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1.5 }}>
                <Typography 
                  variant="caption" 
                  color="textSecondary"
                  sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '0.75rem'
                  }}
                >
                  <Box 
                    component="span" 
                    sx={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      color: 'white',
                      fontSize: '0.7rem',
                      fontWeight: 'bold',
                      mr: 1
                    }}
                  >
                    {announcements.length - VISIBLE_ANNOUNCEMENTS}
                  </Box>
                  More announcements available
                </Typography>
              </Box>
              
              <ViewAllButton
                variant="contained"
                disableElevation
                endIcon={<ArrowForward fontSize="small" />}
                href="/announcements"
                sx={{
                  width: { xs: '100%', sm: 'auto' }
                }}
              >
                View All Announcements
              </ViewAllButton>
            </Box>
          </AnnouncementContainer>
        </motion.div>
      </Container>
    </SectionContainer>
  );
};

export default AnnouncementSection; 