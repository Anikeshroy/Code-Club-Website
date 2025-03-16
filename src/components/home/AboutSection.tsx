import React from 'react';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowForward, 
  Code, 
  People, 
  EmojiEvents, 
  School
} from '@mui/icons-material';
import Button from "@mui/material/Button";

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: theme.palette.background.default,
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

const GradientText = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 800,
  marginBottom: theme.spacing(3),
  position: 'relative',
  display: 'inline-block',
  fontSize: '2.75rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const LearnMoreButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  borderRadius: '50px',
  padding: '12px 32px',
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: theme.palette.common.white,
  fontWeight: 600,
  fontSize: '1rem',
  textTransform: 'none',
  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
  },
  transition: 'all 0.3s ease',
}));

const FeatureBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(2.5),
  padding: theme.spacing(1.5, 0),
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateX(5px)',
  },
  '& svg': {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
    fontSize: '1.75rem',
    transition: 'all 0.3s ease',
  },
  '&:hover svg': {
    transform: 'scale(1.2)',
    color: theme.palette.secondary.main,
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -15,
    left: -15,
    width: '100%',
    height: '100%',
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '10px',
    zIndex: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -15,
    right: -15,
    width: '100%',
    height: '100%',
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: '10px',
    zIndex: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const AboutSection: React.FC = () => {
  const theme = useTheme();
  
  const features = [
    {
      icon: <Code />,
      title: 'Coding Workshops',
      description: 'Regular hands-on sessions on various programming languages and technologies.'
    },
    {
      icon: <People />,
      title: 'Collaborative Projects',
      description: 'Work with peers on real-world projects to build your portfolio.'
    },
    {
      icon: <EmojiEvents />,
      title: 'Hackathons & Contests',
      description: 'Participate in coding competitions to challenge yourself.'
    },
    {
      icon: <School />,
      title: 'Mentorship',
      description: 'Get guidance from experienced seniors and industry professionals.'
    }
  ];

  return (
    <SectionContainer>
      {/* Floating decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}11, ${theme.palette.primary.main}00)`,
          zIndex: 0,
          animation: 'float 8s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.secondary.main}11, ${theme.palette.secondary.main}00)`,
          zIndex: 0,
          animation: 'float2 6s ease-in-out infinite',
          '@keyframes float2': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-15px)' },
          },
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }} sx={{ minHeight: { md: '500px' } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <GradientText variant="h2">
                About Code Club
              </GradientText>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 3, 
                  fontSize: { xs: '1rem', sm: '1.1rem' }, 
                  lineHeight: 1.2,
                  color: theme => theme.palette.text.secondary,
                  maxWidth: '600px'
                }}
              >
                Code Club is a student-led organization at GEC Jamui dedicated to fostering a vibrant coding culture.
                {/* We provide a platform for students to learn, collaborate, and grow their programming skills through
                workshops, hackathons, and project-based learning. */}
              </Typography>
              
              <Box sx={{ mb: -3 }}>
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <FeatureBox>
                      {feature.icon}
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.25 }}>
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.2 }}>
                          {feature.description}
                        </Typography>
                      </Box>
                    </FeatureBox>
                  </motion.div>
                ))}
              </Box>
              
              <Box sx={{ mt: 'auto' }}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link to="/about" style={{ textDecoration: 'none' }}>
                    <LearnMoreButton
                      variant="contained"
                      disableElevation
                      endIcon={<ArrowForward />}
                    >
                      Learn More About Us
                    </LearnMoreButton>
                  </Link>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} sx={{ display: 'flex', alignItems: 'center', minHeight: { md: '500px' } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ width: '100%', height: '100%' }}
            >
              <ImageContainer sx={{ position: 'relative' }}>
                <Box
                  component="img"
                  src="/images/CC-about/cc_l.jpg"
                  alt="About Code Club"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    margin: '0 auto',
                    borderRadius: '10px',
                    boxShadow: '0 16px 32px rgba(0, 0, 0, 0.15)',
                    position: 'relative',
                    zIndex: 1,
                    transition: 'all 0.5s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                    }
                  }}
                />
                
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: -10, md: -20 },
                    right: { xs: -10, md: -20 },
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    zIndex: 2,
                    display: { xs: 'none', sm: 'block' },
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%': { boxShadow: '0 0 0 0 rgba(63, 81, 181, 0.4)' },
                      '70%': { boxShadow: '0 0 0 15px rgba(63, 81, 181, 0)' },
                      '100%': { boxShadow: '0 0 0 0 rgba(63, 81, 181, 0)' },
                    },
                  }}
                />
                
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: { xs: -10, md: -20 },
                    left: { xs: -10, md: -20 },
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                    zIndex: 2,
                    display: { xs: 'none', sm: 'block' },
                    animation: 'pulse 2s infinite 1s',
                  }}
                />
                
                {/* Code symbols floating around the image */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '10%',
                    right: '-5%',
                    fontFamily: 'monospace',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: theme.palette.primary.main,
                    opacity: 0.7,
                    zIndex: 2,
                    display: { xs: 'none', md: 'block' },
                    animation: 'float3 4s ease-in-out infinite',
                    '@keyframes float3': {
                      '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                      '50%': { transform: 'translateY(-10px) rotate(5deg)' },
                    },
                  }}
                >
                  {'</>'}
                </Box>
                
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '15%',
                    left: '-5%',
                    fontFamily: 'monospace',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: theme.palette.secondary.main,
                    opacity: 0.7,
                    zIndex: 2,
                    display: { xs: 'none', md: 'block' },
                    animation: 'float4 5s ease-in-out infinite 1s',
                    '@keyframes float4': {
                      '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                      '50%': { transform: 'translateY(-12px) rotate(-5deg)' },
                    },
                  }}
                >
                  {'{}'}
                </Box>
              </ImageContainer>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default AboutSection; 