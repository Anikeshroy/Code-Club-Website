import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Faculty coordinator data
const facultyCoordinators = [
  {
    id: 1,
    name: 'Mr. Sritosh Kumar',
    position: 'HOD, CSE Department',
    image: '/images/faculty/shritosh-kr.jpg',
  },
  {
    id: 2,
    name: 'Mr. Brajesh Kumar',
    position: 'HOD, ECE Department',
    image: '/images/faculty/brajesh-kr.jpg',
  },
  {
    id: 3,
    name: 'Mr. Debesh Sandaliya',
    position: 'Assistant Professor, CSE Department',
    image: '/images/faculty/debesh-san2.jpg',
  },
  {
    id: 4,
    name: 'Mr. Manish Kumar',
    position: 'Assistant Professor, CSE Department',
    image: '/images/faculty/manish-kr_output.jpeg',
  },
  {
    id: 5,
    name: 'Mr. Prashant Kumar',
    position: 'Assistant Professor, CSE Department',
    image: '/images/faculty/prashant-kr.jpeg',
  },
  {
    id: 6,
    name: 'Mr. Dharmveer Kumar',
    position: 'Assistant Professor, CSE Department',
    image: '/images/faculty/dhramveer-kr.jpeg',
  },
  {
    id: 7,
    name: 'Miss. Jyoti Kumari',
    position: 'Assistant Professor, CSE Department',
    image: '/images/faculty/jyoti-kri_output.jpeg',
  },
  {
    id: 5,
    name: 'Miss. Kanchan Kumari',
    position: 'Assistant Professor, CSE Department',
    image: '/images/faculty/kanchan-kri_output.jpeg',
  },
  {
    id: 5,
    name: 'Miss. Navodita Saini',
    position: 'Assistant Professor, CSE Department',
    image: '/images/faculty/rajiv-mishra.jpg',
  },

];

const SectionTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  fontWeight: 600,
  marginBottom: theme.spacing(6),
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

const CoordinatorCard = styled(Card)(({ theme }) => ({
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

const CoordinatorAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  margin: '0 auto',
  border: `4px solid ${theme.palette.background.paper}`,
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
}));

const FacultyCoordinators: React.FC = () => {
  return (
    <Box sx={{ py: 10, bgcolor: (theme) => theme.palette.mode === 'light' ? 'grey.50' : 'grey.900' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle variant="h4">
            Guidance From Our Faculty Coordinators
          </SectionTitle>
        </motion.div>

        <Grid container spacing={4} alignItems="stretch">
          {facultyCoordinators.map((coordinator, index) => (
            <Grid item xs={12} md={4} key={coordinator.id} sx={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                style={{ width: '100%' }}
              >
                <CoordinatorCard>
                  <StyledCardContent>
                    <CoordinatorAvatar
                      alt={coordinator.name}
                      src={coordinator.image}
                      sx={{ mb: 3 }}
                    />
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, textAlign: 'center' }}>
                      {coordinator.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" sx={{ textAlign: 'center', maxWidth: '100%' }}>
                      {coordinator.position}
                    </Typography>
                  </StyledCardContent>
                </CoordinatorCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FacultyCoordinators; 