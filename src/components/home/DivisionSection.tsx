import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import {
  Code as CodeIcon,
  DataObject as DataIcon,
  Devices as DevicesIcon,
  Cloud as CloudIcon,
} from '@mui/icons-material';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.default,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  fontWeight: 700,
}));

const DivisionCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  borderRadius: theme.shape.borderRadius * 2,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: theme.palette.common.white,
  '& svg': {
    fontSize: 32,
  },
}));

const divisions = [
  {
    title: 'Web Development',
    description: 'Learn modern web technologies and build responsive, dynamic websites and applications.',
    icon: <CodeIcon />,
  },
  {
    title: 'Data Science',
    description: 'Explore data analysis, machine learning, and artificial intelligence.',
    icon: <DataIcon />,
  },
  {
    title: 'App Development',
    description: 'Create mobile applications for Android and iOS platforms.',
    icon: <DevicesIcon />,
  },
  {
    title: 'Cloud Computing',
    description: 'Master cloud platforms and deploy scalable applications.',
    icon: <CloudIcon />,
  },
];

const DivisionSection: React.FC = () => {
  return (
    <SectionContainer>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionTitle variant="h3">
          Our Divisions
        </SectionTitle>
        <Grid container spacing={4}>
          {divisions.map((division, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <DivisionCard elevation={2}>
                  <IconWrapper>
                    {division.icon}
                  </IconWrapper>
                  <Typography variant="h6" gutterBottom>
                    {division.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {division.description}
                  </Typography>
                </DivisionCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default DivisionSection; 