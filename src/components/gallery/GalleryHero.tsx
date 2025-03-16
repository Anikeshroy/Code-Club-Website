import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Styled components
const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '60vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  background: theme.palette.mode === 'light'
    ? 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)'
    : 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: theme.palette.mode === 'light'
      ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%25\' height=\'100%25\'%3E%3Cdefs%3E%3ClinearGradient id=\'a\' x1=\'0\' x2=\'0\' y1=\'0\' y2=\'1\'%3E%3Cstop offset=\'0\' stop-color=\'%233f51b5\' stop-opacity=\'0.1\'/%3E%3Cstop offset=\'1\' stop-color=\'%23f50057\' stop-opacity=\'0.1\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id=\'b\' width=\'24\' height=\'24\' patternUnits=\'userSpaceOnUse\'%3E%3Ccircle fill=\'url(%23a)\' cx=\'12\' cy=\'12\' r=\'3\'/%3E%3C/pattern%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23b)\'/%3E%3C/svg%3E")'
      : 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%25\' height=\'100%25\'%3E%3Cdefs%3E%3ClinearGradient id=\'a\' x1=\'0\' x2=\'0\' y1=\'0\' y2=\'1\'%3E%3Cstop offset=\'0\' stop-color=\'%235c6bc0\' stop-opacity=\'0.1\'/%3E%3Cstop offset=\'1\' stop-color=\'%23ff4081\' stop-opacity=\'0.1\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id=\'b\' width=\'24\' height=\'24\' patternUnits=\'userSpaceOnUse\'%3E%3Ccircle fill=\'url(%23a)\' cx=\'12\' cy=\'12\' r=\'3\'/%3E%3C/pattern%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23b)\'/%3E%3C/svg%3E")',
    opacity: 0.6,
    zIndex: 0,
  },
}));

const ContentContainer = styled(Box)({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
});

const GradientText = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
}));

const GalleryHero: React.FC = () => {
  return (
    <HeroContainer>
      <Container maxWidth="lg">
        <ContentContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GradientText variant="h2" sx={{ mb: 2 }}>
              Gallery
            </GradientText>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Typography 
              variant="h5" 
              color="textSecondary" 
              sx={{ 
                maxWidth: '800px',
                mx: 'auto',
                fontWeight: 400,
              }}
            >
              Explore our events, workshops, and memorable moments
            </Typography>
          </motion.div>
        </ContentContainer>
      </Container>
    </HeroContainer>
  );
};

export default GalleryHero; 