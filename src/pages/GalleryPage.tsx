import React, { useState } from 'react';
import { Box, Typography, Container, Grid, useTheme, Chip, Stack, IconButton, Dialog, DialogContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryHero from '../components/gallery/GalleryHero';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

// Styled components
const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '16px',
  marginBottom: '24px',
  cursor: 'pointer',
  boxShadow: theme.palette.mode === 'light' 
    ? '0 8px 20px rgba(0, 0, 0, 0.1)' 
    : '0 8px 20px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: theme.palette.mode === 'light' 
      ? '0 12px 30px rgba(0, 0, 0, 0.15)' 
      : '0 12px 30px rgba(0, 0, 0, 0.4)',
    '& .overlay': {
      opacity: 1,
    },
    '& img': {
      filter: 'grayscale(0%)',
    },
    '& .zoom-icon': {
      opacity: 1,
      transform: 'translate(-50%, -50%) scale(1)',
    },
  },
}));

const StyledImage = styled(LazyLoadImage)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  display: 'block',
  transition: 'all 0.5s ease',
  filter: 'grayscale(20%)',
}));

const ImageOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
  padding: '20px',
  opacity: 0,
  transition: 'opacity 0.3s ease',
}));

const ZoomIconOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(0.8)',
  opacity: 0,
  transition: 'all 0.3s ease',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderRadius: '50%',
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
}));

const FilterChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  fontWeight: 500,
  transition: 'all 0.3s ease',
  padding: theme.spacing(0.5, 0),
  '&.MuiChip-filled': {
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    color: 'white',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
  },
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(0.7),
    fontSize: '0.8rem',
    padding: theme.spacing(0.7, 0),
  },
}));

const LightboxNavButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
}));

const SectionTitle = styled(Typography)<{ component?: React.ElementType }>(({ theme }) => ({
  marginBottom: '48px',
  position: 'relative',
  textAlign: 'center',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '4px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: '2px',
  },
}));

// Interface for gallery images
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string[];
  aspectRatio: string;
}

// Gallery data with categories
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/gallery/6.jpg',
    alt: 'Tech Talk Series',
    title: 'Tech Talk Series',
    description: 'Industry experts sharing insights on emerging technologies.',
    category: ['Activity', 'Tech Talk'],
    aspectRatio: '3/2',
  },
  
  {
    id: 2,
    src: '/images/gallery/17.jpg',
    alt: 'Quiz Competition',
    title: 'Quiz Competition',
    description: 'Quiz Competition by Code Club',
    category: ['competition'],
    aspectRatio: '3/4',
  },
  
  {
    id: 3,
    src: '/images/gallery/9.jpg',
    alt: 'Coding Competition',
    title: 'Coding Competition',
    description: 'Students showcasing their problem-solving skills in a timed contest.',
    category: ['competition'],
    aspectRatio: '3/2',
  },

  {
    id: 4,
    src: '/images/gallery/13.jpg',
    alt: 'Coding Competition',
    title: 'Coding Competition',
    description: 'Students showcasing their problem-solving skills in a timed contest.',
    category: ['competition'],
    aspectRatio: '3/4',
  },

  {
    id: 5,
    src: '/images/gallery/14.jpg',
    alt: 'Coding Competition',
    title: 'Coding Competition',
    description: 'Students showcasing their problem-solving skills in a timed contest.',
    category: ['competition'],
    aspectRatio: '3/2',
  },
  
  {
    id: 6,
    src: '/images/gallery/16.jpg',
    alt: 'Quiz Competition',
    title: 'Quiz Competition',
    description: 'Quiz Competition by Code Club',
    category: ['competition'],
    aspectRatio: '3/4',
  },

  {
    id: 7,
    src: '/images/gallery/quiz-competition01.jpeg',
    alt: 'Quiz Competition',
    title: 'Quiz Competition',
    description: 'Quiz Competition by Code Club',
    category: ['competition'],
    aspectRatio: '3/2',
  },

  {
    id: 8,
    src: '/images/gallery/web-dev01.jpeg',
    alt: 'Web Dev Workshop',
    title: 'Web Dev Workshop',
    description: 'Workshop by Code Club',
    category: ['Workshop', 'Tech Talk', 'Web Development Workshop'],
    aspectRatio: '3/2',
  },

  {
    id: 9,
    src: '/images/gallery/web-dev02.jpeg',
    alt: 'Web Dev Workshop',
    title: 'Web Dev Workshop',
    description: 'Workshop by Code Club',
    category: ['Workshop', 'Tech Talk', 'Web Development Workshop'],
    aspectRatio: '3/2',
  },
];

// Get unique categories
const categories = ['all', ...Array.from(new Set(galleryImages.flatMap(img => img.category)))];

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category.includes(selectedCategory));

  return (
    <Box>
      <GalleryHero />
      <Container maxWidth="lg">
        <Box sx={{ py: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle variant="h4" gutterBottom>
              Event Highlights
            </SectionTitle>
          </motion.div>
          
          {/* Category Filters */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mb: { xs: 4, sm: 6 }, 
            mt: { xs: 2, sm: 0 },
            px: { xs: 1, sm: 0 }
          }}>
            <Stack 
              direction="row" 
              spacing={{ xs: 0.5, sm: 1 }} 
              flexWrap="wrap" 
              justifyContent="center"
              sx={{ 
                maxWidth: '100%',
                rowGap: { xs: 0.5, sm: 0.8 }
              }}
            >
              {categories.map((category) => (
                <FilterChip
                  key={category}
                  label={category.charAt(0).toUpperCase() + category.slice(1)}
                  onClick={() => handleCategoryChange(category)}
                  color="primary"
                  variant={selectedCategory === category ? 'filled' : 'outlined'}
                  size="medium"
                  sx={{ 
                    m: { xs: 0.5, sm: 0.7 },
                    height: { xs: '32px', sm: '36px' },
                    my: { xs: 1, sm: 1.2 }
                  }}
                />
              ))}
            </Stack>
          </Box>
          
          {/* Masonry Grid Layout */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                {filteredImages
                  .filter((_, index) => index % 3 === 0)
                  .map((image, index) => {
                    const imageIndex = galleryImages.findIndex(img => img.id === image.id);
                    return (
                      <motion.div
                        key={image.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        layout
                      >
                        <ImageContainer onClick={() => openLightbox(imageIndex)}>
                          <StyledImage
                            src={image.src}
                            alt={image.alt}
                            effect="blur"
                            style={{ aspectRatio: image.aspectRatio, objectFit: 'cover' }}
                          />
                          <ImageOverlay className="overlay">
                            <Typography variant="h6" color="white" sx={{ mb: 1 }}>
                              {image.title}
                            </Typography>
                            <Typography variant="body2" color="white" sx={{ mb: 1 }}>
                              {image.description}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                              {image.category.map((cat, idx) => (
                                <Typography 
                                  key={idx} 
                                  variant="caption" 
                                  sx={{ 
                                    color: 'white', 
                                    bgcolor: 'rgba(255,255,255,0.2)', 
                                    px: 1, 
                                    py: 0.3, 
                                    borderRadius: 1,
                                    fontSize: '0.7rem'
                                  }}
                                >
                                  {cat}
                                </Typography>
                              ))}
                            </Box>
                          </ImageOverlay>
                          <ZoomIconOverlay className="zoom-icon">
                            <ZoomInIcon fontSize="large" />
                          </ZoomIconOverlay>
                        </ImageContainer>
                      </motion.div>
                    );
                  })}
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                {filteredImages
                  .filter((_, index) => index % 3 === 1)
                  .map((image, index) => {
                    const imageIndex = galleryImages.findIndex(img => img.id === image.id);
                    return (
                      <motion.div
                        key={image.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                        layout
                      >
                        <ImageContainer onClick={() => openLightbox(imageIndex)}>
                          <StyledImage
                            src={image.src}
                            alt={image.alt}
                            effect="blur"
                            style={{ aspectRatio: image.aspectRatio, objectFit: 'cover' }}
                          />
                          <ImageOverlay className="overlay">
                            <Typography variant="h6" color="white" sx={{ mb: 1 }}>
                              {image.title}
                            </Typography>
                            <Typography variant="body2" color="white" sx={{ mb: 1 }}>
                              {image.description}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                              {image.category.map((cat, idx) => (
                                <Typography 
                                  key={idx} 
                                  variant="caption" 
                                  sx={{ 
                                    color: 'white', 
                                    bgcolor: 'rgba(255,255,255,0.2)', 
                                    px: 1, 
                                    py: 0.3, 
                                    borderRadius: 1,
                                    fontSize: '0.7rem'
                                  }}
                                >
                                  {cat}
                                </Typography>
                              ))}
                            </Box>
                          </ImageOverlay>
                          <ZoomIconOverlay className="zoom-icon">
                            <ZoomInIcon fontSize="large" />
                          </ZoomIconOverlay>
                        </ImageContainer>
                      </motion.div>
                    );
                  })}
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                {filteredImages
                  .filter((_, index) => index % 3 === 2)
                  .map((image, index) => {
                    const imageIndex = galleryImages.findIndex(img => img.id === image.id);
                    return (
                      <motion.div
                        key={image.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                        layout
                      >
                        <ImageContainer onClick={() => openLightbox(imageIndex)}>
                          <StyledImage
                            src={image.src}
                            alt={image.alt}
                            effect="blur"
                            style={{ aspectRatio: image.aspectRatio, objectFit: 'cover' }}
                          />
                          <ImageOverlay className="overlay">
                            <Typography variant="h6" color="white" sx={{ mb: 1 }}>
                              {image.title}
                            </Typography>
                            <Typography variant="body2" color="white" sx={{ mb: 1 }}>
                              {image.description}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                              {image.category.map((cat, idx) => (
                                <Typography 
                                  key={idx} 
                                  variant="caption" 
                                  sx={{ 
                                    color: 'white', 
                                    bgcolor: 'rgba(255,255,255,0.2)', 
                                    px: 1, 
                                    py: 0.3, 
                                    borderRadius: 1,
                                    fontSize: '0.7rem'
                                  }}
                                >
                                  {cat}
                                </Typography>
                              ))}
                            </Box>
                          </ImageOverlay>
                          <ZoomIconOverlay className="zoom-icon">
                            <ZoomInIcon fontSize="large" />
                          </ZoomIconOverlay>
                        </ImageContainer>
                      </motion.div>
                    );
                  })}
              </Grid>
            </Grid>
          </motion.div>
          
          {/* Lightbox */}
          <Dialog
            open={lightboxOpen}
            onClose={closeLightbox}
            maxWidth="lg"
            fullWidth
            PaperProps={{
              sx: {
                bgcolor: 'background.paper',
                boxShadow: 24,
                borderRadius: 2,
                overflow: 'hidden',
                position: 'relative',
              },
            }}
          >
            <IconButton
              onClick={closeLightbox}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'white',
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1,
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
            
            <DialogContent sx={{ p: 0, position: 'relative', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {galleryImages.length > 0 && (
                <>
                  <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box sx={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img
                        src={galleryImages[currentImage].src}
                        alt={galleryImages[currentImage].alt}
                        style={{ 
                          maxHeight: '100%', 
                          maxWidth: '100%', 
                          objectFit: 'contain',
                          aspectRatio: galleryImages[currentImage].aspectRatio
                        }}
                      />
                      
                      <LightboxNavButton
                        onClick={goToPrevious}
                        sx={{ left: 16 }}
                        aria-label="previous image"
                      >
                        <ArrowBackIosNewIcon />
                      </LightboxNavButton>
                      
                      <LightboxNavButton
                        onClick={goToNext}
                        sx={{ right: 16 }}
                        aria-label="next image"
                      >
                        <ArrowForwardIosIcon />
                      </LightboxNavButton>
                    </Box>
                    
                    <Box sx={{ p: 3, bgcolor: 'background.paper' }}>
                      <Typography variant="h5" gutterBottom>
                        {galleryImages[currentImage].title}
                      </Typography>
                      <Typography variant="body1">
                        {galleryImages[currentImage].description}
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
                        {galleryImages[currentImage].category.map((cat, index) => (
                          <Chip 
                            key={index}
                            label={cat.charAt(0).toUpperCase() + cat.slice(1)} 
                            color="primary" 
                            size="small"
                            sx={{ mt: 1 }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Box>
                </>
              )}
            </DialogContent>
          </Dialog>
        </Box>
      </Container>
    </Box>
  );
};

export default GalleryPage; 