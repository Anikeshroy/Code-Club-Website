import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar, IconButton, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

// Team member data
const teamMembers = [
  {
    id: 1,
    name: 'Sanjeev Ranjan',
    position: 'President',
    image: '/images/team/Sanjeev-dp.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/rahul-sharma',
      github: 'https://github.com/rahulsharma',
      instagram: 'https://instagram.com/rahulsharma',
    },
  },
  {
    id: 2,
    name: 'Dipsikha Jha',
    position: 'Vice President',
    image: '/images/team/Dipsikha-jha.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/priya-singh',
      github: 'https://github.com/priyasingh',
      instagram: 'https://instagram.com/priyasingh',
    },
  },
  {
    id: 3,
    name: 'Rahul Kumar',
    position: 'HR Manager',
    image: '/images/team/RAHUL-KUMAR.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/amit-kumar',
      github: 'https://github.com/amitkumar',
      instagram: 'https://instagram.com/amitkumar',
    },
  },
  {
    id: 4,
    name: 'Anikesh Roy',
    position: 'Technical Lead',
    image: '/images/team/profile_pic.png',
    social: {
      linkedin: 'https://linkedin.com/in/amit-kumar',
      github: 'https://github.com/amitkumar',
      instagram: 'https://instagram.com/amitkumar',
    },
  },
  {
    id: 5,
    name: 'Riya Singh',
    position: 'Joint Secretary C, C++, DSA',
    image: '/images/team/Riya-singh.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/neha-gupta',
      github: 'https://github.com/nehagupta',
      instagram: 'https://instagram.com/nehagupta',
    },
  },
  {
    id: 6,
    name: 'Shivam Sony',
    position: 'Deputy Secretary HR',
    image: '/images/team/Shivam-dp.jpeg',
    social: {
      linkedin: 'https://linkedin.com/in/vikram-patel',
      github: 'https://github.com/vikrampatel',
      instagram: 'https://instagram.com/vikrampatel',
    },
  },
  {
    id: 7,
    name: 'Vikash Kumar',
    position: 'Deputy Secretary Social Media',
    image: '/images/team/Vikash-vaibhav-Gupta.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/ananya-reddy',
      github: 'https://github.com/ananyareddy',
      instagram: 'https://instagram.com/ananyareddy',
    },
  },
  {
    id: 8,
    name: 'Sumit Kumar',
    position: 'Deputy Secretary Photography',
    image: '/images/team/Sumit-dp.jpeg',
    social: {
      linkedin: 'https://linkedin.com/in/ananya-reddy',
      github: 'https://github.com/ananyareddy',
      instagram: 'https://instagram.com/ananyareddy',
    },
  },
];

const SectionTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -10,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 80,
    height: 4,
    borderRadius: 2,
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  }
}));

const SectionDescription = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto',
  marginBottom: theme.spacing(6),
  color: theme.palette.text.secondary,
}));

const MemberCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 16,
  overflow: 'hidden',
  transition: 'transform 0.3s, box-shadow 0.3s',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4),
  textAlign: 'center',
}));

const MemberAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  margin: '0 auto',
  border: `4px solid ${theme.palette.background.paper}`,
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
}));

const SocialIcons = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const TeamMembers: React.FC = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle variant="h4">
            Meet The Team
          </SectionTitle>
          <SectionDescription variant="body1">
            Our team consists of passionate and dedicated students who work tirelessly to organize events, 
            workshops, and hackathons. Each member brings unique skills and perspectives, 
            contributing to the vibrant community that is Code Club.
          </SectionDescription>
        </motion.div>

        <Grid container spacing={4} alignItems="stretch">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={member.id} sx={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                style={{ width: '100%' }}
              >
                <MemberCard>
                  <StyledCardContent>
                    <MemberAvatar
                      alt={member.name}
                      src={member.image}
                      sx={{ mb: 3 }}
                    />
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, textAlign: 'center' }}>
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" sx={{ textAlign: 'center', maxWidth: '100%' }}>
                      {member.position}
                    </Typography>
                    
                    <SocialIcons direction="row" spacing={1} justifyContent="center">
                      <IconButton 
                        aria-label="LinkedIn" 
                        component="a" 
                        href={member.social.linkedin} 
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          color: '#0077B5',
                          '&:hover': { 
                            backgroundColor: 'rgba(0, 119, 181, 0.1)',
                          }
                        }}
                      >
                        <LinkedInIcon />
                      </IconButton>
                      <IconButton 
                        aria-label="GitHub" 
                        component="a" 
                        href={member.social.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          color: theme => theme.palette.mode === 'dark' ? '#fff' : '#333',
                          '&:hover': { 
                            backgroundColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                          }
                        }}
                      >
                        <GitHubIcon />
                      </IconButton>
                      <IconButton 
                        aria-label="Instagram" 
                        component="a" 
                        href={member.social.instagram} 
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          color: '#E1306C',
                          '&:hover': { 
                            backgroundColor: 'rgba(225, 48, 108, 0.1)',
                          }
                        }}
                      >
                        <InstagramIcon />
                      </IconButton>
                    </SocialIcons>
                  </StyledCardContent>
                </MemberCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamMembers; 