import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar, IconButton, Stack, Button, Collapse } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// Past member data
const pastMembers = [
  {
    id: 1,
    name: 'Nalini Kant',
    position: 'Former President',
    image: '/images/past-members/Nalini-kant.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/ankit-raj',
      github: 'https://github.com/ankitraj',
      instagram: 'https://instagram.com/ankitraj',
    },
  },
  {
    id: 2,
    name: 'Suman Kumar',
    position: 'Former Vice President',
    image: '/images/past-members/Suman-kumar.png',
    social: {
      linkedin: 'https://linkedin.com/in/sneha-kumari',
      github: 'https://github.com/snehakumari',
      instagram: 'https://instagram.com/snehakumari',
    },
  },
  {
    id: 3,
    name: 'Aman Gupta',
    position: 'Deputy Secretary - Photography',
    image: '/images/past-members/Aman-Gupta.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/rohan-verma',
      github: 'https://github.com/rohanverma',
      instagram: 'https://instagram.com/rohanverma',
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
  marginBottom: theme.spacing(3),
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

const ToggleButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  borderRadius: 30,
  padding: theme.spacing(1, 3),
  fontWeight: 600,
  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
  },
}));

const PastMembers: React.FC = () => {
  const [showPastMembers, setShowPastMembers] = useState(false);

  const togglePastMembers = () => {
    setShowPastMembers(!showPastMembers);
  };

  return (
    <Box sx={{ py: 10, bgcolor: (theme) => theme.palette.mode === 'light' ? 'grey.50' : 'grey.900' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle variant="h4">
            Alumni Network
          </SectionTitle>
          <SectionDescription variant="body1">
            We are proud of our former members who have contributed significantly to the growth of Code Club.
            Their legacy continues to inspire current members to achieve excellence.
          </SectionDescription>
          
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <ToggleButton 
              variant="contained" 
              color="primary" 
              onClick={togglePastMembers}
              endIcon={showPastMembers ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            >
              {showPastMembers ? 'Hide Past Members' : 'View Past Members'}
            </ToggleButton>
          </Box>
        </motion.div>

        <Collapse in={showPastMembers}>
          <Grid container spacing={4} alignItems="stretch">
            {pastMembers.map((member, index) => (
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
        </Collapse>
      </Container>
    </Box>
  );
};

export default PastMembers; 