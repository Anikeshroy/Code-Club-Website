import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button, Paper, Grid, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import JoinHero from '../components/join/JoinHero';

// Styled components
const FormContainer = styled(Paper)(({ theme }) => ({
  padding: '40px',
  borderRadius: '16px',
  background: theme.palette.mode === 'light' 
    ? 'rgba(255, 255, 255, 0.8)' 
    : 'rgba(30, 30, 30, 0.8)',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.1)'}`,
  boxShadow: theme.palette.mode === 'light'
    ? '0 8px 32px rgba(0, 0, 0, 0.05)'
    : '0 8px 32px rgba(0, 0, 0, 0.2)',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: '24px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: '2px',
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.primary.main,
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: '16px',
  padding: '12px 32px',
  borderRadius: '30px',
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: '#fff',
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '1rem',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
  },
}));

const JoinPage: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    regNumber: '',
    college: '',
    branch: '',
    year: '',
    phone: '',
    interests: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <Box>
      <JoinHero />
      <Container maxWidth="md">
        <Box sx={{ py: 8 }}>
          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FormContainer>
                <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
                  Member Registration Form
                </Typography>
                
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <StyledTextField
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <StyledTextField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <StyledTextField
                        label="Registration Number"
                        name="regNumber"
                        value={formData.regNumber}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <StyledTextField
                        label="College Name"
                        name="college"
                        value={formData.college}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <StyledTextField
                        label="Branch"
                        name="branch"
                        value={formData.branch}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <StyledTextField
                        label="Year of Study"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <StyledTextField
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <StyledTextField
                        label="Areas of Interest"
                        name="interests"
                        value={formData.interests}
                        onChange={handleChange}
                        fullWidth
                        placeholder="e.g., Web Development, AI, Competitive Programming"
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <SubmitButton type="submit" variant="contained" disableElevation>
                          Submit Registration
                        </SubmitButton>
                      </motion.div>
                    </Grid>
                  </Grid>
                </form>
              </FormContainer>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FormContainer sx={{ textAlign: 'center', py: 8 }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ color: theme.palette.primary.main }}>
                  Registration Successful!
                </Typography>
                <Typography variant="body1" paragraph>
                  Thank you for registering with the Code Club. We have received your information and will contact you soon with further details.
                </Typography>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  onClick={() => setSubmitted(false)}
                  sx={{ mt: 2, borderRadius: '30px', textTransform: 'none' }}
                >
                  Register Another Member
                </Button>
              </FormContainer>
            </motion.div>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default JoinPage; 