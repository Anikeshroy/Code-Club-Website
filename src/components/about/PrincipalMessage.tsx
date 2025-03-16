import React from 'react';
import { Box, Typography, Container, Paper, Avatar, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const MessagePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4, 5),
  borderRadius: 16,
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
  background: theme.palette.mode === 'light' 
    ? 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)' 
    : 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: theme.palette.mode === 'light'
      ? 'radial-gradient(circle at 100% 100%, rgba(63, 81, 181, 0.05) 0%, transparent 50%)'
      : 'radial-gradient(circle at 100% 100%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)',
    zIndex: 0,
  }
}));

const LargeAvatar = styled(Avatar)(({ theme }) => ({
  width: 180,
  height: 180,
  border: `4px solid ${theme.palette.background.paper}`,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
  margin: '0 auto',
}));

const QuoteIcon = styled(Box)(({ theme }) => ({
  fontSize: '5rem',
  lineHeight: 1,
  fontFamily: 'Georgia, serif',
  color: theme.palette.mode === 'light' 
    ? 'rgba(63, 81, 181, 0.1)' 
    : 'rgba(99, 102, 241, 0.1)',
  position: 'absolute',
  top: 20,
  left: 20,
}));

const PrincipalMessage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom 
            align="center"
            sx={{ 
              mb: 5, 
              fontWeight: 600,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                borderRadius: 2,
                background: (theme) => `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              }
            }}
          >
            A Word From Our Principal
          </Typography>
        </motion.div>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <LargeAvatar 
                  alt="Principal Name" 
                  src="/images/principal/principal-profile.png" 
                  sx={{ mb: 3 }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Dr. Ashish Kumar
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  Principal, GEC Jamui
                </Typography>
                {/* <Typography variant="subtitle2" color="text.secondary">
                  Government Engineering College, Jamui
                </Typography> */}
              </Box>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <MessagePaper elevation={0}>
                <QuoteIcon>"</QuoteIcon>
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', mb: 3 }}>
                    I am immensely proud of the Code Club at GEC Jamui and the remarkable work they are doing to foster technical excellence among our students. In today's rapidly evolving technological landscape, coding skills are not just an advantage but a necessity.
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', mb: 3 }}>
                    The Code Club has created a vibrant ecosystem where students can learn, collaborate, and innovate. Their workshops, hackathons, and mentorship programs have significantly enhanced the technical capabilities of our students and prepared them for successful careers in the industry.
                  </Typography>
                  <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                    I encourage all students to actively participate in the Code Club's activities and make the most of this excellent platform for growth and development.
                  </Typography>
                </Box>
              </MessagePaper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PrincipalMessage; 